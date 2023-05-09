const game = document.querySelector(".game");
const popUp = document.querySelector(".pop-up");
const reset = document.querySelector("#reset");
const startGame = document.querySelector(".start-game");
const contain = document.querySelector(".contain")

reset.addEventListener("click",resetGame);
startGame.addEventListener("click",startEverything)


const nums = [];
let count = 5;
let total = 0;


var generateNumber = () => {
    for (i=1;i<=16;i++) {
        nums.push(Math.floor(Math.random()*10));
    }
}

function displayNumbers() {
    generateNumber();
    for (let i of nums) {
        const card = `<div class="card" onclick="flipCard(this)">
                        <div class="card-inner">
                        <div class="front">
                            <img src="/images/qmark.jpg" width="50px">
                        </div>
                        <div class="back">
                                <h2>${i}</h2>
                            </div>
                            </div>
                    </div>`
        game.insertAdjacentHTML("beforeend",card);
    }
}

displayNumbers();
function flipCard(elm) {
    if (elm.children[0].classList[1] != "flip-card") {
    elm.children[0].classList.toggle("flip-card");
    count--;
    let number = Number(elm.children[0].children[1].children[0].textContent);
    total += number;
    }
    calculateResult();
}



function calculateResult() {
    console.log(count,total);
    if (count <=0 && total < 20) {
        const result = `
            <h1>YOU LOST</h1>
            <h3>Your Point: ${total}</h3>
            <button onclick="resetGameButton()" type="button" id="again">Play Again</button>
        `
        popUp.innerHTML=result;
        popUp.style.display="flex";
        }
    if (total >= 20 && count >= 0) {
    const result = `
        <h1>You Win</h1>
        <h3>Your Point: ${total}</h3>
        <button onclick="resetGameButton()" type="button" id="again">Play Again</button>
    `
    popUp.innerHTML=result;
    popUp.style.display="flex";
    contain.style.display="none";
}
}

function resetGame() {
    count=5;
    total=0;
    nums.splice(0,nums.length);
    game.innerHTML="";
    displayNumbers();
}
 function resetGameButton() {
    popUp.style.display="none";
    count=5;
    total=0;
    nums.splice(0,nums.length);
    game.innerHTML="";
    displayNumbers();
    contain.style.display="flex";
}

var countBack = 4;

function counter() {
    countBack--;
    if (countBack==0) {
        displayGame();
    }
    if (countBack > 0) {
        startGame.style.display="none";
        const writeCount = `<h1 class="count">${countBack}</h1>`
        document.querySelector(".counterSection").innerHTML=writeCount;
    }
    
}

async function startEverything () {
    let startCount = setInterval(counter,1000);
}

function displayGame () {
    contain.style.transform = "scale(1)"
    startGame.style.display="none";
    document.querySelector(".counterSection").style.display="none";
}