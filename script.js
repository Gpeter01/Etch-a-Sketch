'use strict'
function etchSize() {
    const secondContainer = document.querySelector('.second-container');
    const etch = document.querySelector('.etch');
    const zContainer = document.querySelector('.z-container');
    const secondContainerStyle = getComputedStyle(secondContainer);
    const size = parseFloat(secondContainerStyle.width) - (parseFloat(secondContainerStyle.padding) * 2) + 'px';
    etch.style.width = size;
    etch.style.height = size;
    zContainer.style.width = size;
    zContainer.style.height = size;
}
etchSize();
function findWidth(numberPercolumn) {
    const etch = document.querySelector('.etch');
    const computedStylesOfContainer = getComputedStyle(etch);
    const sizeOfBox = `${(parseFloat(computedStylesOfContainer.width) - (parseFloat(computedStylesOfContainer.borderWidth) * 2)) / numberPercolumn}px`;
    return sizeOfBox;
}
function makeDivs(numOfDivs, widthOfDivs, heightOfDivs, numberPerRow) {
    for (let i = 1; i <= numOfDivs; i++) {
        const miniDiv = document.createElement('div');
        miniDiv.classList.add(`miniDiv${i}`);
        miniDiv.style.width = widthOfDivs;
        miniDiv.style.height = heightOfDivs;
        miniDiv.style.opacity = 0;
        const etch = document.querySelector('.etch');
        etch.appendChild(miniDiv);
    }
    getBorderRadius(numberPerRow, numOfDivs);
}
function getBorderRadius(numberOfDivs, squareOfNumberOfDivs) {
    const miniDivTopLeftCorner = document.querySelector(`.miniDiv1`);
    miniDivTopLeftCorner.style.borderTopLeftRadius = '2rem';
    const miniDivTopRightCorner = document.querySelector(`.miniDiv${numberOfDivs}`);
    miniDivTopRightCorner.style.borderTopRightRadius = '2rem';
    const miniDivBottomLeftCorner = document.querySelector(`.miniDiv${squareOfNumberOfDivs - numberOfDivs + 1}`);
    miniDivBottomLeftCorner.style.borderBottomLeftRadius = '2rem';
    const miniDivBottomRightCorner = document.querySelector(`.miniDiv${squareOfNumberOfDivs}`);
    miniDivBottomRightCorner.style.borderBottomRightRadius = '2rem';
}
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}
function changeSentenceOpacity() {
    const mainSentence = document.querySelector('.main-sentence');
    mainSentence.style.opacity = 0;
}
let incrementer = 1;
function changeColor(event) {
    const mainSentence = document.querySelector('.main-sentence');
    const mainSentenceStyle = getComputedStyle(mainSentence);
    if (mainSentenceStyle.opacity == 1) {
        changeSentenceOpacity();
    }
    const mainTarget = event.target;
    const styleOfMainTarget = getComputedStyle(mainTarget);
    if (styleOfMainTarget.backgroundColor == 'rgb(255, 255, 255)' && styleOfMainTarget.opacity == 0) {
        const redContext = getRandomNumber();
        const blueContext = getRandomNumber();
        const greenContext = getRandomNumber();
        mainTarget.style.backgroundColor = `rgb(${redContext}, ${blueContext}, ${greenContext})`;
        let newOpacity = 0.1 * incrementer;
        mainTarget.style.opacity = newOpacity;
        if (incrementer < 10) {
            incrementer++;
        } else {
            return;
        }
    } else {
        return;
    }
}
document.querySelector('.etch').addEventListener('mouseover', changeColor);