import * as localdb from '../database/localdb';

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
export function getAllCars() {
    return localdb.getSavedCars();
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

    for (car in allCars) {
        if (newCar.id == car.id) {
            doCarExists = true;
        }
    }

    if (doCarExists)
        return;

    allCars.push(car);

    localdb.saveCars(allCars);
}