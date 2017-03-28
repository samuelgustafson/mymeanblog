(function() {
  angular.module('mymeanblog')
         .controller('PostController', PostController);

  PostController.$inject = ['$scope', 'PostService', '$routeParams'];

  function PostController($scope, PostService, $routeParams){
    $scope.create = create;
    $scope.edit = edit;
    $scope.mockPost = {
      _id: 'hq234r4rwerqr4354',
      title: 'The greatest thing ever',
      body: 'stuff and things stuff and things stuff and things',
      created: new Date(),
      updated: new Date()
    };
  var id = $routeParams.postId;
  PostService.getOne(id)
             .then(function(){
               console.log('success')
             })
             .catch(function(){
               console.log('error');
             })

    function edit(post){
      console.log('editing the post');
    }

    function create(post){
      PostService.create(post);
    }
  }
}());
