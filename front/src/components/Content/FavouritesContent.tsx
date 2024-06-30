import CarItem from "../carItem/carItem"
import { useCarsList } from "../hooks/useCarList"
import { useFavouriteCarsList } from "../hooks/useFavouriteCarsList";
import ErrorMessage from "../shared/ErrorMessage"
import "./Content.css"


const FavouritesContent = () => {
    const { savedcarsList, isLoading, isError } = useFavouriteCarsList();
    //console.log(savedcarsList.length)

    if (isLoading) {
        return <div><h1>Loading...</h1></div>;
    }
    return (
        <>
            <div className="carsList">
                {isError && <ErrorMessage />}
                {!isError && savedcarsList.map((car, index) => (
                    <div key={index}>
                        <CarItem car={car} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default FavouritesContent;