function outer_scope(){
  var a = 'I am `a` from outer scope',
      b = 'I am `b` from outer scope';
  
  console.log( 'logging from outer scope before inner scope function declaration' );
  console.log( 'a: ' + a );
  console.log( 'b: ' + b );
  console.log( '------------------------------------------' );
  
  function inner_scope_1(){
    console.log( 'logging from inside function inner_scope_1 before variable declaration' );
    console.log( 'a: ' + a );
    a = 'I will overwrite the outer scope `a`';
    console.log( 'logging from inside function inner_scope_1 after variable declaration' );
    console.log( 'a: ' + a );
    console.log( '------------------------------------------' );
  }
  
  function inner_scope_2(){
    console.log( 'logging from inside function inner_scope_2 before variable declaration' );
    console.log( 'b: ' + b );
    var b = 'I will not overwrite the outer scope `b`';
    console.log( 'logging from inside function inner_scope_2 after variable declaration' );
    console.log( 'b: ' + b );
    console.log( '------------------------------------------' );
  }
  
  inner_scope_1();
  inner_scope_2();
  
  a = 'I will be the new `a`';
  b = 'I will be the new `b`';
  
  console.log( 'logging from outer scope after inner scope executed' );
  console.log( 'b: ' + b );
  console.log( 'b: ' + b );
  console.log( '------------------------------------------' );
}

outer_scope();