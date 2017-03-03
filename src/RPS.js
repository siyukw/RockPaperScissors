//user's choice
var userChoice = prompt("Do you choose rock, paper or scissors?");
var examination = function(userChoice) {
    if (userChoice === "rock") {
        console.log("Thank you");
    } else if (userChoice === "scissors") {
        console.log("Thank you");
    } else if (userChoice==="paper") {
        console.log("Thank you");
    } else {
        console.log( "Please follow the rules");
    }
};
examination(userChoice)

//computer's choice
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

//compare
var choice1=userChoice
var choice2=computerChoice
var compare=function (choice1,choice2) {
    if(choice1===choice2){
     return "The result is a tie!" ; }
     //rock v sth
     else if(choice1==="rock"){

          if (choice2==="scissors"){
             return "rock wins";}
          else{return "paper wins";}
      }
      //paper v sth
      else if(choice1==="paper"){
          if(choice2==="rock"){
              return"paper wins";}
          else {return"scissors wins";}
      }
      //scissors v sth
      else if(choice1==="scissors"){
        if(choice2==="rock"){
            return "rock wins";}
        else{return"scissors wins";}
    }
};
//call the function
compare(userChoice, computerChoice)


