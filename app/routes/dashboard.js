import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: service('session'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },

  model() {
    return this.store.findRecord('user', this.get('session.data.authenticated.user_id'));
  },

  renderTemplate() {
    this.render();
  }

});
