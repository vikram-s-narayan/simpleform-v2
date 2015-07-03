import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    var surveyId = this.modelFor('survey').id;
    console.log(surveyId);
    return this.store.find('survey', surveyId).then(function(survey){
      return survey.get("questions");
    });
  },
  actions: {
    saveSurvey: function(){
      var controller = this.get('controller');
      var survey = this.modelFor('survey');
      var _this=this;
      var responseSet = this.store.createRecord('response-set', {
        survey: survey
      });

      controller.get('model').forEach(function(item){
        var response = _this.store.createRecord('response',{
          survey: survey, //is this reference unnecessary?
          question: item,
          answerValue: item.get('value')
        });
        response.save();//can this action be removed and response table be removed?
        survey.get('responses').addObject(response);//again, survey may not need this reference.
        responseSet.get('responses').addObject(response);
      });
      survey.save();
      responseSet.save();
    }
  /*
      //below section works just fine
      saveSurvey: function(){
      alert('hi');
      var controller = this.get('controller');
      //var surveyId = this.modelFor('survey').id;
      var survey = this.modelFor('survey');
      var _this=this;
      controller.get('model').forEach(function(item) {
      var response = _this.store.createRecord('response',{
      //surveyId: surveyId,
      survey: survey,
      //questionId: item.get('id'),
      question: item,
      answerValue: item.get('value')
      });
      response.save();//can this and response-set be added to response table?
      survey.get('responses').addObject(response);

    });
    survey.save();

  }*/
  }
});
