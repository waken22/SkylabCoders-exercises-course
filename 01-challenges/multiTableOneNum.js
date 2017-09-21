/*
Multiplications table on demand

Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter
*/


function multiTableOneNum(num) {
	var numbersRes = '';
	for(var i = 1; i <= 10; i++){
		numbersRes += num * i + '\t';
	}
	console.log(numbersRes);
}
