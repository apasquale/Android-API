angular.module('assetsApp')
	.controller('MainCtrl', function($scope) {
//  .controller('MainCtrl', function($scope, geolocation) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
  
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
