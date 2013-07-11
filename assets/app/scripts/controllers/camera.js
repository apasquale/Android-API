'use strict';

angular.module('assetsApp')
  .controller('CameraCtrl', function ($scope, cameraSvc, $rootScope) {
	  $scope.nickname = 'Jess';
	  
	$scope.image1 = 'http://placehold.it/350x150';

    if (typeof $rootScope.image === 'undefined') {
        console.log('CameraCtrl: No rootScope.image');
        $scope.image = $scope.image1
    }
    else
    {
        console.log('CameraCtrl: Found rootScope.image');
        $scope.image = $rootScope.image
    }

	  $scope.takePhoto = function() {
		  console.log('nickname: ' + $scope.nickname);
          cameraSvc.takePhoto().then(function(greeting) {
              console.log('Controller: Success');
              $scope.image = greeting;
              $rootScope.image   = $scope.image;
          }, function(reason) {
              console.log('Controller: Failed');
              alert('Failed: ' + reason);
          });
	  }
	  $scope.getPhotoFromLibrary = function() {
		  console.log('Controller: getPhotoFromLibrary');
		  $scope.image = cameraSvc.getPhoto(pictureSource.PHOTOLIBRARY);
          $rootScope.image   = $scope.image;
	  }
	  $scope.getPhotoFromAlbum = function() {
		  console.log('Controller: getPhotoFromAlbum');
		  $scope.image = cameraSvc.getPhoto(pictureSource.SAVEDPHOTOALBUM);
          $rootScope.image   = $scope.image;
	  }
  });
