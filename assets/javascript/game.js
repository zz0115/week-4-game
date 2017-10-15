var wins = 0;
var losses = 0;
var totalScore = 0;
var citrineRandomNumber;
var amethystRandomNumber;
var rubyRandomNumber;
var diamondRandomNumber;
var printResult = "";

// Randomly chooses a number as target number, range from 19 to 120
var minNumber = 19;
var maxNumber = 120;

var targetNumber = targetNumberFromRange(minNumber, maxNumber);

function targetNumberFromRange(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

// console.log(targetNumber);

//Randomly chooses a number for crystal, range from 1 to 12
// var minNumber = 1;
// var maxNumber = 12;

// var crystalNumber = crystalNumberFromRange(minNumber, maxNumber);
reset();
//This function resets when win or loss
function reset() {
	totalScore = 0;
	targetNumber = targetNumberFromRange(19,120);
	citrineRandomNumber = crystalNumberFromRange(1,12);
	amethystRandomNumber = crystalNumberFromRange(1,12);
	rubyRandomNumber = crystalNumberFromRange(1,12);
	diamondRandomNumber = crystalNumberFromRange(1,12);
	printResult = "";

	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html2 =
	"<p>Target Number: " + targetNumber + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#targetNumber").innerHTML = html2;
	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html =
	"<p>Total Score: " + totalScore + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#totalScore").innerHTML = html;
}

function crystalNumberFromRange(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}

// console.log(crystalNumber);

//This function calculates total score
function returnTotalScore(crystalRandomNumber) {
	totalScore = totalScore + crystalRandomNumber;
	// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html =
	"<p>Total Score: " + totalScore + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#totalScore").innerHTML = html;

	if (totalScore == targetNumber) {
		printResult = "You won!";
		wins +=1;
		reset();
	
	}

	else if (totalScore > targetNumber) {
		printResult = "You lose!";
		losses +=1;
		reset();

	}

    // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
	var html3 = printResult + 
				"<p>Wins: " + wins + "</p>" +
				"<p>Losses: " + losses + "</p>";

	// Set the inner HTML contents of the #game div to our html string
	document.querySelector("#result").innerHTML = html3;
}

//This function is run whenever the user clicks on a crystal.

var citrineImage = document.getElementById("image1");
citrineImage.addEventListener("click", function() {
	returnTotalScore(citrineRandomNumber);
});

var amethystImage = document.getElementById("image2");
amethystImage.addEventListener("click", function() {
	returnTotalScore(amethystRandomNumber);
});

var rubyImage = document.getElementById("image3");
rubyImage.addEventListener("click", function() {
	returnTotalScore(rubyRandomNumber);
});

var diamondImage = document.getElementById("image4");
diamondImage.addEventListener("click", function() {
	returnTotalScore(diamondRandomNumber);
});





