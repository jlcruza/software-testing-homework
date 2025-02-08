import * as carRepository from '../repositories/carRepository';
import * as htmlCard from '../utils/generateHtmlCard';
import * as htmlColumn from '../utils/generateHtmlColumn';
import * as testData from '../utils/testDataUtil'

export function loadTestDataImpl()
{
    let carList = testData.getTestData();
    saveCarsImpl(carList);
}

export function saveCarsImpl(cars)
{
    carRepository.overWriteCarList(cars);
}

export function loadAllAvailableCarHtml()
{
    let carList = carRepository.getAllCars();
    let row = htmlColumn.getRow();

    for(car in carList)
    {
        let column = htmlColumn.getColumn();
        column.appendChild(htmlCard.getCard(car));

        row.appendChild(column);
    }

    return row;
}