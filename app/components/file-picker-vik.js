import Ember from 'ember';

export default Ember.Component.extend({
  imgVal: '',

  actions: {
    saveURL: function(){
      var imgVal = this.get('inputVal');
      console.log(imgVal);
      this.set('imgVal', imgVal);
      console.log(this.get('imgVal'));
    }
  }

});
