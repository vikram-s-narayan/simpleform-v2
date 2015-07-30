import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
      return {
        questionText: 'How often does your manager demonstrate the following behaviours?',
        statements: [{
          long: 'treats me with respect',
          short: 'respect'
        }, {
          long: 'offers coaching',
          short: 'coaching'
        }],
        options: ['never', 'rarely', 'sometimes', 'often']
      };
    },
  actions: {
    optionChosen: function(params){
      alert(params);
    },
  }
});
