import {RESTAURANT_lIST_SUCCESS,RESTAURANT_lIST_FAIL} from '../constants/restaurantConstants'
export const restaurantListReducer =(state = {restaurant:[]},action) =>{
     switch(action.type){
        case RESTAURANT_lIST_SUCCESS:
            return {restaurant:action.payload}
            case RESTAURANT_lIST_FAIL:
            return {restaurant:action.errror}
            default:
                return state
     }
}