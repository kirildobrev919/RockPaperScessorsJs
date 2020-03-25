const getUserChoice = userInput =>{
  if(userInput=='rock'){
    return userInput.toLowerCase();
  }else if(userInput=='paper'){
    return userInput.toLowerCase();
  }else if(userInput=='scissors'){
   return userInput.toLowerCase();
  }else{
    console.log('Wrong input');
  }
}

const getComputerChoice = () => {
  let result = Math.floor(Math.random() * 3);

  if(result == 0){
    return 'rock';
  }else if(result == 1){
    return 'paper';
  }else if(result == 2){
   return 'scissors';
  }
}

function determineWinner (userChoice, computerChoice) {
    if(userChoice == computerChoice){
    console.log('The game is tie!');
  }
  else {
    if(userChoice == 'rock'){
      if(computerChoice == 'paper'){
        console.log('Computer wins!');
      }else{
        console.log('User is the winner!');
      }
    }else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        console.log('Computer wins!');
      }else{
        console.log('User is the winner!');
      }
    }else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        console.log('Computer wins!');
      }else{
        console.log('User is the winner!');
      }
    }
  }
}

function playGame(){  
let userChoice = getUserChoice('paper');
let computerChoice = getComputerChoice();
  
console.log(`computer choice is: ${computerChoice}`);
console.log(`user choice is: ${userChoice}`);

determineWinner(userChoice, computerChoice);  
}

playGame();