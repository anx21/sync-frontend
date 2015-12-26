import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {
    this.route('groups', {resetNamespace: true}, function() {
      this.route('new');
      this.route('show', {
        path: ':group_id'
      });
      this.route('edit', {
        path: ':group_id/edit'
      });
    });
  });
});

export default Router;
