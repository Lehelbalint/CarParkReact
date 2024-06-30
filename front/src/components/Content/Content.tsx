import AddCarForm from "../endPoints/AddCarForm"
import CarItem from "../carItem/carItem"
import FuelTypeFilter from "../filterItem/fuelTypeFilter"
import ManufacturerFilter from "../filterItem/manufacturerFilter"
import ModelFilter from "../filterItem/modelFilter"
import SearchBarItem from "../filterItem/searchBarItem"
import { useCarsList } from "../hooks/useCarList"
import { useFilteredCars } from "../hooks/useFilteredCar"
import { useFitsSearchBarValue } from "../hooks/useFitsSearchBarValue"
import ErrorMessage from "../shared/ErrorMessage"
import "./Content.css"
import {  useEffect, useState } from "react"
import { Button } from "@mui/material"

const Content = () => {
    const { carsList, isLoading, isError } = useCarsList();
    const [manufacturerFilter, setManufacturerFilter] = useState('');
    const [modelFilter, setModelFilter] = useState('');
    const [fuelTypeFilter, setFuelTypeFilter] = useState('');
    const [searchBarValue, setSearchBarValue] = useState('');
    const { filteredCars } = useFilteredCars(carsList, manufacturerFilter, modelFilter, fuelTypeFilter);
    const { searchBarCars, setSearchBarCars } = useFitsSearchBarValue(filteredCars, searchBarValue);
    const [sortOrder, setSortOrder] = useState('asc'); 

    const handleSortByPrice = async () => {
          const sortedCars = [...searchBarCars].sort((a, b) => {
              if (sortOrder === 'asc') {
                 return parseInt(a.price) - parseInt(b.price);
            } else {
                  return parseInt(b.price) - parseInt(a.price) ;
              }
          });
        setSearchBarCars(sortedCars);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };


    

    if (isLoading) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <>
            <div className="filters">
                <ManufacturerFilter
                    manufacturerFilter={manufacturerFilter}
                    setManufacturerFilter={setManufacturerFilter}
                    carsList={carsList}
                />
                <ModelFilter
                    modelFilter={modelFilter}
                    setModelFilter={setModelFilter}
                    carsList={carsList}
                />
                <FuelTypeFilter
                    fuelTypeFilter={fuelTypeFilter}
                    setFuelTypeFilter={setFuelTypeFilter}
                    carsList={carsList}
                />
                <Button onClick={handleSortByPrice}>Sort by Price ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})</Button>
            </div>
            <SearchBarItem
                searchBarValue={searchBarValue}
                setSearchBarValue={setSearchBarValue}
                filteredCars={filteredCars}
            />

            <div className="carsList">
                {isError && <ErrorMessage />}
                {!isError && searchBarCars.map((car, index) => (
                    <div key={index}>
                        <CarItem car={car} />
                    </div>
                ))}
            </div>
            <AddCarForm/>
        </>
    );
};

export default Content;