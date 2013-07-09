'use strict';

var app = angular.module('assetsApp', []);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/camera', {
        templateUrl: 'views/camera.html'
      })
      .when('/audio', {
        templateUrl: 'views/audio.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  

