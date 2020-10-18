import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    posts:[],
    news:[],
    podcast:[],
    gondo:[],
    loading: false,
};

const fetchPostsStart = (state, action) => {
    return updateObject(state, {loading: true}) 
};

const fetchPostsSuccess = (state, action) => {
    return updateObject(state,{
        posts: action.posts,
        news: action.news,
        podcast: action.podcast,
        gondo: action.gondo,
        loading: false
    });
};

const fetchPostsFailed = (state, action) => {
    return updateObject(state, {loading: false})  
};

const reducer = (state =initialState, action) => {
    
    switch (action.type){           

        case actionTypes.FETCH_POSTS_START:
            return fetchPostsStart(state, action); 

        case actionTypes.FETCH_POSTS_SUCCESS:      
            return fetchPostsSuccess(state, action); 

        case actionTypes.FETCH_POSTS_FAILED:
            return fetchPostsFailed(state, action); 

        default:
            return state;
    }
};

export default reducer;