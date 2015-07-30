import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createSurveyDisplay: function(){
      var surveyId = this.get('controller').get('surveyId');
      var survey = this.store.createRecord('surveydisplay', {
        survey: surveyId,
        questions: ''
      });
      survey.save();

    }
  }
});
