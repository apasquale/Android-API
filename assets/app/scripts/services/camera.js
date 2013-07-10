'use strict';

angular.module('assetsApp')
  .factory('cameraSvc', function() {
	    return {
	        takePhoto: function() {
	        	console.log('cameraSvc: takePhoto()');
	    		return 'http://placehold.it/200x100';
	        },
	        getPhoto: function(source) {
	        	console.log('cameraSvc: getPhoto('+source+')');
	        	return 'http://placehold.it/100x100';
	        }
	    };
	});
