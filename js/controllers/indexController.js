import * as indexService from '../services/indexService.js';

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

function loadTestData() {
    indexService.loadTestDataImpl();
    loadAvailableCars();
}

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
function loadAvailableCars() {
    let allCars = indexService.loadAllAvailableCarHtml();
    document.getElementById("main-content").appendChild(allCars)

}

window.onload = loadTestData;