'use strict';

angular.module('assetsApp')
  .factory('cameraSvc', function($q, $rootScope) {
	    return {
	        takePhoto: function() {
	        	console.log('cameraSvc: takePhoto()');

                var deferred = $q.defer();
                navigator.camera.getPicture(
                    function(imageURI) {
                        console.log('cameraSvc: takePhoto: Success');
                        $rootScope.$apply(function() {
                            deferred.resolve(imageURI);
                        })
                    },
                    function(message) {
                        $rootScope.$apply(function() {
                            deferred.reject(message);
                        })
                    },
                    { quality: 50, destinationType: destinationType.FILE_URI }
                );

                return deferred.promise;
	        },
	        getPhoto: function(source) {
	        	console.log('cameraSvc: getPhoto('+source+')');
	        	var deferred = $q.defer();

                navigator.camera.getPicture(
                    function(imageURI) {
                        console.log('cameraSvc: takePhoto: Success');
                        $rootScope.$apply(function() {
                            deferred.resolve(imageURI);
                        })
                    },
                    function(message) {
                        $rootScope.$apply(function() {
                            deferred.reject(message);
                        })
                    },
                    { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source }
                );

                return deferred.promise;
	        }
	    };
	});
