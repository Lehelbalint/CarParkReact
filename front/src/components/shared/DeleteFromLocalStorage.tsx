import { Car } from "../../models";

export const handleRemoveFromBasket = (car: Car) => {
    const basketCars = JSON.parse(localStorage.getItem('basketCars') || '[]');
    const index = basketCars.findIndex((savedCar: Car) => savedCar.vin === car.vin);
    if (index !== -1) {
        basketCars.splice(index, 1);
    }
    localStorage.setItem('basketCars', JSON.stringify(basketCars));
    window.location.reload();
 };
