var promisesAplusTests = require( 'promises-aplus-tests' );
var adapter = require( '../bpromise.js' );

            // var promise = adapter.resolved();
            // var firstOnFulfilledFinished = false;

            // promise.then(function () {
            //     //console.log(firstOnFulfilledFinished)
            //     promise.then(function () {
            //         console.log("2. -------------->" + firstOnFulfilledFinished);
            //         // done();
            //     });
            //     firstOnFulfilledFinished = true;
            //     console.log("1. -------------->" + firstOnFulfilledFinished)
            // });

// var numberOfTimesThenWasRetrieved = 0;
// var thenableObj = Object.create(null, {
//                     then: {
//                         get: function () {
//                             ++numberOfTimesThenWasRetrieved;
//                             return function thenMethodForX(onFulfilled) {
//                                 onFulfilled();
//                             };
//                         }
//                     }
//                 });

var promise = adapter.resolved( { dummy: "dummy" } );
var p2 = promise.then(function () {


return null;
});
               

               p2.then( function ( v ) {
                console.log( v )
               } )