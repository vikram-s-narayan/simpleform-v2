import Ember from 'ember';

export default Ember.Component.extend({



  actions: {
    optionChosen: function(params){
      //console.log(Ember.$(this).parent().attr('id'));
      console.log(params);
      console.log(this.question.id);
      console.log(this.question.get("radioGridStatements"));

      var radioGridStatements = this.question.get("radioGridStatements");
      var value = radioGridStatements.map(function(statement){
        return {selected: statement.selected, long: statement.long, };

      });
      //this.question.set('value', value);//move this to takesurvey route
      this.sendAction('setAction', {
        questionId: this.get('question.id'),
        questionValue: value
      });
    }
  }
});
