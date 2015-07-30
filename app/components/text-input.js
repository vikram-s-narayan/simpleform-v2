import Ember from 'ember';

export default Ember.Component.extend({
  inputVal: '',
  inputValDidChange: function(){

    //this.set('question.value', this.get('inputVal'));
    this.sendAction('setAction', {
      questionId: this.get('question.id'),
      questionValue: this.get('inputVal')
    });
  }.observes('inputVal')
});
