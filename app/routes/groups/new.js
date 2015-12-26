import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    let userPromise = this.store.findRecord('user', this.get('session.data.authenticated.user_id'));
    return userPromise.then(function(user){
      let groupPromise = user.get('groups').createRecord({});
      return groupPromise;
    });
  }
});
