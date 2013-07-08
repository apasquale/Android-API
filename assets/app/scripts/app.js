'use strict';

var app = angular.module('assetsApp', []);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.service('phonegapReady', function ($rootScope) {
    return function (fn) {
      var queue = [];

      var impl = function () {
        queue.push(Array.prototype.slice.call(arguments));
      };

      document.addEventListener('deviceready', function () {
        queue.forEach(function (args) {
          fn.apply(this, args);
        });
        impl = fn;
      }, false);
      
      return function () {
        return impl.apply(this, arguments);
      };
    };
  });
  
app.service('geolocation', function ($rootScope, phonegapReady) {
    return {
      getCurrentPosition: phonegapReady(function (onSuccess, onError, options) {
        navigator.geolocation.getCurrentPosition(function () {
          var that = this,
            args = arguments;
            
          if (onSuccess) {
            $rootScope.$apply(function () {
              onSuccess.apply(that, args);
            });
          }
        }, function () {
          var that = this,
            args = arguments;
            
          if (onError) {
            $rootScope.$apply(function () {
              onError.apply(that, args);
            });
          }
        },
        options);
      })
    };
  });

  

