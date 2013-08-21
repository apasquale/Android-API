'use strict';

angular.module('assetsApp')
.controller('CameraCtrl', function ($scope, cameraSvc, localStorageService) {
  $scope.nickname = 'Jess';
  $scope.image1 = 'http://placehold.it/350x150';

  var lsimage = localStorageService.get('profileImage');
  if (!lsimage) {
    console.log('CameraCtrl: No ls.image');
    $scope.image = $scope.image1;
    localStorageService.add('profileImage', $scope.image);
  }
  else
  {
    console.log('CameraCtrl: Found rootScope.image');
    $scope.image = lsimage;
  }

  $scope.takePhoto = function() {
    console.log('nickname: ' + $scope.nickname);
    cameraSvc.takePhoto().then(function(greeting) {
      console.log('Controller: Success');
      $scope.image = greeting;
      localStorageService.add('profileImage', $scope.image);
    }, function(reason) {
      console.log('Controller: Failed');
      alert('Failed: ' + reason);
    });
  };
  $scope.getPhotoFromLibrary = function() {
    console.log('Controller: getPhotoFromLibrary');
    $scope.image = cameraSvc.getPhoto(pictureSource.PHOTOLIBRARY);
    localStorageService.add('profileImage', $scope.image);
  };
  $scope.getPhotoFromAlbum = function() {
    console.log('Controller: getPhotoFromAlbum');
    $scope.image = cameraSvc.getPhoto(pictureSource.SAVEDPHOTOALBUM);
    // $scope.image = 'http://placehold.it/200x200';
    localStorageService.add('profileImage', $scope.image);
  };
});
