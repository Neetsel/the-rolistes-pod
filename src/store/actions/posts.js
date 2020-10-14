import * as actionTypes from './actionTypes';
import xmlData from '../../../assets/therolistespodcast.post.xml';


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
                                console.log(fetchedPosts[key]);
                            }
                            
                            // console.log(fetchedPosts);
                            // console.log(fetchedPosts.length);
                            // console.log(fetchedPosts[1]);
                            // console.log(fetchedPosts[2]["content:encoded"]);
                       
                       
                        }
                    )
            dispatch(fetchPostSuccess(posts));
    
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchPostFailed(error));
        });


        
        
       
    }
}    