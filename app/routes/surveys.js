import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('survey');
  },
  actions: {
    addNewSurvey: function() {
      var router = this;
      var controller = this.controller;
      var survey = this.store.createRecord('survey',
      controller.getProperties('title'));
      survey.save().then(function() {
        router.transitionTo('survey.addquestions', survey.get('id'));
      });
    }
  }
});
