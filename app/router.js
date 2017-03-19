import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list');
  this.route('info');
  this.route('detail',{path:'detail/:postId'});
});

export default Router;
