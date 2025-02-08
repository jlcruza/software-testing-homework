import * as carRepository from '../repositories/carRepository.js';
import * as htmlCard from '../utils/generateHtmlCard.js';
import * as htmlColumn from '../utils/generateHtmlColumn.js';
import * as testData from '../utils/testDataUtil.js'

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

    for(let i = 0; i< carList.length; i++)
    {
        let column = htmlColumn.getColumn();
        column.appendChild(htmlCard.getCard(carList[i]));

        row.appendChild(column);
    }

    return row;
}