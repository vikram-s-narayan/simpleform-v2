import DS from 'ember-data';

export default DS.Model.extend({
  responses: DS.hasMany('response', { async: true }),
  survey: DS.belongsTo('survey', { async: true })

});
