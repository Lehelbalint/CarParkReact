import { Autocomplete, TextField } from "@mui/material";
import { SetStateAction } from "react";

const ModelFilter = ({ modelFilter, setModelFilter,carsList }: {
    modelFilter: string,
    setModelFilter: (value: SetStateAction<string>) => void,
    carsList: any[]
}) => {
    const models = Array.from(new Set(carsList.map(car => car.model)));
    const handleChange = (event: React.ChangeEvent<{}>, value: string | null) => {
        if (value !== null) {
          setModelFilter(value);
        }
      };
    
      return (
        <div className="filter">
          <Autocomplete
            disablePortal
            options={models}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Model" />}
            onChange={handleChange}
          />
        </div>
      );
    };
    

export default ModelFilter