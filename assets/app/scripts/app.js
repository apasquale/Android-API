'use strict';

var app = angular.module('assetsApp', ['LocalStorageModule']);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/camera', {
        templateUrl: 'views/camera.html',
        controller: 'CameraCtrl'
      })
      .when('/audio', {
        templateUrl: 'views/audio.html',
        controller: 'AudioCtrl'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl'
      })
      .when('/videos', {
        templateUrl: 'views/videos.html',
        controller: 'VideosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  

