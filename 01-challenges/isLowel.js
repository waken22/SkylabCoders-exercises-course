/*
isVowel() function

Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

function isVowel(char) {
  var vowels = 'aeiou';
  if(vowels.indexOf(char) !== -1){
    return true;
  }
  return false;
}