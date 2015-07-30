import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      1:{'dog': 'alsation'},
      2:{'dog': 'persian'}
    };
  }
});
