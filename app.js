var computerChoice = "";
var userChoice = "";
function computerThink(){
	computerChoice = Math.floor(Math.random()*3);
	if
		(computerChoice === 1){
			computerChoice = "Rock";

	}   
	else if
		(computerChoice === 2){
			computerChoice = "paper"; 
	}        
	else{
		computerChoice = "scissors";
	}
	
}

function test3(){
	userChoice = "Rock";
	computerThink();
	results();
}

function test2(){
	userChoice = "Paper";
	computerThink();
	results();
}

function test(){
	alert("scissors");
	userChoice = "scissors";
	computerThink();
	compare();
}

var compare = function(choice1, choice2) {
	if(choice1 === choice2) {
		return "The result is a tie";

}

else if(userChoice)
