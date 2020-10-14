import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    posts:[],
    loading: false,
};

const fetchOrdersStart = (state, action) => {
    return updateObject(state, {loading: true}) 
};

const fetchOrdersSuccess = (state, action) => {
    return updateObject(state,{
        posts: action.posts,
        loading: false
    });
};

const fetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false})  
};

const reducer = (state =initialState, action) => {
    
    switch (action.type){           

        case actionTypes.FETCH_ORDERS_START:
            return fetchOrdersStart(state, action); 

        case actionTypes.FETCH_ORDERS_SUCCESS:      
            return fetchOrdersSuccess(state, action); 

        case actionTypes.FETCH_ORDERS_FAIL:
            return fetchOrdersFail(state, action); 

        default:
            return state;
    }
};

export default reducer;