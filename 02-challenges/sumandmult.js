/*
sum() & multiply()

Define a function sum() and a function multiply() that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, 
sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
*/

function sum(numbers) {
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

sum([10,5,30,10]);

function mult(numbers) {
  var mult = numbers[0];
  for(var i = 0; i < numbers.length; i++){
    mult *= numbers[i];
  }
  return mult;
}

mult([1,2,3,4]);
