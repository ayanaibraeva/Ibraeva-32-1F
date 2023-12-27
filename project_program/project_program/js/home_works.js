// Homework №1
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[_A-Za-z0-9-]*@gmail.com$/

gmailButton.onclick = () => {
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "Success!"
        gmailResult.style.color = "green"
    }else{
        gmailResult.innerHTML = "You entered your email incorrectly!"
        gmailResult.style.color = "red"
    }
}


// const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
// const moveBlock = (position) => {
//     if (position < parentBlock.clientWidth - childBlock.clientWidth) {
//         position += 1;
//         childBlock.style.left = `${position}px`;
//         setTimeout(() => moveBlock(position), 25);
//     }
// }
// moveBlock(0)


// Homework №2


let positionX = 0;
let positionY = 0;

const parentWidthFree = 449;
const moveSpeedChildBlock = 1;
const moveBlock = () => {
    if(positionX < parentWidthFree && positionY === 0){
        positionX++
        childBlock.style.left = `${positionX}px`
    }else if(positionX >= parentWidthFree && positionY < parentWidthFree ){
        positionY++
        childBlock.style.top = `${positionY}px`
    }else if(positionX > 0 && positionY === parentWidthFree){
        positionX--;
        childBlock.style.left = `${positionX}px`
    }else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }
    setTimeout(moveBlock, moveSpeedChildBlock);
}
moveBlock();

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');
const interval = document.querySelector('#seconds');
let counter = 0;
let intervalClear;

function start() {
    clearInterval(intervalClear)
    counter++
    interval.innerText = counter
    intervalClear = setTimeout(start, 1000)
}
function stop(){
    clearInterval(intervalClear)
}
function reset() {
    stop()
    counter = 0
    interval.innerText = counter
}

startButton.onclick = () => start();
resetButton.onclick = () => reset();
stopButton.onclick = () => stop();


