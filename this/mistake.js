var example = {
  
  name : 'who',
  
  wrong : function(){
    setTimeout( function(){
      console.log( this.name );
    }, 0 );
  },
  
  right : function(){
    var self = this;
    
    setTimeout( function(){
      console.log( self.name );
    }, 0 );
  }
};

example.wrong();
example.right();
