function basic( callback ){
  console.log( 'do something here' );
  
  var result = 'i am the result of `do something` to be past to the callback';
  
  // if callback exist execute it
  callback && callback( result );
}

function callbacks_with_call( arg1, arg2, callback ){
  console.log( 'do something here' );
  
  var result1 = arg1.replace( 'argument', 'result' ),
      result2 = arg2.replace( 'argument', 'result' );
  
  this.data = 'i am some data that can be use for the callback funciton with `this` key word';
  
  // if callback exist execute it
  callback && callback.call( this, result1, result2 );
}

// this is similar to `callbacks_with_call`
// the only difference is we use `apply` instead of `call`
// so we need to pass arguments as an array
function callbacks_with_apply( arg1, arg2, callback ){
  console.log( 'do something here' );
  
  var result1 = arg1.replace( 'argument', 'result' ),
      result2 = arg2.replace( 'argument', 'result' );
  
  this.data = 'i am some data that can be use for the callback funciton with `this` key word';
  
  // if callback exist execute it
  callback && callback.apply( this, [ result1, result2 ]);
}

basic( function( result ){
  console.log( 'this callback is going to print out the result from the function `basic`' );
  console.log( result );
});

console.log( '--------------------------------------------------------------------------------------' );

( function(){
  var arg1 = 'i am argument1',
      arg2 = 'i am argument2';
  
  callbacks_with_call( arg1, arg2, function( result1, result2 ){
    console.log( 'this callback is going to print out the results from the function `callbacks_with_call`' );
    console.log( 'result1: ' + result1 );
    console.log( 'result2: ' + result2 );
    console.log( 'data from `callbacks_with_call`: ' + this.data );
  });
})();

console.log( '--------------------------------------------------------------------------------------' );

( function(){
  var arg1 = 'i am argument1',
      arg2 = 'i am argument2';
      
  callbacks_with_apply( arg1, arg2, function( result1, result2 ){
    console.log( 'this callback is going to print out the result from the function `callbacks_with_apply`' );
    console.log( 'result1: ' + result1 );
    console.log( 'result2: ' + result2 );
    console.log( 'data from `callbacks_with_apply`: ' + this.data );
  });
})();
