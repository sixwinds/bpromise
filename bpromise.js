
    function BPromise() {

        this.status = BPromise.STATUS_PENDING;
        this.fHandlerQueue = [];
        this.rHandlerQueue = [];

        this.nextPromise = new BPromise();
    }

    BPromise.STATUS_PENDING = 'pending';
    BPromise.STATUS_FULFILLED = 'fulfilled';
    BPromise.STATUS_REJECTED = 'rejected';

    BPromise.isFunction = function ( f ) {
        // 这么判断是否满足所有浏览器，还需要调研
        return typeof f === 'function';
    }

    BPromise.isValidStatus = function ( s ) {
        return [ BPromise.STATUS_PENDING, BPromise.STATUS_FULFILLED, BPromise.STATUS_REJECTED ].indexOf( s ) > -1;
    }

    BPromise.prototype.resolve = function ( value ) {

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
                        this.nextPromise.resolve( nextFfv );
                    } catch( e ) {
                        this.nextPromise.reject( e.message );
                    }
                    
                }
                break;
            case BPromise.STATUS_REJECTED:

                if ( BPromise.isFunction( rejectedHandler ) ) {
                    var nextRfr;
                    try {
                        nextRfr = rejectedHandler( this.rjr );
                        this.nextPromise.resolve( nextRfr );
                    } catch( e ) {
                        this.nextPromise.reject( e.message );
                    }
                }
                break;
        }

        return this.nextPromise;
    };


