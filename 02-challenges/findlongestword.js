/*
findLongestWord()

Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
*/

function findLongestWord(words) {
  var numbers = [];
  for (var i = 0; i < words.length; i++) {
    numbers.push(words[i].length);
  }
  return Math.max(... numbers);
}

