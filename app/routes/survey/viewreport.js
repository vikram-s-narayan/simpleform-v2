import Ember from 'ember';

export default Ember.Route.extend({


  model: function() {
    return this.modelFor('survey').get('responseSets');
    
  /*  var responseSetsExpanded = [];
    var individualResponseSet = [];
    this.modelFor('survey').get('responseSets')
    .then(function(arrayOfResponseSets){
      arrayOfResponseSets.forEach(function(individualRespondentsResponseSet){
        individualRespondentsResponseSet.get('responses')
        .then(function(responses){
          responses.forEach(function(response){
            response.get('question')
            .then(function(question){
              if (question.get('type')==='radio-grid'){
                var radioGridResponsesArray = response.get('answerValue');
                console.log(radioGridResponsesArray);
                radioGridResponsesArray.forEach(function(radioGridResponse){
                  individualResponseSet.push(radioGridResponse.long);
                  responseSetsExpanded.push(individualResponseSet.selected);
                });
              } else {
                individualResponseSet.push(response.answerValue);
                responseSetsExpanded.push(individualResponseSet);
              }
              individualResponseSet=[];
            });
          });
        });
      });
    });*/
    //return responseSetsExpanded;
  }
});
