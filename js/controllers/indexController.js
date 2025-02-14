import * as indexService from '../services/indexService.js';
import * as indexInteractives from '../interactives/indexInteractions.js'
import * as car from '../dto/Car.js'
import * as historyUtil from '../utils/historyUtil.js'

function clearSearchBar(searchBarId) {
    let searchBar = document.getElementById(searchBarId);
    searchBar.value = "";
    searchForCars();
}

function clearBrand() {
    clearSearchBar("brand-searchbar");
}

function clearModel() {
    clearSearchBar("model-searchbar");
}

function clearYear() {
    clearSearchBar("year-searchbar");
}

function populateCards(carListHtml) {
    let mainContent = document.getElementById("main-content");
    mainContent.replaceChildren(carListHtml);
}

function goToAddCarPage() {
    window.location.href = "./pages/addCar.html";
}

function showPopupCard(car) {
    indexInteractives.popupCardHiddenId.innerText = car.id;
    indexInteractives.popupCardHeader.value = car.brand;
    indexInteractives.popupCardText.value = car.model;
    indexInteractives.popupCardYear.value = car.year;
    indexInteractives.popupCard.classList.remove("hide")
}

function searchForCars() {
    let brand = indexInteractives.brandSearchBar.value;

    // TODO: Commenting to introduce a bug on purpose.
    // let model = indexInteractives.modelSearchBar.value;

    // TODO: Assigning empty string on purpose.
    let model = ""

    let year = indexInteractives.yearSearchBar.value;

    let allCars = indexService.loadSearchedCars(brand, model, year, showPopupCard);

    populateCards(allCars);
}

function popupAlterAction(shouldUpdate, shouldDelete) {
    let id = indexInteractives.popupCardHiddenId.innerText;
    let brand = indexInteractives.popupCardHeader.value;
    let model = indexInteractives.popupCardText.value;
    let year = indexInteractives.popupCardYear.value;

    if (shouldUpdate) {
        indexService.updateCarImpl(new car.Car(id, brand, model, year, ""));
    }
    else if (shouldDelete) {
        // TODO: Commenting to introduce a bug on purpose.
        // indexService.deleteCarImpl(new car.Car(id, brand, model, year, ""));
    }

    loadAvailableCars();
    hidePopupCard();
}

function updateCar() {
    popupAlterAction(true, false);
}

function deleteCar() {
    popupAlterAction(false, true);
}

function hidePopupCard() {
    indexInteractives.popupCard.classList.add("hide")
}

function attachEventListeners() {
    indexInteractives.addCarBtn.addEventListener('click', goToAddCarPage);
    indexInteractives.brandClearBtn.addEventListener('click', clearBrand);
    indexInteractives.modelClearBtn.addEventListener('click', clearModel);
    indexInteractives.yearClearBtn.addEventListener('click', clearYear);

    indexInteractives.brandSearchBtn.addEventListener('click', searchForCars);
    indexInteractives.modelSearchBtn.addEventListener('click', searchForCars);
    indexInteractives.yearSearchBtn.addEventListener('click', searchForCars);

    indexInteractives.popupCardUpdateBtn.addEventListener('click', updateCar)
    indexInteractives.popupCardDeleteBtn.addEventListener('click', deleteCar)
    indexInteractives.popupCardCloseBtn.addEventListener('click', hidePopupCard)
}

function loadTestData() {
    indexService.loadTestDataImpl();
}

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
function loadAvailableCars() {
    let allCars = indexService.loadAllAvailableCarHtml(showPopupCard);
    populateCards(allCars);
}

function initialize() {
    loadTestData();
    loadAvailableCars();
    attachEventListeners();
}

window.onload = initialize;

window.addEventListener("pageshow", (event) => {
    loadAvailableCars();
});