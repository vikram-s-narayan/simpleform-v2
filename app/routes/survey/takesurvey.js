import Ember from 'ember';

export default Ember.Route.extend({
  //errorMessage: '', =>controller.set('errorMessage',)
  model: function(){
    var surveyId = this.modelFor('survey').id;
    return this.store.find('survey', surveyId).then(function(survey){
      var questions = survey.get('sortedQuestions');
      return {
        survey: survey,
        questions: questions
      };
      //return survey.get("sortedQuestions");
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
      controller.get('model.questions').forEach(function(item){
        var isRequired = item.get('isRequired');
        if(item.get('radioGridStatements')===''){
          console.log('entering non-radio-grid section');
          var itemVal = item.get('value');

          if(isRequired && itemVal===undefined||isRequired && itemVal.length<=1){
            unAnswered.push(item);
          }
        } else {
            console.log('entering radio-grid checking section');

              var allGood = true;
              (item.get('value')||['nothing here']).forEach(function(item){
              if(isRequired && item.selected===undefined || isRequired && item.selected==='nothing here'){
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
      controller.get('model.questions').forEach(function(item){
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
