module.exports = {
  
  action : '',
  
  pants : 'On',
  
  explode : function( callback ){
    var self = this;
    
    callback && callback.call( this );
    
    this.action = this.pants === 'On' ?
      'Peeing on my pants' : 'Releasing...';
    
    console.log( this.action );
    
    setTimeout( function(){
      self.pants = self.action === 'Peeing on my pants' ?
        'I wet my pants' : 'I finished peeing';
        
      console.log( self.pants );
    }, 500 );
  }
};