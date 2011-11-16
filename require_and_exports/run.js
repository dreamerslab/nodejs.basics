// to use methods from other files we simply use `require` with path name
var reader = require( './read' ),
    writer = require( './write' );

// call `read` method from read.js to read `source.txt`
reader.read( './source.txt', function( data ){
  // change `I am` to `You are`
  var changed = data.replace( 'I am', 'You are' );
  
  // print out the data
  reader.print( data );
  
  // save the changes to `changed.txt`
  writer.write( './changed.txt', changed );
});
