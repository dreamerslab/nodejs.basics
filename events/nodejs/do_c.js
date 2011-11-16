var event = require( './event' );

module.exports = function(){
  event.on( 'do_b', function(){
    console.log( 'we are going to call do_c' );
    event.emit( 'do_c' );
  });
};