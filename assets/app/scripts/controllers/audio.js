'use strict';

angular.module('assetsApp')
  .controller('AudioCtrl', function ($scope, audioSvc) {
    /*
    $scope.awesomeThings = [

      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    $scope.captureAudio = function() {
        console.log('AudioCtrl: captureAudio') ;
        //$scope.audiofiles  =  audioSvc.captureAudio();
        audioSvc.captureAudio().then(function(audioFiles) {
            console.log('AudioCtrl: Success');
            $scope.audiofiles = audioFiles;
        }, function(reason) {
            console.log('AudioCtrl: Failed');
            alert('Failed: ' + reason);
        });
    }
  });
