/*
filterLongWords()

Write a function filterLongWords() that takes an array of words and an integer 
i and returns the array of words that are longer than i.^
*/

function filterLongWords(words, int){
  var newWords = [];
  for (var i = 0; i < words.length; i++) {
    if(words[i].length > int)
      newWords.push(words[i]);
  }
  return newWords;
}