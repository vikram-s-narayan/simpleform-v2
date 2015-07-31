import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    optionChosen: function(params){
      console.log(params);
      
      var radioGridStatements = this.question.get("radioGridStatements");
      var value = radioGridStatements.map(function(statement){
        return {selected: statement.selected, long: statement.long, };
      });
      this.sendAction('setAction', {
        questionId: this.get('question.id'),
        questionValue: value
      });
    }
  }
});
