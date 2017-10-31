//GLOBAL VARIABLES
//================================================
//arrays and functions for holding the data

var computerGuess = 0;
var totalUser = 0;

var wins = 0;
var loss = 0;

//1-12 CRYSTALS
var greenCrystal = 0;
var blackCrystal = 0;
var pinkCrystal = 0;
var blueCrystal = 0;

function initialize(){
	greenCrystal = getRandomInt(1,12);
	blackCrystal = getRandomInt(1,12);
	pinkCrystal = getRandomInt(1,12);
	blueCrystal = getRandomInt(1,12);

	computerGuess = getRandomInt (19, 120);
	$("#scoreToMatch").text(computerGuess);

	//$("#buttons-green").attr("value", greenCrystal);
}
function win(){
	wins++;
	$("#total-wins").text(wins);
	totalUser = 0;
	$("#playerScore").text(totalUser);
	console.log(wins);
}
function lose(){
	loss++;
	console.log(loss + "you losssssse");
	$("#total-loss").text(loss);
	totalUser = 0;
	$("#playerScore").text(totalUser);
	console.log(loss);
}
function updateTotal(){
	$("#playerScore").text(totalUser);
	console.log(totalUser, computerGuess)
	if (totalUser > computerGuess){
		initialize();
		alert("You Lose!");
		lose();
	} else if (totalUser === computerGuess){
		initialize();
		alert("You Win!")
		win();
	}
}

$("#buttons-green").on("click", function(){
	totalUser += greenCrystal;
	updateTotal();
	console.log(totalUser);
	updateTotal();
});
$("#buttons-black").on("click", function(){
	totalUser += blackCrystal;
	updateTotal();
	console.log(totalUser);
	updateTotal();
});
$("#buttons-pink").on("click", function(){
	totalUser += pinkCrystal;
	updateTotal();
	console.log(totalUser);
	updateTotal();
});
$("#buttons-blue").on("click", function(){
	totalUser += blueCrystal;
	updateTotal();
	console.log(totalUser)
	updateTotal();
});

initialize();


  
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}











