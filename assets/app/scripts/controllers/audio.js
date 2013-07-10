'use strict';

angular.module('assetsApp')
  .controller('AudioCtrl', function ($scope) {
    /*
    $scope.awesomeThings = [

      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/
    $scope.captureAudio = function() {
        console.log('AudioCtrl: captureAudio') ;
        $scope.audiofiles  = [
            {'name': 'HTML5 Boilerplate', 'path': '/sdcard/recording-2018408779.3gpp'},
            {'name': 'AngularJS', 'path': '/sdcard/recording-2018408779.3gpp'},
            {'name': 'Karma', 'path': '/sdcard/recording-2018408779.3gpp'}
        ];
    }
  });
