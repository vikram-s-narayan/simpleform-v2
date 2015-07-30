import Ember from 'ember';
export default Ember.Controller.extend({
  colors: ['red','blue','green','yellow'],
  selectedOptions: [],
  actions: {
    //itemAdded: function(value){
    //  console.log(value);

    //},
    //itemRemoved: function(value){
      //console.log(value);
      //console.log(this.get('selectedOptions').toString());
    //}

  },
  selectionDidChange: function(){
    console.log(this.get('selectedOptions').toString());
  }.observes('selectedOptions.[]')

});
