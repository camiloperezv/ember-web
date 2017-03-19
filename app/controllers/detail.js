import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
    ajax: Ember.inject.service(),
    savePost: function (currentPost) {
      put('ajax').request('https://jsonplaceholder.typicode.com/posts/' + currentPost.id,{ data: currentPost })
        .then(function success(data){
          console.log('there the data is',data)
        },function error(err){
          console.log('the promise is oops',err);
        });
      console.log('currentPost',currentPost);
    },
    deletePost(id){
      this.del('ajax').request('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(function success(data){
          console.log('there the data is',data)
        },function error(err){
          console.log('the promise is oops',err);
        });
    }
  }
});
