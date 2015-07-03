import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //, function(){
  this.route('surveys', {path: '/'});
  this.resource('survey', {path: ':title'}, function(){
    this.route('addquestions');
    this.route('viewreport');
    this.route('takesurvey');
  });
  this.route('admin');//created this just to show how it works to Vinu
});


export default Router;
