function giveNumBetween(x1,x2) {

	var numbers = "";

	if(x2 < x1)
		numbers = -1;
	else{
		for(var i = x1+1; i < x2; i++){
			numbers += i + " "; 
		}
	}
	return numbers;
}

function multiTable() {
	var NumTable = "";
	// Columnas
	for(var i = 1; i <= 10; i++){
		for(var j = 1; j <= 10; j++){
			NumTable += i * j + '\t';
		}
		NumTable += '\n';
	}
	console.log(NumTable);
}

function multiTableOneNum(num) {
	var numbersRes = '';
	for(var i = 1; i <= 10; i++){
		numbersRes += num * i + '\t';
	}
	console.log(numbersRes);
}

function TheSumOfThem() {
	var number = 23;

}