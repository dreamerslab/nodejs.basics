module.exports = {
  
  ringing : '',
  
  ring : function( callback ){
    var self = this;
    
    this.ringing = 'Ringing...';
    console.log( this.ringing );
    
    callback && callback.call( this );
    
    setTimeout( function(){
      self.ringing = 'Ringing stopped';
      console.log( self.ringing );
    }, 1000 );
  }
};