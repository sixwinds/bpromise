( function ( global, undefined ) {

    if ( !Array.prototype.forEach ) {
        Array.prototype.forEach = function ( fn, thisArg ) {
            var i;
            var len = this.length;
            
            for ( i = 0; i < len; i++ ) {
                fn.call( thisArg, this[ i ], i, this );
            }
        }
    }

    var Utils = {
        isFunction: function ( f ) {
            return f && typeof f === 'function';
        },
        isObject: function ( o ) {
            return o && typeof o === 'object';
        },
        async: setTimeout
    }

    var METHOD_NAME_RESOLVE = 'resolve';
    var METHOD_NAME_REJECT = 'reject';

    function BPromise () {
        this.__status__ = BPromise.STATUS_PENDING;
        this.callbackChain = [];
    }

    BPromise.STATUS_PENDING = 0;
    BPromise.STATUS_RESOLVEED = 1; // 拼写错误是故意的，为了偷懒少写点代码
    BPromise.STATUS_REJECTED = 2;

    BPromise.getMethodName = function ( statusCode ) {
        switch( statusCode) {
            case BPromise.STATUS_REJECTED:
                return METHOD_NAME_REJECT;

            case BPromise.STATUS_RESOLVEED:
                return METHOD_NAME_RESOLVE;
        }
    };

    BPromise.isBPromise = function ( p ) {
        return p && p.constructor === BPromise;
    };

    BPromise.getThenFromThenable = function ( x ) {
        if ( Utils.isFunction( x ) || Utils.isObject( x ) ) {
            var then = x.then;
            return Utils.isFunction( then ) ? then : void 0;
        }
    };

    BPromise.prototype.changeStatus = function ( statusCode, value ) {
        this.__status__ = statusCode;
        this.__value__ = value;
    };

    [ METHOD_NAME_RESOLVE, METHOD_NAME_REJECT ].forEach( function ( methodName ) {

        // 定义 bpromise 对象的 resolve 和 reject 方法
        BPromise.prototype[ methodName ] = function( v ) {

            if ( this.__status__ === BPromise.STATUS_PENDING ) {
                
                this.changeStatus( BPromise[ 'STATUS_' + methodName.toUpperCase() + 'ED' ], v );
                this.notifyCallbackChain();
            }
        }
    } );

    BPromise.prototype.notifyCallbackChain = function () {
        var methodName = BPromise.getMethodName( this.__status__ );
        var self = this;
        Utils.async( function () {
            var cbChain = self.callbackChain;
            self.callbackChain = [];

            var len = cbChain.length;
            var i;
            for ( i = 0; i < len; i++ ) {
                var currentCallbackObj = cbChain[ i ];

                self.invokeCallback( currentCallbackObj[ 'on' + methodName ], currentCallbackObj.p );                        
            }

        } );
    };

    // 根据调用 callback 的状态（ 正常返回，抛异常，以及 callback 非函数 ）来处理 then 的返回的 promise 的状态。
    BPromise.prototype.invokeCallback = function ( callback, promise ) {

        var methodName = BPromise.getMethodName( this.__status__ );

        // 1. 如果回调函数不是 function，则保持 then 返回的 promise 和当前 promise 状态和值一致
        if ( !Utils.isFunction( callback ) ) {
            if ( this.__status__ === BPromise.STATUS_RESOLVEED || this.__status__ === BPromise.STATUS_REJECTED ) {
                promise[ methodName ]( this.__value__ );
            }
            return;
        }

        var x; // callback 执行后的返回值
        try {

            x = callback( this.__value__ );
            // 2. create a return promise by callback return value X
            this.resolvePromise( promise, x );

        } catch ( e ) {
            // 3. callback throw exception
            promise[ METHOD_NAME_REJECT ]( e );
        }

    };

    // 根据 callback 的返回值 x，来处理 then 返回的 promise 的状态
    BPromise.prototype.resolvePromise = function ( promise, x ) {

        // 3. create a return promise by callback return value X
        // 3.1 if x === current promise
        if ( promise === x ) {
             throw new TypeError( 'Return promise of method "then" can not be the same object to current promise.' );
        }
    
        // 3.2 if x is a promise
        if ( BPromise.isBPromise( x ) ) {

            var onFulfilled = function( v ) {
                promise[ METHOD_NAME_RESOLVE ]( v );
            }
            var onRejected = function( v ) {
                promise[ METHOD_NAME_REJECT ]( v );
            }
            x.then( onFulfilled, onRejected);

        } else {

            // 3.3 if x is thenable obj
            var thenableThen;
            // 如果在检查 thenable 对象的 then 方法时候报错，则 then 返回的 promise 置为 rejected 状态
            try {
                thenableThen = BPromise.getThenFromThenable( x );
            } catch ( e ) {
                promise[ METHOD_NAME_REJECT ]( e );
                return;
            }

            if ( thenableThen ) {
            // do 3.3
                this.handleThenable( promise, x, thenableThen );
            } else {
            // 3.4 default: x is normal value
                promise[ METHOD_NAME_RESOLVE ]( x );                
            }
        }

    }

    BPromise.prototype.handleThenable = function ( promise, thenableObj, then ) {
        try {
            var self = this;
            var callbackInvoked = false;
            var resolvePromise = function ( y ) {
                if ( !callbackInvoked ) {
                    self.resolvePromise( promise, y );
                    callbackInvoked = true;
                }
            };
            var rejectPromise = function ( y ) {
                if ( !callbackInvoked ) {
                    promise[ METHOD_NAME_REJECT ]( y );
                    callbackInvoked = true;
                } 
            };
            then.call( thenableObj, resolvePromise, rejectPromise );
        } catch ( e ) {
            if ( !callbackInvoked ) {
                promise[ METHOD_NAME_REJECT ]( e );
            }
        }
    }

    BPromise.prototype.then = function ( onFulfilled, onRejected ) {
        var returnPromise = new BPromise();
        var callbackObj = {
            p: returnPromise
        }
        callbackObj[ 'on' + METHOD_NAME_RESOLVE ] = onFulfilled;
        callbackObj[ 'on' + METHOD_NAME_REJECT ] = onRejected;


        this.callbackChain.push( callbackObj );

        // 如果当前 promise 是 fullfilled 或者 rejected，则调用对应的 resolve 或者 reject 方法
        // pending 则保持现有状态
        if (  this.__status__ === BPromise.STATUS_RESOLVEED || this.__status__ === BPromise.STATUS_REJECTED  ) {
            // 根据状态调用相应的方法
            this.notifyCallbackChain();
        }
        
        return returnPromise;
    };



    // export promises-aplus tests adapter
    BPromise.resolved = function ( value ) {
        var p = new BPromise();
        p.resolve( value );

        return p;
    };

    BPromise.rejected = function ( value ) {
        var p = new BPromise();
        p.reject( value );

        return p;    
    };

    BPromise.deferred = function () {
        var p = new BPromise();

        return {
            promise: p, 
            resolve: function ( v ) {
                p.resolve( v );
            },
            reject: function ( r ) {
                p.reject( r );
            }
        }
    };

    module.exports = BPromise;

} )( global || window );