var steps = require( './steps' ),
    phone = require( './phone' ),
    pee = require( './pee' );
    
// Start making cup noodles
steps.make_cup_noodles();

// Yes I am now event driven so I don't have to wait for the noodles to be ready
// But we have a new problem here, 
// with the same scope of functions they are triggered nearly at the same time.
phone.ring();

// Which means I might not be able to answer the phone call
steps.answer_a_phone_call();

// Feel like going to the toilet
pee.explode();

// Same thing happens here
steps.go_to_toilet();

// I want to eat the noodles but it's not ready yet
steps.eat_the_noodles();

// The same thing happens here, I throw the cup noodles that is still being cooked.
// So in the end I still wet my paint and did not answer the phone call
// plus I still can't have my cup noodles
steps.throw_the_cup_to_trash_can();