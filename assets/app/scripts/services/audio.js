'use strict';

angular.module('assetsApp')
  .service('audioSvc',function($q, $rootScope) {
        return {
            captureAudio: function() {
                console.log('audioSvc: captureAudio') ;
                var deferred = $q.defer();

                setTimeout(function() {
                    $rootScope.$apply(function() {
                        deferred.resolve([
                            {'name': 'HTML5 Boilerplate', 'path': '/sdcard/recording-2018408779.3gpp'},
                            {'name': 'AngularJS', 'path': '/sdcard/recording-2018408779.3gpp'},
                            {'name': 'Karma', 'path': '/sdcard/recording-2018408779.3gpp'}
                        ]);
                    });
                }, 1000);

                return deferred.promise;
            }
        }
  });
