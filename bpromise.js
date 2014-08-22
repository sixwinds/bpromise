( function ( global, undefined ) {

    var Utils = {
        isFunction: function ( f ) {
            return typeof f === 'function';
        },
        async: setTimeout
    }

    function BPromise () {
        this.__status__ = BPromise.STATUS_PENDING;
        this.callbackChain = [];
    }

    BPromise.STATUS_PENDING = 0;
    BPromise.STATUS_FULFILLED = 1;
    BPromise.STATUS_REJECTED = 2;

    BPromise.prototype.changeStatus = function ( statusCode, value ) {
        this.__status__ = statusCode;
        this.__value__ = value;
    };

    BPromise.prototype.resolve = function( v ) {
        if ( this.__status__ === BPromise.STATUS_PENDING ) {
            this.changeStatus( BPromise.STATUS_FULFILLED, v );

            var self = this;
            Utils.async( function () {
                // loop in invokeCallback 
            } );
        }
    };

    BPromise.prototype.reject = function( v ) {
        if ( this.__status__ === BPromise.STATUS_PENDING ) {
            this.changeStatus( BPromise.STATUS_REJECTED, v );

            var self = this;
            Utils.async( function () {
                // loop in invokeCallback 
            } );
        }
    };

    BPromise.prototype.invokeCallback = function () {
        // 1. not function

        // 2. callback throw exception

        // 3. create a return promise by callback return value X
        // 3.1 x === current promise
        // 3.2 x is a promise
        // 3.3 x is thenable obj

    };

    BPromise.prototype.then = function ( onFulfilled, onRejected ) {
        if ( this.__status__ === BPromise.STATUS_PENDING ) {
          
        } else {
            Utils.async( function () {
                // invokeCallback 
            } ); 
        }
    };

} )( window );