import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  questions: DS.hasMany('question', { async: true }),
  responses: DS.hasMany('response', { async: true}),//may not be needed
  responseSets: DS.hasMany('response-set', { async: true })
});
