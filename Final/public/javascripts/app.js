angular.module('photographers', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
	   $scope.photogs = [
      {title:'title1', location: 'location1'}
    ];
    $scope.create = function(photog) {
      return $http.post('/addPhotographer', photog).success(function(data){
        $scope.photogs.push(data);
      });
    };
	$scope.addPhotographer = function() {
	  $scope.create({title:$scope.title,location:$scope.location});
      $scope.title='';
      $scope.location='';
    };
    $scope.upvote = function(rating) {
      return $http.put('/addPhotographer/' + rating._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          rating.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(rating) {
	  $scope.upvote(rating);
    };
    $scope.getAll = function() {
      return $http.get('/addPhotographer').success(function(data){
        angular.copy(data, $scope.photogs);
      });
    };
    $scope.getAll();

  }
]);
