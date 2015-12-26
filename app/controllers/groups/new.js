import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  isValid: Ember.computed(
    'model.name',
    {
      get() {
        return !Ember.isEmpty(this.get('model.name'));
      }
    }
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        var that = this;
        this.get('model').save().then(function(group) {
          that.transitionToRoute('groups.show', group);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },

    cancel() {
      this.store.unloadRecord(this.get('model'));
      this.transitionToRoute('dashboard');
      return false;
    }
  }
});
