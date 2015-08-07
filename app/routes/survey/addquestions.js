import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return this.modelFor('survey');

  },

  actions: {

    addQuestion: function() {
      var survey = this.modelFor('survey').id;
      var controller = this.controller;
      var type = controller.get('type');
      var name = controller.get('name');
      var placeholder = controller.get('placeholder');
      var value = controller.get('value');
      var cols = controller.get('cols');
      var rows = controller.get('rows');
      var optionsArray = controller.get('optionsArray').split('|');
      var questionText = controller.get('questionText');
      var isRequired = controller.get('isRequired');
      var store = this.store;

      this.store.find('survey', survey).then(function(survey){
        var question = store.createRecord('question', {
          survey: survey,
          type: type,
          name: name,
          placeholder: placeholder,
          value: value,
          cols: cols,
          rows: rows,
          optionsArray: optionsArray,
          questionText: questionText,
          radioGridOptions: '',
          radioGridStatements: '',
          isRequired: isRequired
          });
          question.save();
        survey.get('questions').then(function(questions){
          questions.pushObject(question);
        });
        survey.save();
      });
    },
    addRadioGridQuestion: function(){
      var survey = this.modelFor('survey').id;
      var controller = this.get('controller');
      var store = this.store;
      var radioGridQuestionText = controller.get('radioGridQuestionText');
      var radioGridStatements = controller.get('radioGridStatements').split('|');
      radioGridStatements = radioGridStatements.map(function(statement){
        return {'long': statement};
      });
      var radioGridOptions = controller.get('radioGridOptions').split('|');
      var isRequired = controller.get('isRequired');


        store.find('survey', survey).then(function(survey){
            var question = store.createRecord('question', {
                survey: survey,
                type: 'radio-grid',
                questionText: radioGridQuestionText,
                radioGridStatements: radioGridStatements,
                radioGridOptions: radioGridOptions,
                name:'',
                placeholder: '',
                value:'',
                cols: '',
                rows: '',
                optionsArray:'',
                isRequired: isRequired
              });
              console.log('about to do question.save()');
              question.save()

              .then(function(){
                console.log('added radioGrid question');
                return survey.get('questions');
              })

              .then(function(questions){
                console.log('pushing questions');
                questions.pushObject(question);
            })

            .then(function(){
              survey.save();
            });
      });
    },
    reorderItems(newSortedQuestionsArray, draggedModel) {
      newSortedQuestionsArray.forEach(function(question, newPosition) {
      question.set('position', newPosition);

      if (question.get('isDirty')) { //if local model has changed but has not yet been sent to Firebase
        question.save();
      }
    });

    }
  }
});
