import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'detail',
  ajax: Ember.inject.service(),
  model(params) {
    return this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/' + params.postId);
  }
});
