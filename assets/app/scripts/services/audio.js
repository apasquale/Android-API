'use strict';

angular.module('assetsApp')
  .service('audioSvc',function($q, $rootScope) {
        return {
            captureAudio: function() {
                   console.log('audioSvc: captureAudio') ;
                   return [
                       {'name': 'HTML5 Boilerplate', 'path': '/sdcard/recording-2018408779.3gpp'},
                       {'name': 'AngularJS', 'path': '/sdcard/recording-2018408779.3gpp'},
                       {'name': 'Karma', 'path': '/sdcard/recording-2018408779.3gpp'}
                   ];
            }
        }
  });
