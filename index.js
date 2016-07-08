var fs = require('fs');
var enex = require('enex-parser');
var terms = require('@quarterto/terms');

var notes = enex(fs.readFileSync('My Notes.enex', 'utf8'));
notes.forEach(note => note.terms = terms.getTerms(note.content));

var matrix = terms.collateTerms(notes);

console.log(notes[100].title, terms.getTagScores(notes[100].terms, matrix));
console.log(notes[101].title, terms.getTagScores(notes[101].terms, matrix));
