import axios from "axios";

export const getAll= async()=>{
    const response = await axios.get("https://dummyjson.com/products")    
    return response.data
}

