// require core module `file system`
var fs = require( 'fs' );

// exports 2 methods for other modules or files to use
module.exports = {
  read : function( path, callback ){
    // read file data synchronizely
    var data = fs.readFileSync( path );
    
    // execute the callback if there is one
    callback && callback( data.toString());
  },
  
  print : function( data ){
    // print out the data
    console.log( data );
  }
};