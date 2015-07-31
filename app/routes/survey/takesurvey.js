import Ember from 'ember';

export default Ember.Route.extend({
  //errorMessage: '', =>controller.set('errorMessage',)
  model: function(){
    var surveyId = this.modelFor('survey').id;
    return this.store.find('survey', surveyId).then(function(survey){
      return survey.get("questions");
    });
  },
  actions: {
    updateResponse: function(params){
      var value = params.questionValue;
      this.store.find('question', params.questionId).then(function(question){
        question.set('value', value);
      });
    },

    saveSurvey: function(){
      var controller = this.get('controller');
      var survey = this.modelFor('survey');
      var _this=this;
      var unAnswered = [];

      //check each item to see if complete and return array of unAnwered items
      controller.get('model').forEach(function(item){
        if(item.get('radioGridStatements')===''){
          console.log('entering non-radio-grid section');
          var itemVal = item.get('value');
          if(itemVal===undefined||itemVal.length<=1){
            unAnswered.push(item);
          }
        } else {
            console.log('entering radio-grid checking section');
              var allGood = true;
            item.get('value').forEach(function(item){
              if(item.selected===undefined){
                allGood = false;
              }
            });

            if(allGood===false){
              unAnswered.push(item);
            }
          }
      });

      //if even one unAnwered item, send message to user. Else call on saveSurveyOperation
      if(unAnswered.length>0){
        controller.set('unAnsweredItemsList', unAnswered);
      } else {
        saveResponses();
      }
      //saveOperation - save each response

    function saveResponses(){
      alert('good job');
      var responseSet = _this.store.createRecord('response-set', {
        survey: survey
      });
      controller.get('model').forEach(function(item){
        var response = _this.store.createRecord('response',{
         survey: survey,
         question: item,
         answerValue: item.get('value')
       });
       response.save();
      survey.get('responses').addObject(response);//again, survey may not need this reference.
      responseSet.get('responses').addObject(response);
      });
      survey.save();
      responseSet.save();
    }

      }
    }
  });
