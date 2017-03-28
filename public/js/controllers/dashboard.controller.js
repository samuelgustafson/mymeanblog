(function(){
  angular.module('mymeanblog')
         .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$scope'];

  function DashboardController($scope){
    $scope.edit = edit;
    $scope.delete = deletePost;
    $scope.posts = [
      {
        _id: 's8d9e6f5dv7s5d',
        title: 'some title',
        body: 'things and stuff and things and stuff and things',
        created: new Date(),
        updated: new Date()
      },
      {
        _id: 's8d9e6f5dv7s5d',
        title: 'some title',
        body: 'things and stuff and things and stuff and things',
        created: new Date(),
        updated: new Date()
      },
    ]

    function edit(post){
      console.log('moving to the edit page');
    }
    function deletePost(post){
      console.log('deleting the post with _id of ' + post_id);
    }
  }
}());
