import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    /*var surveyId = this.modelFor('survey').id;
    return this.store.find('response', {surveyId: surveyId}).then(function(responses){
      console.log(responses);
      return responses;
    });*/
    //debugger;
    //the below line works fine if our model does not have responseSet
    //return this.modelFor('survey').get('responses');
    return this.modelFor('survey').get('responseSets');
  }
});
