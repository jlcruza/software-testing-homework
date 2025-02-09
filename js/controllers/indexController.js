import * as indexService from '../services/indexService.js';
import * as indexInteractives from '../interactives/indexInteractions.js'

function clearSearchBar(searchBarId) {
    let searchBar = document.getElementById(searchBarId);
    searchBar.value = "";
}

function clearBrand() {
    clearSearchBar("brand-searchbar");
    searchForCars();
}

function clearModel() {
    clearSearchBar("model-searchbar");
    searchForCars();
}

function clearYear() {
    clearSearchBar("year-searchbar");
    searchForCars();
}

function populateCards(carListHtml)
{
    let mainContent = document.getElementById("main-content");
    mainContent.replaceChildren(carListHtml);
}

function goToAddCarPage()
{
    window.location.href="./pages/addCar.html";
}

function showPopupCard(car)
{
    indexInteractives.popupCardHeader.innerText = car.brand;
    indexInteractives.popupCardText.innerText = car.year + " " + car.model;
    indexInteractives.popupCard.classList.remove("hide")
}

function searchForCars()
{
    let brand = indexInteractives.brandSearchBar.value;
    let model = indexInteractives.modelSearchBar.value;
    let year = indexInteractives.yearSearchBar.value;

    let allCars = indexService.loadSearchedCars(brand, model, year, showPopupCard);

    populateCards(allCars);
}

function hidePopupCard()
{
    indexInteractives.popupCard.classList.add("hide")
}

function attachEventListeners()
{
    indexInteractives.addCarBtn.addEventListener('click', goToAddCarPage);
    indexInteractives.brandClearBtn.addEventListener('click', clearBrand);
    indexInteractives.modelClearBtn.addEventListener('click', clearModel);
    indexInteractives.yearClearBtn.addEventListener('click', clearYear);

    indexInteractives.brandSearchBtn.addEventListener('click', searchForCars);
    indexInteractives.modelSearchBtn.addEventListener('click', searchForCars);
    indexInteractives.yearSearchBtn.addEventListener('click', searchForCars);

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

function initialize()
{
    loadTestData();
    loadAvailableCars();
    attachEventListeners();
}

window.onload = initialize;