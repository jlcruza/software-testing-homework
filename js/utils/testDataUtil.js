import * as car from '../dto/Car.js';
import * as idGenerator from './carIdUtil.js';

export function getTestData() {
    return [
        getHyundai(),
        getToyota(),
        getAudi(),
        getMazda()
    ];
}

function getHyundai() {
    return new car.Car(getId(), "Hyundai", "Kona", 2023, "$20,000");
}

function getToyota() {
    return new car.Car(getId(), "Toyota", "Corolla", 2022, "$25,000");
}

function getAudi() {
    return new car.Car(getId(), "Audi", "TT", 2025, "$40,000");
}

function getMazda() {
    return new car.Car(getId(), "Mazda", "CX-5", 2021, "$38,000");
}

function getId() {
    return idGenerator.getId();
}
