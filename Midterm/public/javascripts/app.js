angular.module('song', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
	$scope.songs = [
      {title:'Comment 1', album:'album1', artist:'artist1', genre:'genre1', img:'img1', upvotes:5},
    ];
    $scope.create = function(song) {
      return $http.post('/comments', song).success(function(data){
        $scope.songs.push(data);
      });
    };
	$scope.addSong = function() {
	  $scope.create({title:$scope.title, album:$scope.album, artist:$scope.artist, genre: $scope.genre, img: $scope.img ,upvotes:0});
      $scope.title='';
      $scope.album='';
      $scope.artist='';
      $scope.genre='';
      $scope.img='';
    };
    $scope.upvote = function(song) {
      return $http.put('/comments/' + song._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          song.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(song) {
	  $scope.upvote(song);
    };
    $scope.getAll = function() {
      return $http.get('/comments').success(function(data){
        angular.copy(data, $scope.songs);
      });
    };
    $scope.getAll();

  }
]);
