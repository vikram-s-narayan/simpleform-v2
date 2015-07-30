import Ember from 'ember';

export default Ember.Controller.extend({
  users: ['john', 'george', 'peter'],
  selectedUsers: [],
  actions: {
    alertSelection: function(){
      alert(this.get('selectedUsers'));
    }
  }
});
