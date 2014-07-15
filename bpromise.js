
    function BPromise() {

        this.status = BPromise.STATUS_PENDING;
        this.callbackObjChain = [];
    }

    // @const
    BPromise.STATUS_PENDING = 'pending';
    // @const
    BPromise.STATUS_FULFILLED = 'fulfilled';
    // @const
    BPromise.STATUS_REJECTED = 'rejected';

    // @static
    BPromise.isFunction = function ( f ) {
        // 这么判断是否满足所有浏览器，还需要调研
        return typeof f === 'function';
    };
    // @static
    BPromise.isObject = function ( o ) {
        return Object.prototype.toString.call( o ) === '[object Object]';
    };
    // @static
    BPromise.isValidStatus = function ( s ) {
        return [ BPromise.STATUS_PENDING, BPromise.STATUS_FULFILLED, BPromise.STATUS_REJECTED ].indexOf( s ) > -1;
    };
    // @static
    BPromise.isPromise = function ( obj ) {
        return obj.then && obj.__BP__ === 1;
    };

    BPromise.isThenable = function ( o ) {
        var bp = BPromise;

        return ( bp.isObject( o ) || bp.isFunction( o ) ) && bp.isFunction( o.then ); 
    };

    BPromise.prototype.__BP__ = 1;

    BPromise.prototype.getFulfilledValue = function () {
        return this.ffv;
    };

    BPromise.prototype.getRejectedReason = function () {
        return this.rjr;
    };



    // promise resolution procdure
    BPromise.prototype.resolvePromise = function ( promise, value ) {

        if ( promise === value ) throw new TypeError( 'Parameters of resolvePromise can not be the same object.' );

        if ( BPromise.isPromise( value ) ) {

            var valueStatus = value.getStatus();
            switch( valueStatus ) {

                case BPromise.STATUS_PENDING:
                    value.then( function ( v ) {
                        promise.resolve( v );
                    }, function ( r ) {
                        promise.reject( r );
                    } )
                    break;

                case BPromise.STATUS_FULFILLED:
                    promise.resolve( value.getFulfilledValue() );
                    break;

                case BPromise.STATUS_REJECTED:
                    promise.reject( value.getRejectedReason() );
                    break;
            }
        } else if ( BPromise.isThenable( value ) ) {
            value.then( function ( v ) {
                promise.resolve( v );
            }, function ( r ) {
                promise.reject( r );
            } )
        } else {
            promise.resolve( value );
        }

        return promise;
    };

    BPromise.prototype.getStatus = function () {
        return this.status;
    };

    BPromise.prototype.invokeCallback = function ( promise, value, callback ) {
        try {
            this.resolvePromise( promise, callback( value ) );
        } catch( e ) {
            // 一旦报错，则直接把 callback 对应的 promise设置成 rejected
            promise.reject( e.message );
        }
       
    }

    BPromise.prototype.resolve = function ( value, promise ) {

        if ( this.status === BPromise.STATUS_PENDING ) {
            this.ffv = value; // fulfilled value
            this.status = BPromise.STATUS_FULFILLED;

            var cbo = this.callbackObjChain.shift();

            while( cbo ) {
                if ( cbo.fulfilledHandler ) {
                    this.invokeCallback( cbo.promise, this.ffv, cbo.fulfilledHandler );
                } else {
                    // 如果 fulfilledHandler 不是 function，则用当前 promise1 的值把对应的 promise2 置为 fulfilled 状态
                    cbo.promise.resolve( this.ffv )
                }
                
                cbo = this.callbackObjChain.shift();
            }

        }
    };

    BPromise.prototype.reject = function ( reason ) {

        if ( this.status === BPromise.STATUS_PENDING ) {
            this.rjr = reason; // rejected reason
            this.status = BPromise.STATUS_REJECTED;

            var cbo = this.callbackObjChain.shift();

            while( cbo ) {
                if ( cbo.rejectedHandler ) {
                    this.invokeCallback( cbo.promise, this.rjr, cbo.rejectedHandler );
                } else {
                    // 如果 rejectedHandler 不是 function，则用当前 promise1 的值把对应的 promise2 置为 rejected 状态
                    cbo.promise.reject( this.rjr );
                }
                
                cbo = this.callbackObjChain.shift();
            }
            
        }       
    };

    BPromise.prototype.then = function ( fulfilledHandler, rejectedHandler ) {
        var o = {
            fulfilledHandler: BPromise.isFunction( fulfilledHandler ) ? fulfilledHandler : false,
            rejectedHandler: BPromise.isFunction( rejectedHandler ) ? rejectedHandler : false,
        };

        var p = new BPromise();
        o.promise = p;

        switch( this.status ) {
            case BPromise.STATUS_PENDING: 
                this.callbackObjChain.push( o );
                break;

            case BPromise.STATUS_FULFILLED:
                if ( o.fulfilledHandler ) {
                   this.invokeCallback( p, this.ffv, o.fulfilledHandler );
                } else {
                    p.resolve( this.ffv );
                }
                
                break;
            case BPromise.STATUS_REJECTED:
                if ( o.rejectedHandler ) {
                    this.invokeCallback( p, this.rjr, o.rejectedHandler );
                } else {
                    p.reject( this.rjr );
                }
                break;
        }

        return p;
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

