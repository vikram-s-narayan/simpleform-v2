import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //console.log(this.modelFor('survey').id);=> prints the id fine
    console.log(this.modelFor('survey'));
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
      var optionsArray = controller.get('optionsArray');
      var questionText = controller.get('questionText');
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
          questionText: questionText
          });
          question.save();
        survey.get('questions').then(function(questions){
          questions.pushObject(question);
        });
        survey.save();
      });
    }
  }
});
