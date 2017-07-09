let $ = require('jquery'); //jquery now loaded and assigned to $


/*
let count = 0;
$('#click-counter').text(count);
$('#countbtn').on('click', () => {
	count++;
	$('#click-counter').text(count);
})
*/


let charGrades;
let gradesArray;
const grades = {'a': 5, 'b': 4, 'c': 3, 'd': 2, 'e': 1, 'f': 0};

let calculate = function(array) {
	let total = 0;
	for (var i = 0; i < array.length; i++) {
		var character = array[i];
		total += grades[character];
	}
	return total/array.length;
}

$('#convertbtn').on('click', () => {
	charGrades = $('#char-grades').val().toLowerCase();
	if (charGrades.match(/[f-å]/i)) {
		$('#grade-result').text("Error: grades should be characters between A and F");
		$('#char-grades').css({'color' : 'red'})	
	} else {
		$('#char-grades').css({'color' : 'black'})
		gradesArray = charGrades.split(" ");
		let gpa = calculate(gradesArray);	
		$('#grade-result').text("Your GPA is: " + gpa);	
	}
	
})

