var app = angular.module('photographers', ['ui.router', 'ngAnimate', 'ui.bootstrap'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html'
      })
      .state('add', {
        url: '/add',
        templateUrl: '/add.html'
      });
    $urlRouterProvider.otherwise('home');
  }])


app.controller('MainCtrl', [
  '$scope','$http', '$window',
  function($scope, $http, $window){
    $scope.displaybool = false;
    $scope.photogs = [
      {
        title:'Kylee Ann Photography', 
      location: 'Logan, Utah', 
      area: 'Northern Utah',
      rating: 3/5,
      price: 2/5,
      website: 'www.kyleeannphotography.com'
    },
      {
        title:'My Kind of Wonderful Photography', 
      location: 'Manti, Utah', 
      area: 'Central Utah',
      rating: 2/5,
      price: 2/5,
      website: 'www.kyleeannphotography.com'
    },
      {
        title:'Example Photography', 
      location: 'Portage, Utah', 
      area: 'Northern Utah',
      rating: 5/5,
      price: 5/5,
      website: 'www.kyleeannphotography.com'
    }
    ];

   //  $scope.upvote = function(rating) {
   //    return $http.put('/add/' + rating._id + '/upvote')
   //      .success(function(data){
   //        console.log("upvote worked");
   //        rating.upvotes = data.upvotes;
   //      });
   //  };

   //  $scope.incrementUpvotes = function(rating) {
	  // $scope.upvote(rating);
   //  };

    $scope.getAll = function() {
      return $http.get('/add').success(function(data){
        angular.copy(data, $scope.photogs);
        //$scope.photogs = data.concat($scope.photogs);
      });
    };
    $scope.getAll();

    $scope.displayInfo = function(photog) {
      $scope.displaybool = true;
      $scope.info = photog;
    };

    $scope.create = function(photog) {
      console.log(photog);
      return $http.post('/add', photog).success(function(data){
        console.log(data);
        $scope.photogs.push(data);
        console.log($scope.photogs);
        $window.location.href="#/home";
      });
    };
    
    $scope.addPhotographer = function(MC) {
      console.log(MC);
      $scope.create({
        title: MC.title,
        location: MC.location,
        area: MC.area,
        website: MC.website,
        engagements: MC.engagements,
        formals: MC.formals,
        wpackage: MC.wpackage,
        rating: 0,
        price: 0
      });
        $scope.title='';
        $scope.location='';
        $scope.area='';
        $scope.website='';
        $scope.engagements='';
        $scope.formals='';
        $scope.wpackage='';
    };
    $scope.hoveringOver = function(value) {
      $scope.overStar = value;
      $scope.percent = 100 * (value / $scope.max);
    };

    $scope.changeRating = function() {
      console.log("made it");
      var rateme = $scope.info.rating;
      angular.forEach($scope.photogs, function(value) {
        console.log(value.title);
        if (value.title == $scope.info.title) {
          console.log("this is what is altered"+value.rating);
          // value.rating == $scope.info.rating;
        }
      })
      console.log($scope.photogs);
      console.log(rateme);
    };

}]);

app.controller('AddCtrl', [
  '$scope','$http',
  function($scope, $http) {

    // $scope.photogs = [];

}]);




