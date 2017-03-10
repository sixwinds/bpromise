var promisesAplusTests = require( 'promises-aplus-tests' );
var adapter = require( '../src/bPromise.js' );

promisesAplusTests( adapter, function ( err ) {
    console.log( err )
});