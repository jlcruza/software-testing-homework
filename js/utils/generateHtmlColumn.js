import * as htmlElement from '../constants/htmlElements.js';

export function getRow() {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("row");
    return parentDiv;
}

export function getColumn() {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("col-4");
    return parentDiv;
}