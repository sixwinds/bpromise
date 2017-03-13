var toString = {}.toString;

var PROMISE_STATUS_PENDING = 'pending';
var PROMISE_STATUS_RESOLVED = 'resolved';
var PROMISE_STATUS_REJECTED = 'rejected';


function isFunction( o ) {
  return toString.call( o ) === '[object Function]';
}

function isObject( o ) {
  return toString.call( o ) === '[object Object]';
}

function isPromise( p ) {
  return p && p.isPromise;
}

function resolvePromise( promise2, x ) {
  if ( promise2 === x ) {
    promise2.reject( new TypeError('A promise cannot be resolved with itself.') )
  } else if ( isPromise(x) ){
    x.then( function(value){
      resolvePromise( promise2, value );
    }, function(reason){
      promise2.reject( reason )
    } )
  } else if (isFunction(x) || isObject(x)) {
    var then;
    try {
      then = x.then;
    } catch ( e ) {
      promise2.reject( e );
      return;
    }
    if ( isFunction(then) ) {
      var isThenableCallbackInvoked = false;
      try {
        then.call( x, function(y){
          if ( !isThenableCallbackInvoked ) {
            isThenableCallbackInvoked = true;
            resolvePromise( promise2, y );
          }
        }, function(r){
          if ( !isThenableCallbackInvoked ) {
            isThenableCallbackInvoked = true;
            promise2.reject( r );
          }
        } );
      } catch( e ){
        if ( !isThenableCallbackInvoked ) {
          isThenableCallbackInvoked = true;
          promise2.reject( e );
        }
      }
    } else {
      promise2.resolve( x );
    }
  } else {
    promise2.resolve( x );
  }
}

function resolveCallbackPromiseQueue( queue, status, value ) {
  if ( queue ) {
    var len = queue.length;
    for( var i = 0; i < len; i++ ) {
      var queueItem = queue[ i ];
      var callbackFunc = queueItem.callback;
      var promise2 = queueItem.promise;

      if ( callbackFunc ) {
        var x;
        try {
          x = callbackFunc( value );
        } catch ( e ) {
          promise2.reject( e );
          continue;
        }
        resolvePromise( promise2, x );
      } else {
        if ( status === PROMISE_STATUS_RESOLVED ) {
          promise2.resolve( value );
        } else if ( status === PROMISE_STATUS_REJECTED ) {
          promise2.reject( value );
        }
      }
    }
  }
}

function BPromise( executor ) {
  this._status = PROMISE_STATUS_PENDING;
  this._onFulfilledFuncQueue = [];
  this._onRejectedFuncQueue = [];

  try {
    var self = this;
    executor && executor( function( value ){
      self.resolve( value );
    }, function( reason ){
      self.reject( reason )
    } )
  } catch ( e ) {
    this.reject( e );
  }
}

BPromise.prototype.isPromise = true;

BPromise.prototype.triggerCallbackPromiseQueueProcedure = function () {
  let callbackPromiseQueue;
  if ( this._status === PROMISE_STATUS_RESOLVED ) {
    callbackPromiseQueue = this._onFulfilledFuncQueue;
  } else if ( this._status === PROMISE_STATUS_REJECTED ) {
    callbackPromiseQueue = this._onRejectedFuncQueue;
  }

  if ( callbackPromiseQueue && callbackPromiseQueue.length ) {
    let self = this;
    setTimeout( function() {
      self._onFulfilledFuncQueue = [];
      self._onRejectedFuncQueue = [];
      resolveCallbackPromiseQueue( callbackPromiseQueue, self._status, self._value );
    } );
  }
}

BPromise.prototype.resolve = function ( value ) {
  if ( this._status === PROMISE_STATUS_PENDING ) {
    this._status = PROMISE_STATUS_RESOLVED;
    this._value = value;
    this.triggerCallbackPromiseQueueProcedure();
  }
}

BPromise.prototype.reject = function ( reason ) {
  if ( this._status === PROMISE_STATUS_PENDING ) {
    this._status = PROMISE_STATUS_REJECTED;
    this._value = reason;
    this.triggerCallbackPromiseQueueProcedure();
  }
}

BPromise.prototype.then = function ( onFulfilled, onRejected ) {
  var self = this;
  var promise2 = new BPromise();

  var callbackNameFuncDic = {
    onFulfilled: onFulfilled,
    onRejected: onRejected
  }

  for( var callbackName in callbackNameFuncDic ) {
    var callbackFunc = callbackNameFuncDic[ callbackName ];
    var callbackFuncQueue = this[ '_'+callbackName+'FuncQueue' ];

    if ( isFunction(callbackFunc) ) {
      callbackFuncQueue.push( {
        promise: promise2,
        callback: callbackFunc
      } )
    } else {
      callbackFuncQueue.push( {
        promise: promise2
      } )
    }
  }

  if ( this._status !== PROMISE_STATUS_PENDING && this._onFulfilledFuncQueue.length === 1 ) {
    this.triggerCallbackPromiseQueueProcedure();
  }
  return promise2;
}

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
