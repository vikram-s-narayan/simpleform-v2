import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  questions: DS.hasMany('question', { async: true }),
  responses: DS.hasMany('response', { async: true}),//may not be needed
  responseSets: DS.hasMany('response-set', { async: true }),
  sortQuestionsBy: ['position'],
  sortedQuestions: Ember.computed.sort('questions', 'sortQuestionsBy'),
  logo: DS.attr('string')
});
