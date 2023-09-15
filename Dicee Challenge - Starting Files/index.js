let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

let diceOne = document.querySelector(".img1");
let diceTwo = document.querySelector(".img2");

diceOne.setAttribute("src", `images/dice${randomNumber1}.png`);
diceTwo.setAttribute("src", `images/dice${randomNumber2}.png`);

let title = document.querySelector(".container h1")

if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins! 🚩"
} else {
    title.innerHTML = "Draw!"

}