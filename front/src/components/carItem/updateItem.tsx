import { useEffect, useState } from "react";
import { Car } from "../../models"
import "./carItem.css"
import { Button, Container, TextField } from "@mui/material";


type Props = {
    car: Car;
};

export default function UpdateItem({ car }: Props) {
    const [editableCar, setEditableCar] = useState(car);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditableCar({ ...editableCar, [name]: value });
    };

    const handleUpdate = async () => {
        const res = await fetch(`http://localhost:3019/car/${editableCar.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editableCar),
        });

        if (res.ok) {
            const updatedCar = await res.json();
            setEditableCar(updatedCar);;
        } else {
            console.log('Failed to update car');
        }
    };

    return (
        
        <div className="carItem" >
                <div className="rowContainer">
                <div className="row"><div className="label">Vin: </div>
                <TextField name="manufacturer" value={editableCar.vin} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Manufacturer: </div>
                    <TextField name="manufacturer" value={editableCar.manufacturer} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Model: </div>
                    <TextField name="model" value={editableCar.model} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Construction Year: </div>
                    <TextField name="constructionYear" value={editableCar.constructionYear} onChange={handleInputChange} />
                </div>
                </div>

                <div className="rowContainer">
                <div className="row"><div className="label">Fuel Type: </div>
                    <TextField name="fuelType" value={editableCar.fuelType} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Engine Size: </div>
                    <TextField name="engineSize" value={editableCar.engineSize} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Gear Box: </div>
                <TextField name="manufacturer" value={editableCar.gearbox} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Mileage: </div>
                    <TextField name="manufacturer" value={editableCar.mileage} onChange={handleInputChange} />
                </div>
                </div>


                <div className="rowContainer">
                <div className="row"><div className="label">Power: </div>
                    <TextField name="model" value={editableCar.power} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Price: </div>
                    <TextField name="constructionYear" value={editableCar.price} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Description: </div>
                    <TextField name="fuelType" value={editableCar.description} onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Equipment: </div>
                    <TextField name="engineSize" value={editableCar.equipment} onChange={handleInputChange} />
                </div>
                </div>

                <Button variant="outlined" onClick={handleUpdate}>
                    Update
                </Button>
        </div>
    );
}