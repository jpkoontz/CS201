angular.module('app', [])
	.controller('mainCtrl', mainCtrl)
	.directive('avatar', avatarDirective);

function mainCtrl ($scope) {

	/* now we can use this array in the html because of $scope */
	$scope.users = [];

	/* making the function and adding to the scope. the user is the userForm */
	$scope.addnew = function (user) {
		
		/* push the specified user to our array */
		$scope.users.push({
			name: user.name,
			avatarUrl: user.url
		});

		/* clearing the form */
		user.name = '';
		user.url = '';
	};
}

function avatarDirective () {
	return {
		scope: {
			user: '='
		},
		restrict: 'E',
		template: (
			'<div class="Avatar">' +
				'<img ng-src="{{user.avatarUrl}}" />' +
				'<h4?{{user.name}}</h4>' +
			'</div>'
		),
		link: link
	};

	function link (scope) {
		if (!scope.user.avatarUrl) {
			scope.user.avatarUrl = 'http://thealmanac.org/assets/img/default_avatar.png';
		}
	}
}