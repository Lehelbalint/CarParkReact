import { Key, useEffect, useState } from "react";
import { Car } from "../../models";
import BasketItem from "../carItem/basketCarItem";
import ErrorMessage from "../shared/ErrorMessage";
import { useBasketCarsList } from "../hooks/useBasketCarsList";



export default function BasketContent() {
    //const items = useBasketStore((state) => state.items);
    //const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
    const { savedcarsList, isLoading, isError } =useBasketCarsList();
    const [total, setTotal] = useState(0);
    // const handleRemoveFromBasket = (car: Car) => {
    //   removeFromBasket(car);
    // };
    const calculateTotal = () => {
        const newTotal = savedcarsList.reduce((acc, element) => acc + Number(element.price), 0);
        setTotal(newTotal);
    };
    
    useEffect(() => {
        calculateTotal();
    }, [savedcarsList]);
    
    if(!isLoading)
    return (

        <div>
        <h1>Basket</h1>
        <div className="carsList">
                {isError && <ErrorMessage />}
                {!isError && savedcarsList.map((car: Car, index: Key) => (
                    <div key={index}>
                        <BasketItem car={car} />
                    </div>
                ))}
            </div>
        <div>
            <div style={{ alignItems:"flex-end"}}>
            <h3>Total Price: {total}</h3>
            </div>
        </div>
      </div>
    )
    else 
    {
        return (
            <h1>Loading...</h1>
        )
    }
}


