import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    refreshPost: function (id) {
      var thiz = this;
      this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/' + id).then(function success(data) {
        thiz.set('model', data);
      }, function error(err) {
        console.log('erro', err)
      });
    },
    savePost: function (currentPost) {
      this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/' + currentPost.id, {
        method: 'PUT',
        data: currentPost
      }).then(function success(data) {
          console.log('there the data is', data)
        }, function error(err) {
          console.log('the promise is oops', err);
        });
      console.log('currentPost', currentPost);
    },
    deletePost(id) {
      this.get('ajax').request('https://jsonplaceholder.typicode.com/posts/' + id,{
        method: 'DELETE'
      }).then(function success(data) {
          console.log('there the data is', data)
        }, function error(err) {
          console.log('the promise is oops', err);
        });
    }
  }
});
