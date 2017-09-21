var callMe = function(){
  var count = 0;
  return function(){
    return count++;
  }
}();


function callMe() {
    var numCalls = 0
    callMe = function() {
        return ++numCalls
    }
    return callMe()
}
callMe()
