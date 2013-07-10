'use strict';

angular.module('assetsApp')
  .controller('CameraCtrl', function ($scope, cameraSvc) {
	  $scope.nickname = 'Jess';
	  
	  $scope.image = 'http://placehold.it/350x150';
	  $scope.takePhoto = function() {
		  console.log('nickname: ' + $scope.nickname);
          cameraSvc.takePhoto().then(function(greeting) {
              console.log('Controller: Success');
              $scope.image = greeting;
          }, function(reason) {
              console.log('Controller: Failed');
              alert('Failed: ' + reason);
          });
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
