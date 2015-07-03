import DS from 'ember-data';

export default DS.Model.extend({
  survey: DS.belongsTo('survey', { async: true }),
  type: DS.attr(),
  name: DS.attr(),
  placeholder: DS.attr(),
  value: DS.attr(),
  cols: DS.attr(),
  rows: DS.attr(),
  optionsArray: DS.attr(),
  questionText: DS.attr(),
  responses: DS.hasMany('response', {async: true})
});
