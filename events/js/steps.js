module.exports = {
  
  cup_noodles : 'This is the not yet cooked cup noodles',
  
  make_cup_noodles : function( callback ){
    var self = this;
    
    console.log( 'Start making cup noodles' );

    // simulate a time consuming function
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === 'This is the not yet cooked cup noodles' ?
        'Cup noodles are ready' : self.cup_noodles;
        
      console.log( self.cup_noodles );

      callback && callback.call( this );
    }, 3000 );
  },
  
  answer_a_phone_call : function(){
    var action = this.ringing === 'Ringing...' ?
        'I answered the phone call' : 'I missed the phone call';
      
      console.log( action );
  },
  
  go_to_toilet : function(){
    this.pants = 'Off';
  },
  
  eat_the_noodles : function( callback ){
    var self = this;
    
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === 'Cup noodles are ready' ?
        'I finished eating' : 'I ate nothing...';
      
      console.log( self.cup_noodles );
      
      callback && callback.call( this );
    }, 5000 );
  },
  
  throw_the_cup_to_trash_can : function(){
    var self = this;
    
    setTimeout( function(){
      self.cup_noodles = self.cup_noodles === 'I finished eating' ?
        'The cup noodles are finished and are in the trash can now' :
        'The cup noodles are wasted';

      console.log( self.cup_noodles );
    }, 30 );
  }
};