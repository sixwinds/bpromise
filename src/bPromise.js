var Status = require( './status' );
var noop = require( './noop' );
var {
  isFunction,
  isObject
} = require( './utils' );
var JobQueue = require( './jobQueue' );


function changeStatus( promise, status, value, reactionsName ) {
  if ( promise && promise._status === Status.Pending ) {
    promise._status = status;
    promise._value = value;

    var reactions = promise[ reactionsName ];
    var jobQueue = promise._jobQueue;
    promise[ reactionsName ] = [];

    var len = reactions.length;
    for( var i = 0; i < len; i++ ) {
      (function( reaction ){
        jobQueue.enqueue( function(){
          reaction(value)
        } );
      })( reactions[i] )
    }
  }
}

function fulfillPromise( promise, value ) {
  changeStatus( promise, Status.Fulfilled, value, '_onFulfilledReactions' );
}

function rejectPromise( promise, reason ) {
  changeStatus( promise, Status.Rejected, reason, '_onRejectedReactions' );
}

function createThenableResolveRejectPromiseFuncs( promise ) {
  var _resolve;
  var _reject;

  _resolve = function( v ) {
    _resolve = _reject = noop;
    resolvePromise( promise, v );
  };

  _reject = function( r ) {
    _resolve = _reject = noop;
    rejectPromise( promise, r );
  }

  return {
    resolvePromise: function ( v ){ _resolve( v ); },
    rejectPromise: function ( r ){ _reject( r ); }
  }
}

function resolvePromise( promise2, x ) {
  if ( promise2 === x ) {
    rejectPromise( promise2, new TypeError('A promise cannot be resolved with itself.') );
  } else if ( isFunction(x) || isObject(x) ) {
    var then;
    try {
      then = x.then;
    } catch ( e ) {
      rejectPromise( promise2, e );
      return;
    }
    if ( isFunction(then) ) {
      var functions = createThenableResolveRejectPromiseFuncs( promise2 );
      try {
        then.call( x, functions.resolvePromise, functions.rejectPromise );
      } catch( e ){
        functions.rejectPromise( e );
      }
    } else {
      fulfillPromise( promise2, x );
    }
  } else {
    fulfillPromise( promise2, x );
  }
}

// function resolveCallbackPromiseQueue( queue, status, value ) {
//   if ( queue ) {
//     var len = queue.length;
//     for( var i = 0; i < len; i++ ) {
//       var queueItem = queue[ i ];
//       var callbackFunc = queueItem.callback;
//       var promise2 = queueItem.promise;

//       if ( callbackFunc ) {
//         var x;
//         try {
//           x = callbackFunc( value );
//         } catch ( e ) {
//           promise2.reject( e );
//           continue;
//         }
//         resolvePromise( promise2, x );
//       } else {
//         if ( status === PROMISE_STATUS_RESOLVED ) {
//           promise2.resolve( value );
//         } else if ( status === PROMISE_STATUS_REJECTED ) {
//           promise2.reject( value );
//         }
//       }
//     }
//   }
// }

function BPromise( executor ) {
  this._status = Status.Pending;
  this._jobQueue = new JobQueue();
  this._onFulfilledReactions = [];
  this._onRejectedReactions = [];

  try {
    var self = this;
    executor && executor( function( value ){
      resolvePromise( self, value );
    }, function( reason ){
      rejectPromise( self, reason );
    } )
  } catch ( e ) {
    rejectPromise( this, e );
  }
}

// BPromise.prototype.triggerJobQueueProcedure = function () {
//   let callbackPromiseQueue;
//   if ( this._status === PROMISE_STATUS_RESOLVED ) {
//     callbackPromiseQueue = this._onFulfilledFuncQueue;
//   } else if ( this._status === PROMISE_STATUS_REJECTED ) {
//     callbackPromiseQueue = this._onRejectedFuncQueue;
//   }

