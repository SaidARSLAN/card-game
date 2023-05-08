const game = document.querySelector(".game");


const numbers = [];

function createNumber() {

    for (let index = 0; index <= 11; index++) {
        const number = Math.floor(Math.random() * 10);
        numbers.push(number);
    }
    
}
createNumber();
function displayGame() {
    for (let i of numbers) {
        const card = ` <div class="game-card">
                    <h3>${i}</h3>
                    </div>
                    `
        game.insertAdjacentHTML("beforeend",card);
    }
}
displayGame();