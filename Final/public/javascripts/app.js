var app = angular.module('photographers', ['ui.router'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('add', {
        url: '/add',
        templateUrl: '/add.html',
        controller: 'AddCtrl'
      });
    $urlRouterProvider.otherwise('home');
  }])


app.controller('MainCtrl', [
  '$scope','$http',
  function($scope, $http){
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

   //  $scope.getAll = function() {
   //    return $http.get('/add').success(function(data){
   //      angular.copy(data, $scope.photogs);
   //    });
   //  };
   //  $scope.getAll();
   $scope.displayInfo = function(photog) {
      $scope.info = photog;
   }

  }
])

app.controller('AddCtrl', [
  '$scope','$http',
  function($scope, $http) {

    $scope.photogs = [];

    $scope.create = function(photog) {
      console.log("come here baybay");
      return $http.post('/add', photog).success(function(data){
        console.log(data);
        $scope.photogs.push(data);
      });
    };
    
    $scope.addPhotographer = function() {
      $scope.create({
        title: $scope.title,
        location: $scope.location,
        area: $scope.area,
        website: $scope.website,
        engagements: $scope.engagements,
        formals: $scope.formals,
        wpackage: $scope.wpackage
      });
        $scope.title='';
        $scope.location='';
        $scope.area='';
        $scope.website='';
        $scope.engagements='';
        $scope.formals='';
        $scope.wpackage='';
      }
}]);




