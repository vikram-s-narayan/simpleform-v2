import Ember from 'ember';

export default Ember.Component.extend({
  inputVal: '',
  charactersRemaining: function(){
    return 140 - (this.get('inputVal') ||'').length;
  }.property('inputVal'),
  inputValDidChange: function(){

    //this.set('question.value', this.get('inputVal'));
    this.sendAction('setAction', {
      questionId: this.get('question.id'),
      questionValue: this.get('inputVal')
    });

  }.observes('inputVal')
});
