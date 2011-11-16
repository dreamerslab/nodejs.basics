var event = require( './event' );

module.exports = function(){
  event.on( 'do_a', function(){
    console.log( 'we are going to call do_b' );
    event.emit( 'do_b' );
  });
};