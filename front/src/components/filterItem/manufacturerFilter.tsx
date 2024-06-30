import { Autocomplete, TextField } from "@mui/material";
import { SetStateAction } from "react";

const ManufacturerFilter = ({ manufacturerFilter, setManufacturerFilter, carsList }: {
    manufacturerFilter: string,
    setManufacturerFilter: (value: SetStateAction<string>) => void,
    carsList: any[]
}) => {
    const manufacturers = Array.from(new Set(carsList.map(car => car.manufacturer)));

    const handleManufacturerChange = (event: any, value: SetStateAction<string>) => {
        setManufacturerFilter(value);
      };

    return (
        <div className="filter">
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={manufacturers}
            sx={{ width: 300 }}
            onChange={handleManufacturerChange}
            renderInput={(params) => <TextField {...params} label="Manufacturer"
        />}
        />
        </div>
    );
};

export default ManufacturerFilter