const game = document.querySelector(".game");


const numbers = [];

function createNumber() {

    for (let index = 0; index <= 20; index++) {
        const number = Math.floor(Math.random() * 10);
        numbers.push(number);
    }
    
}
createNumber();
console.log(numbers);