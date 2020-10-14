import * as actionTypes from './actionTypes';
import axios from 'axios';
import xmlData from '../../assets/therolistespodcast.xml';


export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
    }
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts
    }
};

export const fetchPostsFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        error: error
    }
};

export const fetchPosts = () => {

    return dispatch => {
        dispatch(fetchPostsStart());
          
        
        axios.get(xmlData, {
            "Content-Type": "application/xml; charset=utf-8"
            })
        .then((response) => {
            console.log('Your xml file as string', response.data);
    
            let xml2js = require('xml2js');
            let parser = new xml2js.Parser();
                    parser.parseString(
                        response.data,
                        (err,result) => {
                            console.log(result);
                            const fetchedPosts = [];

                            for (let key in result["rss"]["channel"][0]["item"]) {
                                fetchedPosts.push({
                                    ...result["rss"]["channel"][0]["item"][key],
                                    id:key
                                });
                                console.log(fetchedPosts[key].title);
                            }
                            
                            // console.log(fetchedPosts);
                            // console.log(fetchedPosts.length);
                            // console.log(fetchedPosts[1]);
                            // console.log(fetchedPosts[2]["content:encoded"]);
                       
                       
                        }
                    )
            dispatch(fetchPostsSuccess());
    
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchPostsFailed(error));
        });


        
        
       
    }
}    