
    function BPromise() {

        this.status = BPromise.STATUS_PENDING;
        this.fHandlerQueue = [];
        this.rHandlerQueue = [];

        this.nextPromise = new BPromise();
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
        return obj.then && obj.getStatus;
    };

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
        } else if ( BPromise.isObject( value ) || BPromise.isFunction( value ) ) {
            // TODO
        } else {
            promise.resolve( value );
        }

    };

    BPromise.prototype.getStatus = function () {
        return this.status;
    };

    BPromise.prototype.resolve = function ( value, promise ) {

        if ( this.status === BPromise.STATUS_PENDING ) {
            this.ffv = value; // fulfilled value
            this.status = BPromise.STATUS_FULFILLED;

            var firstHandler = this.fHandlerQueue.shift();
            var nextFfv;

            while( firstHandler ) {
                try {
                    nextFfv = firstHandler( value );

                    firstHandler = this.fHandlerQueue.shift();
                    if ( !firstHandler ) {
                        this.nextPromise.resolve( nextFfv );
                    }
                } catch ( e ) {
                    // 一旦报错，则直接把下一个promise设置成rejected返回
                    this.nextPromise.reject( e.message );
                    return;
                }

            }

        }
    };

    BPromise.prototype.reject = function ( reason ) {

        if ( this.status === BPromise.STATUS_PENDING ) {
            this.rjr = reason; // rejected reason
            this.status = BPromise.STATUS_REJECTED;

            var firstHandler = this.rHandlerQueue.shift();
            var nextRjr;

            while( firstHandler ) {
                try {
                    nextRjr = firstHandler( value );

                    firstHandler = this.rHandlerQueue.shift();
                    if ( !firstHandler ) {
                        this.nextPromise.resolve( nextRjr );
                    }
                } catch ( e ) {
                    // 一旦报错，则直接把下一个promise设置成rejected返回
                    this.nextPromise.reject( e.message );
                    return;
                }

            }
            
        }       
    };

    BPromise.prototype.then = function ( fulfilledHandler, rejectedHandler ) {
        switch( this.status ) {
            case BPromise.STATUS_PENDING: 
                
                if ( BPromise.isFunction( fulfilledHandler ) ) {
                    this.fHandlerQueue.push( fulfilledHandler )
                }

                if ( BPromise.isFunction( rejectedHandler ) ) {
                    this.rHandlerQueue.push( rejectedHandler );
                }

                break;
            case BPromise.STATUS_FULFILLED:

                if ( BPromise.isFunction( fulfilledHandler ) ) {
                    var nextFfv;
                    try {
                        nextFfv = fulfilledHandler( this.ffv );
                        this.resolvePromise( this.nextPromise, nextFfv );
                    } catch( e ) {
                        this.nextPromise.reject( e.message );
                    }
                    
                } else {
                    this.nextPromise.resolve( this.ffv );
                }
                break;
            case BPromise.STATUS_REJECTED:

                if ( BPromise.isFunction( rejectedHandler ) ) {
                    var nextRfr;
                    try {
                        nextRfr = rejectedHandler( this.rjr );
                        this.resolvePromise( this.nextPromise, nextRfr );
                    } catch( e ) {
                        this.nextPromise.reject( e.message );
                    }
                } else {
                    this.nextPromise.reject( this.rjr );
                }
                break;
        }

        return this.nextPromise;
    };


