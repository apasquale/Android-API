'use strict';

angular.module('assetsApp')
  .controller('VideosCtrl', function ($scope) {
    $scope.videofiles = [
      {
        name: 'rogenSi - Presentation Structure Best Practices',
        src: 'http://www.youtube.com/embed/nMGJJFnnbFk'
      }  ,
      {
        name: 'Great Openings and Closings',
        src: 'http://www.youtube.com/embed/NyE1Kz0e--0'
      },
      {
        name: 'Lady Gaga - Applause (Official)',
        src: 'http://www.youtube.com/embed/pco91kroVgQ'
      }
    ];

    $scope.setVideo = function(video) {
      $scope.currentvideo = video  ;
    }
  });
