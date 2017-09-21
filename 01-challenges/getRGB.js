/*Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" 
in its RGB representation rgb(0,0,255)". 
Give the function the name getRGB() and test it with this code

Hint: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split

var a = getRGB ('#00FF00');
a;
rgb(0,255,0)”;
*/


function getRGB(code) {

  var codeConverted = [];
  var codeSeparated = code.split('');
  for(var i = 2; i < 7; i += 2){
    codeConverted.push(parseInt(codeSeparated[i-1] + codeSeparated[i], 16));
  }
  return 'rgb(' + codeConverted.join() + ')';
}