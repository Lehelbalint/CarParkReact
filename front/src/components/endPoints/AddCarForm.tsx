import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Button, TextField } from "@mui/material";

function AddCarForm() {
    const [carData, setCarData] = useState({
      vin: '',
      image: '',
      manufacturer: '',
      model: '',
      constructionYear: '',
      mileage: '',
      engineSize: '',
      power: '',
      gearbox: '',
      fuelType: '',
      price: '',
      description: '',
      equipment: ''
    });
  
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
      const { name, value } = e.target;
      setCarData({
        ...carData,
        [name]: value
      });
    };
  
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3019/car', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(carData)
        });
  
        if (response.status === 201) {
          const newCar = await response.json();
          alert('Car added successfully');
          console.log('New Car:', newCar);
        } else {
          alert('Failed to add car');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
      }
    };
  
    return (
        <div className="carItem" >
                <div className="rowContainer">
                <div className="row"><div className="label">Vin: </div>
                <TextField  type="text" name="manufacturer"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Manufacturer: </div>
                    <TextField type="text"  name="manufacturer" onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Model: </div>
                    <TextField type="text"  name="model"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Construction Year: </div>
                    <TextField type="number" name="constructionYear"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Image: </div>
                    <TextField name="image"  onChange={handleInputChange} />
                </div>
                </div>

                <div className="rowContainer">
                <div className="row"><div className="label">Fuel Type: </div>
                    <TextField type="text"  name="fuelType"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Engine Size: </div>
                    <TextField type="number" name="engineSize" onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Gear Box: </div>
                <TextField type="text"  name="manufacturer"onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Mileage: </div>
                    <TextField  type="number" name="manufacturer"  onChange={handleInputChange} />
                </div>
                </div>


                <div className="rowContainer">
                <div className="row"><div className="label">Power: </div>
                    <TextField type="number" name="model"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Price: </div>
                    <TextField type="number" name="constructionYear"  onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Description: </div>
                    <TextField type="text" name="fuelType" onChange={handleInputChange} />
                </div>
                <div className="row"><div className="label">Equipment: </div>
                    <TextField type="text" name="engineSize"  onChange={handleInputChange} />
                </div>
                <div>
                <Button style={{alignSelf: "flex-end", marginTop:5}} variant="outlined" onClick={handleSubmit}>
                   Insert 
                </Button>
                </div>
                </div>
          
               
        </div>
    );
  }
  
  export default AddCarForm;