import Ember from 'ember';

export default Ember.Component.extend({
  selectedOptions: [],
  selectionDidChange: function(){
    var selectedOptionsAsString = this.get('selectedOptions').toString();
    //this.set('question.value', selectedOptionsAsString);
    this.sendAction('setAction', {
      questionId: this.get('question.id'),
      questionValue: selectedOptionsAsString
    });
  }.observes('selectedOptions.[]')
});
