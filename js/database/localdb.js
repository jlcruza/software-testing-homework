/* Expected structure
[
    {
        ... car 1's properties
    },
    {
        ... car 2's properties
    }
]
*/

const SESSION_STORAGE_KEY = "savedCars";
const EMPTY_CAR_LIST = {
    ROOT_JSON_KEY : []
}

/** 
Returns cars saved in sessionStorage
@returns json with saved cars
*/
export function getSavedCars() {
    let savedCarsStr = sessionStorage.getItem(SESSION_STORAGE_KEY);
    let savedCars = ((savedCarsStr == null) ? EMPTY_CAR_LIST: JSON.parse(savedCarsStr));
    return savedCars;
}

/** 
Save cars in sessionStorage
@params json with cars to save
*/
export function saveCars(cars)
{
    let carsStr = JSON.stringify(cars)
    sessionStorage.setItem(SESSION_STORAGE_KEY, carsStr)
}