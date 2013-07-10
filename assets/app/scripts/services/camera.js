'use strict';

angular.module('assetsApp')
  .factory('cameraSvc', function($q, $rootScope) {
	    return {
	        takePhoto: function() {
	        	console.log('cameraSvc: takePhoto()');
	    		//return 'http://placehold.it/200x100';
                var deferred = $q.defer();

                setTimeout(function() {
                    console.log('cameraSvc: takePhoto: Success');
                    $rootScope.$apply(function() {
                        deferred.resolve('http://placehold.it/200x100');
                    })
                }, 1000);

                return deferred.promise;
	        },
	        getPhoto: function(source) {
	        	console.log('cameraSvc: getPhoto('+source+')');
	        	var deferred = $q.defer();

                setTimeout(function() {
                    console.log('cameraSvc: getPhoto: Success');
                    $rootScope.$apply(function() {
                        deferred.resolve('http://placehold.it/100x100');
                    })
                }, 1000);

                return deferred.promise;
	        }
	    };
	});
