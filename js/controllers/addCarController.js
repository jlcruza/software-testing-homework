import * as addCarInteraction from '../interactives/addCarInteractions.js'
import * as addCarService from '../services/addCarService.js'
import * as historyUtil from '../utils/historyUtil.js'


function goBack() {
    historyUtil.goBackInHistory();
}

function saveCar()
{
    let brand = addCarInteraction.brandDropdown.value;
    let model = addCarInteraction.modelTextbox.value;

    // TODO: Commenting to introduce a bug on purpose.
    // let year = addCarInteraction.yearTextbox.value;

    // TODO: Assigning 2025 on purpose regardless of imput field.
    let year = "2025";

    addCarService.saveCarImpl(brand, model, year);
    goBack();
}

function attachEventListeners() {
    addCarInteraction.backButton.addEventListener('click', goBack);
    addCarInteraction.saveCarButton.addEventListener('click', saveCar);
}

function initialize() {
    attachEventListeners();
}

window.onload = initialize;