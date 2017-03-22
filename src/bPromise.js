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
  return promise2;
}

BPromise.resolved = function ( value ) {
  var p = new BPromise();
  resolvePromise( p, value );

  return p;
};

BPromise.rejected = function ( value ) {
  var p = new BPromise();
  rejectPromise( p, value );

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
