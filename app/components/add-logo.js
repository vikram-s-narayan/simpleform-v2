import Ember from 'ember';

export default Ember.Component.extend({
  showUploadSection: false,


  uploadedLogo: '',

  actions: {
    setShowUploadTrue: function(){
      alert('hi');
      this.set('showUploadSection', true);
    },
    fileSelected: function(params){
      console.log(params.url);
      this.set('uploadedLogo', params.url);
      this.set('showUploadSection', false);
      this.sendAction('logoAction', params.url);
    },
    onClose: function(){
      //no need to do anything
    }
  }
});
