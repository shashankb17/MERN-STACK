let maximum = parseInt(prompt("Enter the Maximum number!"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid maximum number!"));
}
const targetNum = Math.floor(Math.random()*maximum) +1;
let guess = prompt("Enter your first guess");
let attempts = 1;
while(parseInt(guess) !== targetNum){
    if(guess === 'q'){
        break;
    }
    guess = parseInt(guess);
    if(guess > targetNum){
        guess = prompt("Too High Try your next guess");
        attempts++;
    }
    else if(guess < targetNum){
        guess = prompt("Too low Try your next guess");
        attempts++;
    }
    else{
        guess = prompt("Invalid input. Please enter the valid input or type 'q' to quit");
    }
}
if(guess === 'q'){
    console.log("Okay Roger that, Quittin..!");
} else{
    console.log("Congrats");
    console.log(`You Got the correct answer in ${attempts} guesses`);
}