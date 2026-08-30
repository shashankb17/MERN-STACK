const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const resetbtn = document.querySelector("#reset");
const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");
const winningScoreSelect = document.querySelector("#playto");
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
p1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
        }
    }
    p1display.textContent = p1Score;
});
p2btn.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
        }
    }
    p2display.textContent = p2Score;
});
winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});
resetbtn.addEventListener('click', reset);
function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner','loser');
    p2display.classList.remove('winner','loser');
}