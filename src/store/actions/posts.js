import * as actionTypes from './actionTypes';
import axios from 'axios';
import xmlData from '../../assets/therolistespodcast.xml';


export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
    }
};

export const fetchPostsSuccess = (posts, news, podcast, gondo) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts: posts,
        news: news,
        podcast: podcast,
        gondo: gondo
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
            const fetchedPosts = [];
            const fetchedNews = [];
            const fetchedPodcast = [];
            const fetchedGondo = [];

            parser.parseString(
                response.data,
                (err,result) => {
                    // console.log(result);
                    // console.log(result["rss"]["channel"][0]["item"][1]["category"].length);
                    // console.log(result["rss"]["channel"][0]["item"][1]["category"][0]["$"]);
                    // console.log(result["rss"]["channel"][0]["item"][1]["category"][0]["$"]["domain"]);
                    // console.log(result["rss"]["channel"][0]["item"][1]["category"][0]["$"]["nicename"]);

                    for (let key in result["rss"]["channel"][0]["item"]) {
                        
                        switch(result["rss"]["channel"][0]["item"][key]["wp:status"][0]){

                            case "publish": 
                                fetchedPosts.push({
                                ...result["rss"]["channel"][0]["item"][key],
                                id:key
                            });

                            // console.log(fetchedPosts[key].title[0]);

                        }                
                        
                        // console.log(result["rss"]["channel"][0]["item"][key]["category"]);

                        if(result["rss"]["channel"][0]["item"][key]["category"]){

                        
                            for (let i=0; i < result["rss"]["channel"][0]["item"][key]["category"].length; i++) {

                                
                                switch(result["rss"]["channel"][0]["item"][key]["category"][i]["$"]["nicename"]){

                                    case "news": 
                                        fetchedNews.push({
                                        ...result["rss"]["channel"][0]["item"][key],
                                        id:key                                                
                                        });
                                        break;

                                    case "podcast": 
                                        fetchedPodcast.push({
                                        ...result["rss"]["channel"][0]["item"][key],
                                        id:key                                                
                                        });
                                        break;

                                    case "paris-gondo": 
                                        fetchedGondo.push({
                                        ...result["rss"]["channel"][0]["item"][key],
                                        id:key                                                
                                        });
                                        break;

                                    // console.log(fetchedPosts[key].title[0]);

                                }

                            }
                                    
                        }
                            
                    }
                    
                    console.log(fetchedPosts);
                    console.log(fetchedNews);
                    console.log(fetchedPodcast);
                    console.log(fetchedGondo);
                    // console.log(fetchedPosts.length);
                    // console.log(fetchedPosts[1]);
                    //console.log(fetchedPosts[2]["content:encoded"][0]);
                
                
                }
            )
            
            dispatch(fetchPostsSuccess(fetchedPosts, fetchedNews, fetchedPodcast, fetchedGondo));
    
        })
        .catch(error => {
            console.log(error);
            dispatch(fetchPostsFailed(error));
        });


        
        
       
    }
}    