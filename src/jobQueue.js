var MEMBER_NAME_QUEUE = '_queue';
var MEMBER_NAME_GOINGTORUN = '_goingToRun';

function JobQueue() {
  this[ MEMBER_NAME_QUEUE ] = [];
}

JobQueue.prototype.enqueue = function ( job ) {
  this[ MEMBER_NAME_QUEUE ].push( job );
  if ( !this[MEMBER_NAME_GOINGTORUN] ) {
    this[MEMBER_NAME_GOINGTORUN] = true;
    
    var self = this;
    setTimeout( function() {
      var runningQueue = self[ MEMBER_NAME_QUEUE ];
      self[ MEMBER_NAME_QUEUE ] = [];
      self[ MEMBER_NAME_GOINGTORUN ] = false;
      
      var len = runningQueue.length;
      for( var i = 0; i < len; i++ ) {
        runningQueue[ i ]();
      }
    } );
  }
}

module.exports = JobQueue;