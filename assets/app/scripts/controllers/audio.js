'use strict';

angular.module('assetsApp')
  .controller('AudioCtrl', function ($scope, audioSvc, localStorageService) {
    /*
    $scope.awesomeThings = [

      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    var audiofiles = localStorageService.get('audiofiles');
    if (!audiofiles) {
        console.log('CameraCtrl: No rootScope.image');
        $scope.audiofiles = []
    }
    else
    {
        console.log('CameraCtrl: Found rootScope.image');
        $scope.audiofiles = localStorageService.get('audiofiles')
    }

    $scope.captureAudio = function() {
        console.log('AudioCtrl: captureAudio') ;
        //$scope.audiofiles  =  audioSvc.captureAudio();
        audioSvc.captureAudio().then(function(audioFiles) {
            console.log('AudioCtrl: Success');
            $scope.audiofiles = $scope.audiofiles.concat(audioFiles);
            localStorageService.add('audiofiles', $scope.audiofiles);
        }, function(reason) {
            console.log('AudioCtrl: Failed');
            alert('Failed: ' + reason);
        });
    }
  });
