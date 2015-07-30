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
  //created this just to show how it works to Vinu
  this.route('admin');
  this.route('radiotest');
  this.route('multiselect');
  this.route('radiogrid');
  this.route('surveydisplaycreate');
  this.route('experiment');
});


export default Router;
