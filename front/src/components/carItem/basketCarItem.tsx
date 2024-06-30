import { useEffect, useState } from "react";
import { Car } from "../../models"
import "./carItem.css"
import { handleRemoveFromBasket } from "../shared/DeleteFromLocalStorage";

type Props = {
    car: Car
}
export default function BasketItem({ car }: Props) {
    const equipments = car.equipment.split(",");
    return (
        <div className="carItem">
            <div className="imageContainer">
                <img src={`http://localhost:3019/img/${car.image}`} className="carImage"></img>
            </div>
            <div className="details">
                <div className="row"><div className="label">Manufacturer: </div> {car.manufacturer}</div>
                <div className="row"><div className="label">Model: </div> {car.model}</div>
                <div className="row"><div className="label">Costruction Year: </div> {car.constructionYear}</div>
                <div className="row"><div className="label">Fuel Type: </div> {car.fuelType}</div>
                <div className="row"><div className="label">Engine size: </div> {car.engineSize}</div>
                <div className="row"><div className="label">Description: </div> {car.description}</div>
                <div className="row"><div className="label">GearBoc: </div> {car.gearbox}</div>
                <div className="row"><div className="label">Mileage: </div> {car.mileage}</div>
                <div className="row"><div className="label">Power: </div> {car.power}</div>
                <div className="row"><div className="label">Vin: </div> {car.vin}</div>
                <br/>
                <div className="row">
                    <div className="label">Equipments:</div>
                    <div className="row">
                        <ul className="list">
                            {equipments.map((equipment, index) => {
                                return <li key={index}>{equipment} </li>
                            }
                            )}
                        </ul>
                    </div>
                </div>
                <button onClick={() => handleRemoveFromBasket(car)}>Remove</button>                 
            </div>
          
            <div className="price"> Price: {car.price} EUR</div>
        </div>
    )
}