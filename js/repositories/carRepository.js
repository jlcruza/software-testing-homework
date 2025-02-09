import * as localdb from '../database/localdb.js';
import * as car from '../dto/Car.js'

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
export function getAllCars() {
    return localdb.getSavedCars();
}

/** 
Retrives the car that has the specified id. 
@returns car with id, if found. 
*/
export function getCarById(carId) {
    let allCars = localdb.getSavedCars();

    for (let i = 0; i < allCars.length; i++) {
        if (allCars[i].id == carId) {
            return allCars[i];
        }
    }

    return new car.Car("", "", "", "", "");
}

/** 
Overwrites saved cars with new list
@returns json with saved cars
*/
export function overWriteCarList(carList) {
    localdb.saveCars(carList);
}

/** 
Adds a new car in sessionStorage
@returns json with saved cars
*/
export function addCar(newCar) {
    let allCars = getAllCars();
    let doCarExists = false;

    for (let i = 0; i < allCars.length; i++) {
        if (newCar.id == allCars[i].id) {
            doCarExists = true;
        }
    }

    if (doCarExists)
        return;

    allCars.push(newCar);
    localdb.saveCars(allCars);
}