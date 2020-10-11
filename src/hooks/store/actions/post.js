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
        
        axios.get('https://firebasestorage.googleapis.com/v0/b/the-rolistes-pod.appspot.com/o/therolistespodcast.post.xml?alt=media&token=278cc4b9-ac26-425e-8eb0-b7882c2d453d',{"Content-Type": "application/xml; charset=utf-8"})
            .then(res => {
                console.log(res.data);
                // dispatch(fetchPostSuccess());
            })
            .catch(err => {
                // dispatch(fetchPostFailed());
            });
    }
}
