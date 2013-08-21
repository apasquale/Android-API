'use strict';

angular.module('assetsApp')
.service('NoteSvc', function(localStorageService){
  return {
    allNotes: function() {
      var jsonstr = localStorageService.get('notes');
      console.log(jsonstr);
      var notes = [];
      if(jsonstr) {
        console.log(jsonstr);
        notes = jsonstr;
      }
      return notes;
    },
    addNote: function(note) {
      var jsonstr = localStorageService.get('notes');
      var notes = [];
      if(jsonstr) {
        notes = jsonstr;
        console.dir(notes);
      }
      notes.push(note);
      console.dir(notes);
      localStorageService.add('notes', notes);
    }
  };
});
