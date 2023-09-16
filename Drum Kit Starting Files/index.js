// document.querySelectorAll("button")[1].addEventListener("click", handleClick)

function handleClick() {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}

function handleKeyPress(e) {
    let keyPress = e.key;
    makeSound(keyPress);    
    buttonAnimation(keyPress);
}

let numberOfDrumButtons = document.querySelectorAll("button")

numberOfDrumButtons.forEach(button => {
    button.addEventListener("click", handleClick)
});

document.addEventListener("keydown", handleKeyPress)

function makeSound(key) {
    switch (key) {
        case 'w':
            let audio = new Audio("./sounds/tom-1.mp3")
            audio.play();
            break;

        case 'a':
            let audio2 = new Audio("./sounds/tom-2.mp3")
            audio2.play();
            break;

        case 's':
            let audio3 = new Audio("./sounds/tom-3.mp3")
            audio3.play();
            break;

        case 'd':
            let audio4 = new Audio("./sounds/tom-4.mp3")
            audio4.play();
            break;

        case 'j':
            let audio5 = new Audio("./sounds/snare.mp3")
            audio5.play();
            break;

        case 'k':
            let audio6 = new Audio("./sounds/crash.mp3")
            audio6.play();
            break;

        case 'l':
            let audio7 = new Audio("./sounds/kick-bass.mp3")
            audio7.play();
            break;

        default: console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}