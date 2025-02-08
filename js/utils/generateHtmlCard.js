import * as htmlElement from '../constants/htmlElements';

const logoSourcePrefix = "./images/";
const logoSourceSuffix = "-logo.png";

export function getCard(car) {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("card");
    parentDiv.style.width = "18rem";
    parentDiv.style.padding = "1%";

    // ...

    return parentDiv;
}

function getBrandImageElement(car) {
    let image = document.createElement(htmlElement.IMG);
    image.src = logoSourcePrefix + car.brand.toLowerCase() + logoSourceSuffix;
    image.classList.add("card-img-top");

    return image;
}

function getCardBody(car) {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("card-body");
}

function getCardTitle(car) {
    let title = document.createElement(htmlElement.H5);
    title.classList.add("card-title");
    title.innerText = car.brand;
    return title;
}

function getCardText(car) {
    let description = document.createElement(htmlElement.P);
    description.classList.add("card-text");
    description.innerText = car.year + " " + car.model;
    return description;
}
