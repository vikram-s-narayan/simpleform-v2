import Ember from 'ember';

export default Ember.Component.extend({
  selectedOptions: [],
  value: Ember.computed('selectedOptions.[]',function(){
    var selectedValuesConvertedToString = this.get('selectedOptions').toString();
    this.set('question.value', selectedValuesConvertedToString);
     return selectedValuesConvertedToString;
  }),


    actions: {
      sendData: function(){
        alert('hi');
      }
    }

});
