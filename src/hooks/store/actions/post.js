import * as actionTypes from './actionTypes';


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

export const fetchPostFailed = (error) => {
    return {
        type: actionTypes.FETCH_POST_FAILED,
        error: error
    }
};

export const fetchPosts = (token) => {

    return dispatch => {
        dispatch(fetchPostStart());
        
        // let parser = new xml2js.Parser();
        // parser.parseString


        
       
    }
}
