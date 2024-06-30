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
import UpdateItem from "../carItem/updateItem"

const UpdateContent = () => {
    const { carsList, isLoading, isError } = useCarsList();

    if (isLoading) {
        return <div><h1>Loading...</h1></div>;
    }

    return (
        <>
            <div className="carsList">
                {isError && <ErrorMessage />}
                {!isError && carsList.map((car, index) => (
                    <div key={index}>
                        <UpdateItem car={car} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default UpdateContent;