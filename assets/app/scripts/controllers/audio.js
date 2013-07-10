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
        $scope.audiofiles  =  audioSvc.captureAudio();
    }
  });
