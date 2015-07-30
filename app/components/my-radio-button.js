import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    radioAction: function(params){
      var myquestionId = this.get('question.id');
      console.log(myquestionId);
      this.sendAction('setAction', {
      questionId: this.get('question.id'),
      questionValue: params
    });
  }
}
});
