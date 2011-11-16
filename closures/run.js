function photo(){
  var name = 'ben';
  
  return{
    say_my_name : function(){
      console.log( name );
    },
    
    rename : function( new_name ){
      name = new_name;
    }
  };
}

var pic = new photo;

pic.say_my_name();

pic.rename( 'bibi' );

pic.say_my_name();