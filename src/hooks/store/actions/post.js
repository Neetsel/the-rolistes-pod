import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchPostStart = () => {
    return {
        type: actionTypes.FETCH_POST_START,
    }
};

export const fetchPostSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POST_SUCCESS,
        posts: posts
    }
};

export const fetchPostFailed = (posts) => {
    return {
        type: actionTypes.FETCH_POST_FAILED,
        posts: posts
    }
};

export const fetchPosts = (token) => {

    return dispatch => {
        dispatch(fetchPostStart());
        // const queryParams = 
        // axios.get
    }
}
