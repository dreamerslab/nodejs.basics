var steps = require( './steps' ),
    phone = require( './phone' ),
    pee = require( './pee' );
    
steps.make_cup_noodles( function(){
  steps.eat_the_noodles( function(){
    steps.throw_the_cup_to_trash_can();
  });
});

phone.ring( steps.answer_a_phone_call );

pee.explode( steps.go_to_toilet );