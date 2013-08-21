'use strict';

describe('Controller: VideosCtrl', function () {

  // load the controller's module
  beforeEach(module('assetsApp'));

  var VideosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VideosCtrl = $controller('VideosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of videos to the scope', function () {
    expect(scope.videofiles.length).toBe(3);
  });

  it('should set the video to the scope', function () {
    scope.setVideo('http://www.youtube.com/embed/NyE1Kz0e--0');
    expect(scope.currentvideo).toEqual('http://www.youtube.com/embed/NyE1Kz0e--0');
  });
});
