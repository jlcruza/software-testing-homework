import * as carRepository from '../repositories/carRepository.js';
import * as htmlCard from '../utils/generateHtmlCard.js';
import * as htmlColumn from '../utils/generateHtmlColumn.js';
import * as testData from '../utils/testDataUtil.js'

export function loadTestDataImpl() {
    let carList = testData.getTestData();
    saveCarsImpl(carList);
}

export function saveCarsImpl(cars) {
    carRepository.overWriteCarList(cars);
}

function carToCards(carList, showPopupCard) {
    let row = htmlColumn.getRow();

    for (let i = 0; i < carList.length; i++) {
        let column = htmlColumn.getColumn();
        column.appendChild(htmlCard.getCard(carList[i], showPopupCard));

        row.appendChild(column);
    }

    return row;
}

export function loadAllAvailableCarHtml(showPopupCard) {
    let carList = carRepository.getAllCars();
    return carToCards(carList, showPopupCard);
}

export function loadSearchedCars(brand, model, year, showPopupCard) {
    let filterByBrand = (brand != null && brand != "");
    let filterByModel = (model != null && model != "");
    let filterByYear = (year != null && year != "");

    let carListAll = carRepository.getAllCars();
    let carListFiltered = [];

    for (let i = 0; i < carListAll.length; i++) {
        let currentCar = carListAll[i];

        if (filterByBrand && !currentCar.brand.toUpperCase().startsWith(brand.toUpperCase())) {
            continue;
        }

        if (filterByModel && !currentCar.model.toUpperCase().startsWith(model.toUpperCase())) {
            continue;
        }

        if (filterByYear && currentCar.year != year) {
            continue;
        }

        carListFiltered.push(currentCar);
    }
    return carToCards(carListFiltered, showPopupCard);
}