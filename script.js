const game = document.querySelector(".game");


const numbers = [];

let final = 0;

function createNumber() {

    for (let index = 0; index <= 11; index++) {
        const number = Math.floor(Math.random() * 10);
        numbers.push(number);
    }
    
}

function displayGame() {
    createNumber();
    for (let i of numbers) {
        const card = ` <div class="game-card" onclick="action(this)">
                    <div class="front">?</div>
                    <div class="back">${i}</div>
                    </div>
                    `
        game.insertAdjacentHTML("beforeend",card);
    }
}
displayGame();



function action(elm) {
    elm.classList.toggle("show_info");
    final += Number(elm.children[1].textContent);
    if (final >= 25) {
        console.log("Başardın",final);
    }
}
