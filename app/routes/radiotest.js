import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    colorChanged: function(){
      alert('hi');

    }
  }
});
