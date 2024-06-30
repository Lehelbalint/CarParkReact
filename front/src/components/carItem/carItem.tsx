import { useEffect, useState } from "react";
import { Car } from "../../models"
import "./carItem.css"
import { Button, Checkbox, Container } from "@mui/material";
import { AddShoppingCart, Delete, Favorite, FavoriteBorder, PageviewOutlined } from "@mui/icons-material";
import { useModalWindow } from "../state/useModalWindow";
import CarQuickViewModal from "./modalItem";


type Props = {
    car: Car
}
export default function CarItem({ car }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    const equipments = car.equipment.split(",");
    const openModal = useModalWindow((state) => state.openModal);
    //const addToBasket = useBasketStore((state) => state.addToBasket);
     
    const handleDelete = async (id: string) => {
            const res = await fetch(`http://localhost:3019/car/${id}`,{
                method: 'DELETE',
                
              });
              window.location.reload();
                console.log(res)
                
            }

    const handleAddToBasket = () => {
      //addToBasket(car);
      const basketCars = JSON.parse(localStorage.getItem('basketCars') || '[]');
      if (basketCars.some((Car: Car) => Car.vin === car.vin)) {
          console.log("already in basket");
      }
      else {
        basketCars.push(car)
        localStorage.setItem('basketCars', JSON.stringify(basketCars));
      }
    };

    useEffect(() => {
        const savedCars = JSON.parse(localStorage.getItem('savedCars') || '[]');
        if (savedCars.some((savedCar: Car) => savedCar.vin === car.vin)) {
            console.log(car.model)
            setIsChecked(true);
        }
    }, [car]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        const savedCars = JSON.parse(localStorage.getItem('savedCars') || '[]');
        
        if (e.target.checked) {
            savedCars.push(car);
        } else {
            const index = savedCars.findIndex((savedCar: Car) => savedCar.vin === car.vin);
            if (index !== -1) {
                savedCars.splice(index, 1);
            }
        }

        localStorage.setItem('savedCars', JSON.stringify(savedCars));
    };
    return (
        <div className="carItem">
            <div style={{ width:150, height: 150}}>
                <img src={`http://localhost:3019/img/${car.image}`} style={{ width: 150 , height: 150}}></img>
            </div>
            <Container className="details">
                <div className="row"><div className="label">Manufacturer: </div> {car.manufacturer}</div>
                <div className="row"><div className="label">Model: </div> {car.model}</div>
                <div className="row"><div className="label">Costruction Year: </div> {car.constructionYear}</div>
                <div className="row"><div className="label">Fuel Type: </div> {car.fuelType}</div>
                <div className="row"><div className="label">Engine size: </div> {car.engineSize}</div>
                <div className="row"><div className="label">Mileage: </div> {car.mileage}</div>
                <div className="row"><div className="label">Price: </div> {car.price}</div>

                </Container >
            <Container>
            <div style={{ flexDirection: "row"}}>
            <Checkbox checked={isChecked} style={{marginBottom:15}} onChange={handleCheckboxChange}  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <Delete onClick={ () => handleDelete(car.id)}/>
            </div>    
            <div className="AddToBasketButton">
            <Button style={{marginBottom: 5}} variant="outlined" onClick={handleAddToBasket} startIcon={<AddShoppingCart/>}>
            Add
            </Button>
            </div>
            <Button variant="outlined" onClick={() => openModal(car)} startIcon={<PageviewOutlined/>}>
                Quick View
            </Button>
            <CarQuickViewModal />
  
            </Container >
        </div>
    )
}