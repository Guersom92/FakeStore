import { useContext } from "react"
import { FilterContext } from "../Context/FilterContext"

export const UseFilter=()=>{
const context =useContext(FilterContext)
if(!context)  {
        throw new Error("useFilter must be used within a FilterProvider");
    }

const {changeCategory,changeMaxPrice,filter,filterProducts}= context
return  {changeCategory,filter, changeMaxPrice,filterProducts}
}