import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  survey: DS.belongsTo('survey', {async: true}),
  question: DS.belongsTo('question', {async: true}),
  /*surveyId: DS.attr(),
  questionId: DS.attr(),*/
  answerValue: DS.attr(),
  responseSet: DS.belongsTo('response-set', { async: true }),
  isRadioGrid: function(){
    return Ember.isArray(this.get('answerValue'));
  }.property('answerValue')
});