//   if ( callbackPromiseQueue && callbackPromiseQueue.length ) {
//     let self = this;
//     setTimeout( function() {
//       self._onFulfilledFuncQueue = [];
//       self._onRejectedFuncQueue = [];
//       resolveCallbackPromiseQueue( callbackPromiseQueue, self._status, self._value );
//     } );
//   }
// }

// BPromise.prototype.resolve = function ( value ) {
//   if ( this._status === PROMISE_STATUS_PENDING ) {
//     this._status = PROMISE_STATUS_RESOLVED;
//     this._value = value;
//     this.triggerCallbackPromiseQueueProcedure();
//   }
// }

// BPromise.prototype.reject = function ( reason ) {
//   if ( this._status === PROMISE_STATUS_PENDING ) {
//     this._status = PROMISE_STATUS_REJECTED;
//     this._value = reason;
//     this.triggerCallbackPromiseQueueProcedure();
//   }
// }



// BPromise.prototype.enqueue = function ( job ) {
//   this._jobQueue.push( job );
//   if ( this._) {

//   }
// }


function resolveThenResultPromise( promise2, callbackFunc, value, reaction ) {
  if ( isFunction(callbackFunc) ) {
    var x;
    try {
      x = callbackFunc( value );
    } catch ( e ) {
      rejectPromise( promise2, e );
      return;
    }
    resolvePromise( promise2, x );
  } else {
    reaction( promise2, value );
  }
}

BPromise.prototype.then = function ( onFulfilled, onRejected ) {
  var promise2 = new BPromise();
  var currentValue = this._value;

  switch( this._status ) {
    case Status.Fulfilled: {
      this._jobQueue.enqueue( function(){
        resolveThenResultPromise( promise2, onFulfilled, currentValue, fulfillPromise );
      } )
      break;
    }
    case Status.Rejected: {
      this._jobQueue.enqueue( function(){
        resolveThenResultPromise( promise2, onRejected, currentValue, rejectPromise );
      } )
      break;
    }
    default: {
      this._onFulfilledReactions.push( function(value){
        resolveThenResultPromise( promise2, onFulfilled, value, fulfillPromise );
      } );
      this._onRejectedReactions.push(  function(reason){
        resolveThenResultPromise( promise2, onRejected, reason, rejectPromise );
      } )
    }
  }
  // var job = {
  //   promise: promise2,
  //   onFulfilled: isFunction( onFulfilled ) && onFulfilled,
  //   onRejected: isFunction( onRejected ) && onRejected
  // }
  // this._jobQueue.push( job );
  

  // var callbackNameFuncDic = {
  //   onFulfilled: onFulfilled,
  //   onRejected: onRejected
  // }

  // for( var callbackName in callbackNameFuncDic ) {
  //   var callbackFunc = callbackNameFuncDic[ callbackName ];
  //   var callbackFuncQueue = this[ '_'+callbackName+'FuncQueue' ];

  //   if ( isFunction(callbackFunc) ) {
  //     callbackFuncQueue.push( {
  //       promise: promise2,
  //       callback: callbackFunc
  //     } )
  //   } else {
  //     callbackFuncQueue.push( {
  //       promise: promise2
  //     } )
  //   }
  // }

  // if ( this._status !== PROMISE_STATUS_PENDING && this._onFulfilledFuncQueue.length === 1 ) {
  //   this.triggerCallbackPromiseQueueProcedure();
  // }
  return promise2;
}

BPromise.resolved = function ( value ) {
  var p = new BPromise();
  resolvePromise( p, value );
  // p.resolve( value );

  return p;
};

BPromise.rejected = function ( value ) {
  var p = new BPromise();
  rejectPromise( p, value );
  // p.reject( value );

  return p;    
};

BPromise.deferred = function () {
  var p = new BPromise();

  return {
      promise: p, 
      resolve: function ( v ) {
          resolvePromise( p, v );
      },
      reject: function ( r ) {
          rejectPromise( p, r );
      }
  }
};

module.exports = BPromise;
