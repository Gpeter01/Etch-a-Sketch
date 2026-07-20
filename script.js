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