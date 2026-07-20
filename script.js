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