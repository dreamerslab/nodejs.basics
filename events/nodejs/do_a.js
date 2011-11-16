var event = require( './event' );

module.exports = function(){
  console.log( 'we are going to call do_a' );
  event.emit( 'do_a' );
};