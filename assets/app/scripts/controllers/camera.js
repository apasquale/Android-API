'use strict';

angular.module('assetsApp')
  .controller('CameraCtrl', function ($scope, cameraSvc) {
	  $scope.nickname = 'Jess';
	  
	  $scope.image = 'http://placehold.it/350x150';
	  $scope.takePhoto = function(name) {
		  console.log('function arg: ' + name);
		  console.log('nickname: ' + $scope.nickname);
		  $scope.image = cameraSvc.takePhoto();
	  }
	  $scope.getPhoto = function(source) {
		  console.log('Controller source: ' + source);
		  $scope.image = cameraSvc.getPhoto(source);
	  }
  });
