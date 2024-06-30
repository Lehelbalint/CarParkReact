import { ChangeEventHandler, SetStateAction } from "react";
import { Car } from "../../models";
import { Autocomplete, TextField } from "@mui/material";

const FuelTypeFilter = ({ fuelTypeFilter, setFuelTypeFilter, carsList }: {
    fuelTypeFilter: string,
    setFuelTypeFilter: (value: SetStateAction<string>) => void,
    carsList: Car[]
}) => {
    const fuelTypes = Array.from(new Set(carsList.map(car => car.fuelType)));

    const handleChange = (event: React.ChangeEvent<{}>, value: string | null) => {
      if (value !== null) {
        setFuelTypeFilter(value);
      }
    };
  
    return (
      <div className="filter">
        <Autocomplete
          disablePortal
          options={fuelTypes}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Fuel type" />}
          onChange={handleChange}
        />
      </div>
    );
  };
  
export default FuelTypeFilter