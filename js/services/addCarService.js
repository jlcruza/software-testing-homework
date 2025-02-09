import * as car from '../dto/Car.js'
import * as carRepository from '../repositories/carRepository.js'
import * as idGenerator from '../utils/carIdUtil.js'

export function saveCarImpl(brand, model, year)
{
    let id = idGenerator.getId();
    let newCar = new car.Car(id, brand, model, year, "$19,999");

    carRepository.addCar(newCar);
}