'use strict';

angular.module('assetsApp')
  .controller('CameraCtrl', function ($scope, cameraSvc) {
	  $scope.nickname = 'Jess';
	  
	  $scope.image = 'http://placehold.it/350x150';
	  $scope.takePhoto = function() {
		  console.log('function arg: ' + name);
		  console.log('nickname: ' + $scope.nickname);
		  $scope.image = cameraSvc.takePhoto();
	  }
	  $scope.getPhotoFromLibrary = function() {
		  console.log('Controller: getPhotoFromLibrary');
		  $scope.image = cameraSvc.getPhoto(pictureSource.PHOTOLIBRARY);
	  }
	  $scope.getPhotoFromAlbum = function() {
		  console.log('Controller: getPhotoFromAlbum');
		  $scope.image = cameraSvc.getPhoto(pictureSource.SAVEDPHOTOALBUM);
	  }
  });
