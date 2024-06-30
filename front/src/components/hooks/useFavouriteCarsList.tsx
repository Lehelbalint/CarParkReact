import { useEffect, useState } from "react";
import { Car } from "../../models";

export function useFavouriteCarsList(){
    const [isLoading, setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [savedcarsList, setCarsList] = useState<Car[]>([]);

    async function getCarList(){
        setIsLoading(true)

        try{
            const cars = JSON.parse(localStorage.getItem('savedCars') || '[]');
            //console.log (cars[0])
            if(cars){
          
                setIsError(false)
               // console.log(cars[0])
                //console.log(data[0])
                setCarsList(cars)

            }else
            {
                setIsError(true)
            }
        } catch (error: any)
        {
            setIsLoading(true)
        } finally
        {
            setIsLoading(false)
        }
    }

     useEffect(()=>{
         getCarList()
     },[])

    return{
        savedcarsList,isError,isLoading
    }
}