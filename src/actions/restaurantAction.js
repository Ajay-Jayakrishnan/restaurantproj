import {RESTAURANT_lIST_SUCCESS,RESTAURANT_lIST_FAIL} from '../constants/restaurantConstants'
import axios from "axios";
export const listRestaurants = () =>async(dispatch)=>{

try{
    const {data} = axios.get('/restaurant.json')
   dispatch(
    {
        type:RESTAURANT_lIST_SUCCESS,payload:data.restaurants
    }
   )
}
catch(error){
    dispatch(
        {
            type:RESTAURANT_lIST_FAIL,payload:error
        }
    )
}


}

