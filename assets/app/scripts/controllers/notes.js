'use strict';

angular.module('assetsApp')
  .controller('NotesCtrl', function ($scope, NoteSvc) {
    //Load notes
    $scope.notes = NoteSvc.allNotes();

    $scope.todoText = "";

    //Add note
    $scope.addNote = function() {
      var note = {text:$scope.todoText, done:false};

      $scope.todoText = '';

      NoteSvc.addNote(note);
      $scope.notes = NoteSvc.allNotes();
    };
    //Edit note

    //Delete note

    //Get note
  });
