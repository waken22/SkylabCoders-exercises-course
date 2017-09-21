/* charFreq()

Write a function charFreq() that takes a string and builds a
frequency listing of the characters contained in it.
Represent the frequency listing as a Javascript object.
Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

*/

function charFreq (text) {
  var characters = {}

  for (var i = 0; i < text.length; i++) {
    if (!characters[text[i]]){
      characters[text[i]] = 1

    }
    else{
      ++characters[text[i]]
    }
  }
  return characters
}
  