import DS from 'ember-data';

export default DS.Model.extend({
  survey: DS.belongsTo('survey', { async: true }),
  type: DS.attr(),
  name: DS.attr(),
  placeholder: DS.attr(),
  //value: '', //not a property we want to save.
  value: DS.attr(),//value should be a simple string as it is not part of the data store
  cols: DS.attr(),
  rows: DS.attr(),
  optionsArray: DS.attr(),
  questionText: DS.attr(),
  responses: DS.hasMany('response', {async: true}),
  radioGridStatements: DS.attr(), //this is for radioGrid Question and should contain long, short and selected
  radioGridOptions: DS.attr(),//this is for radioGrid Question
  //required: DS.attr()

});
