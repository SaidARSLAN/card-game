const game = document.querySelector(".game");

const nums = [];

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
}