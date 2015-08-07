import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('survey');
  },
  actions: {
    addLogo: function(params){
      this.controller.set('logo', params);
    },

    addNewSurvey: function() {
      var router = this;
      var controller = this.controller;
      var survey = this.store.createRecord('survey',
      controller.getProperties('title', 'logo'));
      survey.save().then(function() {
        router.transitionTo('survey.addquestions', survey.get('id'));
      });
    }
  }
});
