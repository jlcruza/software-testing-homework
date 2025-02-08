import * as car from '../dto/Car';
import * as idGenerator from './carIdUtil';

export function getTestData() {
    return [
        getHyundai(),
        getToyota(),
        getAudi(),
        getMazda()
    ];
}

function getHyundai() {
    return new car.Car(getId(), "Hyundai", "Kona", 2023, 20000);
}

function getToyota() {
    return new car.Car(getId(), "Toyota", "Corolla", 2022, 25000);
}

function getAudi() {
    return new car.Car(getId(), "Audi", "TT", 2025, 40000);
}

function getMazda() {
    return new car.Car(getId(), "Mazda", "CX-5", 2021, 38000);
}

function getId() {
    return idGenerator.getId();
}
