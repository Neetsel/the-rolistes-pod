import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';


const initialState = {
    posts:[],
    news:[],
    podcast:[],
    gondo:[],
    loading: false,
    loaded: false,
    currentPageNews: 1,
    currentPagePodcast: 1,
    currentCategoryPodcast: "podcast"
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
        loading: false,
        loaded: true
    });
};

const fetchPostsFailed = (state, action) => {
    return updateObject(state, {loading: false})  
};

const setCurrentPageNews = (state, action) => {
    return updateObject(state,{
        currentPageNews: action.currentPageNews
    });
};

const setCurrentPagePodcast = (state, action) => {
    return updateObject(state,{
        currentPagePodcast: action.currentPagePodcast
    });
};

const setCurrentCategoryPodcast = (state, action) => {
    return updateObject(state,{
        currentCategoryPodcast: action.currentCategoryPodcast
    });
};



const reducer = (state =initialState, action) => {
    
    switch (action.type){           

        case actionTypes.FETCH_POSTS_START:
            return fetchPostsStart(state, action); 

        case actionTypes.FETCH_POSTS_SUCCESS:      
            return fetchPostsSuccess(state, action); 

        case actionTypes.FETCH_POSTS_FAILED:
            return fetchPostsFailed(state, action); 

        case actionTypes.SET_CURRENT_PAGE_NEWS:
            return setCurrentPageNews(state, action); 

        case actionTypes.SET_CURRENT_PAGE_PODCAST:
            return setCurrentPagePodcast(state, action); 

        case actionTypes.SET_CURRENT_CATEGORY_PODCAST:
            return setCurrentCategoryPodcast(state, action); 

        default:
            return state;
    }
};

export default reducer;