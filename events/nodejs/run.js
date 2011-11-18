var event, todos;

event = require( './event' );
todos = [ './do_d', './do_c', './do_b', './do_a' ];

event.on( 'do_a', function(){
  console.log( 'i can do something to do_a out side of do_a' );
});

event.on( 'do_b', function(){
  console.log( 'i can do something to do_b out side of do_b' );
});

event.on( 'do_c', function(){
  console.log( 'i can do something to do_c out side of do_c' );
});

event.on( 'do_d', function(){
  console.log( 'i can do something to do_d out side of do_d' );
});

todos.forEach( function( name ){
  require( name )();
});
