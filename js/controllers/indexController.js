import * as indexService from '../services/indexService.js';
import * as indexInteractives from '../interactives/indexInteractions.js'

function clearSearchBar(searchBarId) {
    let searchBar = document.getElementById(searchBarId);
    searchBar.value = "";
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

function attachEventListeners()
{
    indexInteractives.brandClearBtn.addEventListener('click', clearBrand);
    indexInteractives.modelClearBtn.addEventListener('click', clearModel);
    indexInteractives.yearClearBtn.addEventListener('click', clearYear);
}

function loadTestData() {
    indexService.loadTestDataImpl();
}

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
function loadAvailableCars() {
    let allCars = indexService.loadAllAvailableCarHtml();
    document.getElementById("main-content").appendChild(allCars)

}

function initialize()
{
    loadTestData();
    loadAvailableCars();
    attachEventListeners();
}

window.onload = initialize;