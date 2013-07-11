angular.module('assetsApp')
	.controller('MainCtrl', function($scope, $rootScope) {
//  .controller('MainCtrl', function($scope, geolocation) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

  $scope.image1 = 'http://placehold.it/350x150';
  $scope.image2 = 'http://placehold.it/100x100';

    if (typeof $rootScope.image === 'undefined') {
        console.log('MainCtrl: No rootScope.image');
        $scope.image = $scope.image1
    }
    else
    {
        console.log('MainCtrl: Found rootScope.image');
        $scope.image = $rootScope.image
    }

    $scope.swicthPhoto = function() {
        console.log('MainCtrl: swicthPhoto');
        $scope.image = $scope.image2;
        $rootScope.image   = $scope.image2;
    }
  
  /*geolocation.getCurrentPosition(function (position) {
	    alert('Latitude: '              + position.coords.latitude          + '\n' +
	          'Longitude: '             + position.coords.longitude         + '\n' +
	          'Altitude: '              + position.coords.altitude          + '\n' +
	          'Accuracy: '              + position.coords.accuracy          + '\n' +
	          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
	          'Heading: '               + position.coords.heading           + '\n' +
	          'Speed: '                 + position.coords.speed             + '\n' +
	          'Timestamp: '             + position.timestamp                + '\n');
	  });*/
  
});
