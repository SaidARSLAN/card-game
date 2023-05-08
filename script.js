const game = document.querySelector(".game");
const popUp = document.querySelector(".pop-up");
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
    elm.children[0].classList.toggle("flip-card");
    count--;
    let number = Number(elm.children[0].children[1].children[0].textContent);
    total += number;
    if (count <=0 && total < 20) {
            const result = `
                <h1>YOU LOST</h1>
            `
            popUp.innerHTML=result;
            popUp.style.display="flex";
    }
    if (total > 20 && count >= 0) {
        const result = `
            <h1>You Win</h1>
        `
        popUp.innerHTML=result;
        popUp.style.display="flex";
    }
}