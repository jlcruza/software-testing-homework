import * as htmlElement from '../constants/htmlElements.js';

const logoSourcePrefix = "./images/";
const logoSourceSuffix = "-logo.png";

export function getCard(car, showPopupCard) {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("card");
    parentDiv.classList.add("shadow");
    parentDiv.classList.add("m-3");
    parentDiv.style.width = "18rem";
    parentDiv.style.padding = "1%";

    let image = getBrandImageElement(car);
    let cardBody = getCardBody(car);
    let cardTitle = getCardTitle(car);
    let cardText = getCardText(car);
    let cardButton = getCardButton(car, showPopupCard);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);

    parentDiv.appendChild(image);
    parentDiv.appendChild(cardBody);

    return parentDiv;
}

function getBrandImageElement(car) {
    let image = document.createElement(htmlElement.IMG);
    image.src = logoSourcePrefix + car.brand.toLowerCase() + logoSourceSuffix;
    image.classList.add("card-img-top");
    image.height = 200;

    return image;
}

function getCardBody(car) {
    let parentDiv = document.createElement(htmlElement.DIV);
    parentDiv.classList.add("card-body");

    return parentDiv;
}

function getCardTitle(car) {
    let title = document.createElement(htmlElement.H5);
    title.classList.add("card-title");
    title.classList.add("result-card-title");
    title.innerText = car.brand;
    return title;
}

function getCardText(car) {
    let description = document.createElement(htmlElement.P);
    description.classList.add("card-text");
    description.classList.add("result-card-text");
    description.innerText = car.year + " " + car.model;
    return description;
}

function getCardButton(car, showPopupCard) {
    let button = document.createElement(htmlElement.BUTTON);
    button.classList.add("btn");
    button.classList.add("btn-primary");
    button.classList.add("result-card-button");
    button.innerText = "Ver más"

    button.addEventListener('click', function (){
        showPopupCard(car);
    });
    
    return button;
}
