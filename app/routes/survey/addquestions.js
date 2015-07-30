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
          questionText: questionText,
          radioGridOptions: '',
          //radioGridStatementsLong: '',
          //radioGridStatementsShort: ''
          radioGridStatements: ''
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
      this.store.find('survey', survey).then(function(survey){
        var radioGridStatements = [];
        var questionText = controller.get('radioGridQuestionsText');
        console.log('questionText =>', questionText);
        var radioGridOptions = controller.get('radioGridOptions').split(',');
        console.log('radioGridOptions =>', radioGridOptions);
        var radioGridStatementsForm = controller.get('radioGridStatements');
        var radioGridStatementsArray = radioGridStatementsForm.split('****');
        console.log('radioGridStatementsArray =>',radioGridStatementsArray);
        var statementsLongShortArray = [];
        radioGridStatementsArray.forEach(function(item){
          statementsLongShortArray.push([item]);
        });
        console.log('statementsLongShortArray => ', statementsLongShortArray);
        statementsLongShortArray.forEach(function(item){
          var longshort = item[0].split(',');
          var long = longshort[0];
          var short = longshort[1];
          radioGridStatements.push({
            'long': long,
            'short': short
          });
        console.log('radioGridStatements =>', radioGridStatements);
        });


        var question = store.createRecord('question', {
          survey: survey,
          type: 'radio-grid',
          questionText: questionText,
          radioGridStatements: radioGridStatements,
          radioGridOptions: radioGridOptions,
          name:'',
          placeholder: '',
          value:'',
          cols: '',
          rows: '',
          optionsArray:'',
        });
        console.log('about to do question.save()');
        question.save();
            console.log('added radioGrid question');
          survey.get('questions').then(function(questions){
            console.log('pushing questions');
          questions.pushObject(question);
          });
          survey.save();
        /*  question.statements.push(
            {
              'long': 'Offers coaching',
              'short': 'coaching'
            },
            {
              'long': 'is helpful when challenged',
              'short': 'helpful'
            }
          );*/


      });

      }

  /*  addRadioGridQuestion: function(){
      var survey = this.modelFor('survey').id;
      var controller = this.get('controller');
      var store = this.store;
      var radioGridQuestionText = controller.get('radioGridQuestionText');
      var radioGridOptions = controller.get('radioGridOptions');
      var radioGridStatementsLong = controller.get('radioGridStatementsLong');
      var radioGridStatementsShort = controller.get('radioGridStatementsShort');
      if (radioGridOptions===''){
        radioGridOptions=false;
      } else {
        radioGridOptions=radioGridOptions.split(',');
      }
      if (radioGridStatementsLong===''){
        radioGridStatementsLong=false;
      } else {
        radioGridStatementsLong=radioGridStatementsLong.split('****');
      }
      if (radioGridStatementsShort===''){
        radioGridStatementsShort=false;
      } else {
        radioGridStatementsShort=radioGridStatementsShort.split('****');
      }
      this.store.find('survey', survey).then(function(survey){
        console.log('creating question');
        var question = store.createRecord('question', {
          survey: survey,
          type: 'radio-grid',
          questionText: radioGridQuestionText,
          radioGridOptions: radioGridOptions,
          radioGridStatementsLong: radioGridStatementsLong,
          radioGridStatementsShort: radioGridStatementsShort,
          name:'',
          placeholder: '',
          value:'',
          cols: '',
          rows: '',
          optionsArray:'',
        });
        question.save().then(function(){
          console.log('question.save() done');
          survey.get('questions').then(function(questions){
            console.log('pushing questions');
          questions.pushObject(question);
          });
          survey.save();
        });

        });


    }*/

  }
});
