import { useEffect, useState } from "react";
import { Car } from "../../models";

export const useFitsSearchBarValue = (filteredCars: Car[], searchBarValue: string) => {
    const [searchBarCars, setSearchBarCars] = useState<Car[]>([]);
    useEffect(() => {
        const filtered = filteredCars.filter(car => {
            return car.manufacturer.toLowerCase().includes(searchBarValue.toLowerCase()) || 
            car.model.toLowerCase().includes(searchBarValue.toLowerCase())})
        //console.log(filtered.length)
        setSearchBarCars(filtered);
        //console.log(searchBarValue)
    }, [filteredCars,searchBarValue]);

    return { searchBarCars, setSearchBarCars};
};

