'use strict';

angular.module('assetsApp')
  .service('audioSvc',function($q, $rootScope) {
        return {
            captureAudio: function() {
                console.log('audioSvc: captureAudio') ;
                var deferred = $q.defer();
                navigator.device.capture.captureAudio(
                    function(mediaFiles) {
                        $rootScope.$apply(function() {
                            deferred.resolve(mediaFiles);
                        });
                    },
                    function captureError(error) {
                        var msg = 'An error occurred during capture: ' + error.code;
                        alert(msg, null, 'Uh oh!');
                    },
                    {limit: 2}
                );

                return deferred.promise;
            }
        }
  });
