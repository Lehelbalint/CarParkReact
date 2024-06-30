import { useEffect, useState } from "react";
import { Car } from "../../models";

export function useCarsList(id: string){
    const [isLoading, setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [carsList, setCarsList] = useState<Car[]>([]);

    async function DeleteCar(id: string){
        setIsLoading(true)
        try{
            const res = await fetch(`http://localhost:3019/car/${id}`,{
                method: 'DELETE',
              });
            if(res.ok){
          
                setIsError(false)
                console.log(res)

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
         DeleteCar(id)
     },[])

    return{
        carsList,isError,isLoading
    }
}