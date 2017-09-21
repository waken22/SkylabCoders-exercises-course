/*
translate()

Write a function translate() that will translate a text into "rövarspråket".
That is, double every consonant and place an occurrence of "o" in between. For example,
translate("this is fun") should return the string "tothohisos isos fofunon".
*/

function translate (phrase) {
  var vocals = 'aeiou '
  var word = ''
  for (var i = 0; i < phrase.length; i++) {
    if (vocals.indexOf(phrase[i]) === -1) {
      word += phrase[i] + 'o' + phrase[i]
    } else {
      word += phrase[i]
    }
  }
  return word
}
