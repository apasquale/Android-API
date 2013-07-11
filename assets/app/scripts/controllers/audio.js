'use strict';

angular.module('assetsApp')
  .controller('AudioCtrl', function ($scope, audioSvc, $rootScope) {
    /*
    $scope.awesomeThings = [

      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    if (typeof $rootScope.audiofiles === 'undefined') {
        console.log('CameraCtrl: No rootScope.image');
        $scope.audiofiles = []
    }
    else
    {
        console.log('CameraCtrl: Found rootScope.image');
        $scope.audiofiles = $rootScope.audiofiles
    }

    $scope.captureAudio = function() {
        console.log('AudioCtrl: captureAudio') ;
        //$scope.audiofiles  =  audioSvc.captureAudio();
        audioSvc.captureAudio().then(function(audioFiles) {
            console.log('AudioCtrl: Success');
            $scope.audiofiles = $scope.audiofiles.concat(audioFiles);
            $rootScope.audiofiles = $scope.audiofiles;
        }, function(reason) {
            console.log('AudioCtrl: Failed');
            alert('Failed: ' + reason);
        });
    }
  });
