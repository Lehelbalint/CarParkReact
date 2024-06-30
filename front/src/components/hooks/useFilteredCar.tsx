import { useEffect, useState } from "react";
import { Car } from "../../models";

export const useFilteredCars = (carsList: Car[], manufacturerFilter: string, modelFilter: string, fuelTypeFilter: string) => {
    const [filteredCars, setFilteredCars] = useState<Car[]>([]);


    useEffect(() => {
        const filtered = carsList.filter(car => {
            const matchesManufacturer = manufacturerFilter ? car.manufacturer.toLowerCase() === manufacturerFilter.toLowerCase() : true;
            const matchesModel = modelFilter ? car.model.toLowerCase() === modelFilter.toLowerCase() : true;
            const matchesFuelType = fuelTypeFilter ? car.fuelType.toLowerCase() === fuelTypeFilter.toLowerCase() : true;
            return matchesManufacturer && matchesModel && matchesFuelType;
        });
        setFilteredCars(filtered);
    }, [carsList, manufacturerFilter, modelFilter, fuelTypeFilter]);

    return { filteredCars};
};