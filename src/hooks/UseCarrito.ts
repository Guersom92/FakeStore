import { useContext } from "react"
import { CarritoContext } from "../Context/CarritoContext"

export const useCarrito=()=>{
    const context=useContext(CarritoContext)
    if(!context){ throw new Error("useCarrito must be used within a CarritoProvider");}

    return context
}