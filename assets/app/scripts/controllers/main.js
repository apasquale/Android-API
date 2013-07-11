angular.module('assetsApp')
	.controller('MainCtrl', function($scope, $rootScope) {
//  .controller('MainCtrl', function($scope, geolocation) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];

    $scope.audiofiles1 = [
      {'name': 'Audio 1', 'fullPath': '/sdcard/Audio1.3gpp'},
      {'name': 'Audio 2', 'fullPath': '/sdcard/Audio2.3gpp'},
      {'name': 'Audio 3', 'fullPath': '/sdcard/Audio3.3gpp'}
    ];
    $scope.audiofiles2 = [
        {'name': 'Audio 4', 'fullPath': '/sdcard/Audio4.3gpp'},
        {'name': 'Audio 5', 'fullPath': '/sdcard/Audio5.3gpp'},
        {'name': 'Audio 6', 'fullPath': '/sdcard/Audio6.3gpp'}
    ];

    if (typeof $rootScope.afiles === 'undefined') {
        console.log('MainCtrl: No rootScope.audiofiles');
        $scope.audiofiles = []
    }
    else
    {
        console.log('MainCtrl: Found rootScope.audiofiles');
        $scope.audiofiles = $rootScope.afiles
    }

    var arrnum = 1
    $scope.addFiles = function() {
        console.log('MainCtrl: switchPhoto');
        if(arrnum == 1)   {
            console.log('MainCtrl: pushing audiofiles1');
            $scope.audiofiles = $scope.audiofiles.concat($scope.audiofiles1);
            arrnum = arrnum + 1;
        }
        else   {
            console.log('MainCtrl: pushing audiofiles2');
            $scope.audiofiles = $scope.audiofiles.concat($scope.audiofiles2);
        }
        console.log($scope.audiofiles);
        $rootScope.afiles = $scope.audiofiles;
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
