import * as addCarInteraction from '../interactives/addCarInteractions.js'

function goBack() {
    window.location.href = "../index.html";
}

function attachEventListeners() {
    addCarInteraction.backButton.addEventListener('click', goBack);
}

function initialize() {
    attachEventListeners();
}

window.onload = initialize;