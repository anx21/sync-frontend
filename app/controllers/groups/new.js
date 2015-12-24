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
        let email = this.get('session.data.authenticated.email');
        let name = this.get('model.name');
        let tok = this.get('session.data.authenticated.token');
        let that = this;
        jQuery.post('http://localhost:3000/create_group',
          { email: email, name: name, token: tok },
          function(data) {
            that.transitionToRoute('groups.show', data.group);
        });
      } else {
        this.set('errorMessage', 'You have to fill all the fields');
      }
      return false;
    },

    cancel() {
      this.store.unloadRecord(this.get('model'));
      this.transitionToRoute('groups');
      return false;
    }
  }
});
