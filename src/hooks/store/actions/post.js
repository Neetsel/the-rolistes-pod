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
              
              let parser = new xml2js.Parser();
              parser.parseString(
                  response.data,
                  (err,result) => {
                      console.log(result);
                  }
              )
              
              const posts = [];
              dispatch(fetchPostSuccess(posts));
              
            })
            .catch(error => {
              console.log(error);
              dispatch(fetchPostFailed(error));
            });
        
        
       
    }
}
