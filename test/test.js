var promisesAplusTests = require( 'promises-aplus-tests' );
var adapter = require( '../bpromise.js' );

promisesAplusTests( adapter, function ( err ) {
    console.log( err )
});