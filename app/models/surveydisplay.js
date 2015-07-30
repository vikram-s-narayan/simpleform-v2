import DS from 'ember-data';

export default DS.Model.extend({
  survey: DS.attr(),
  questions: DS.attr()
});
