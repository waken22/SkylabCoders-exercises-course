/*reverse()

Define a function reverse() that computes the reversal of a string. 
For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse(word) {
  var reversedWord = word.split('').reverse().join('');
  return reversedWord;
}