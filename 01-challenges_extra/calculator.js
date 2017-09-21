/*
Calculator

Define a function called calculator that receives an operation and two numbers 
and returns the result of the operation applied to the values passed as parameters

   calculator("suma",10,5) // 15
   calculator("resta",10,5) // 5
   calculator("multiplicacion",10,5) // 50
   calculator("division",10,5) // 2
*/

function calculator(operation, num1, num2) {
  return operation(num1, num2);
}

function sum(num1, num2) {
  return num1 + num2;
}

function rest(num1, num2){
  return num1 - num2;
}

function multy(num1, num2){
  return num1 * num2;
}

function divi(num1, num2){
  return num1 / num2;
}