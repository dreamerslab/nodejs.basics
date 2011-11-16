var event = require( './event' );

module.exports = function(){
  event.on( 'do_c', function(){
    console.log( 'we are going to call do_d' );
    event.emit( 'do_d' );
  });
};