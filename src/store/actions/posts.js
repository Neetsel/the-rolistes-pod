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
        gondo: gondo,
        loaded: true
    }
};

export const fetchPostsFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED,
        error: error
    }
};

export const setCurrentPageNews = (pageNumber) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE_NEWS,
        currentPageNews: pageNumber
    
    }
}

export const setCurrentPagePodcast = (pageNumber) => {
    return {
        type: actionTypes.SET_CURRENT_PAGE_PODCAST,
        currentPagePodcast: pageNumber    
    }
}

export const setCurrentCategoryPodcast = (category) => {
    return {
        type: actionTypes.SET_CURRENT_CATEGORY_PODCAST,
        currentCategoryPodcast: category    
    }
}

export const setCurrentCategorySize = (size) => {
    return {
        type: actionTypes.SET_CURRENT_CATEGORY_SIZE,
        currentCategorySize: size    
    }
}

export const fetchPosts = () => {

    return dispatch => {
        dispatch(fetchPostsStart());
          
        
        axios.get(xmlData, {
            "Content-Type": "application/xml; charset=utf-8"
            })
        .then((response) => {
                
            let xml2js = require('xml2js');
            let parser = new xml2js.Parser();
            
            const fetchedPosts = [];
            const fetchedNews = [];
            const fetchedPodcast = [];
            const fetchedGondo = [];

            parser.parseString(
                response.data,
                (err,result) => {

                    for (let key in result["rss"]["channel"][0]["item"]) {                           
                        
                        fetchedPosts.push({
                            ...result["rss"]["channel"][0]["item"][key],
                            id:key
                        });
                        console.log('test') ;           
                        const currentDate = new Date();
                        const publishDate = new Date(fetchedPosts[key]["pubDate"][0]);                       

                        fetchedPosts[key]["pubDate"][0] = publishDate.toDateString();;

                        let str= fetchedPosts[key]["content:encoded"][0];
                        let newStr= str.replace(/\[audio/,'<audio controls');
                        newStr= newStr.replace(/mp3\"\]/,'mp3"></audio><br>');
                        
                        fetchedPosts[key]["content:encoded"][0] = newStr;                        
                        
                        if(fetchedPosts[key]["category"] && (
                            fetchedPosts[key]["wp:status"][0] === "publish" || (
                                fetchedPosts[key]["wp:status"][0] === "future" && currentDate.getTime() > publishDate.getTime()
                                )
                            )
                        ){

                            for (let i=0; i < fetchedPosts[key]["category"].length; i++) {
                                
                                switch(fetchedPosts[key]["category"][i]["$"]["nicename"]){

                                    case "news": 
                                        fetchedNews.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });
                                        
                                        
                                        break;

                                    case "podcast": 
                                        fetchedPodcast.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });

                                        break;

                                    case "paris-gondo": 
                                        fetchedGondo.push({
                                        ...fetchedPosts[key],
                                        id:key                                                
                                        });
                                        break;
                                }
                            }                                    
                        }                            
                    }
                
                    fetchedPodcast.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedNews.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    fetchedGondo.sort((a,b)=>{
                        return new Date(b["pubDate"][0]) - new Date(a["pubDate"][0]) 
                    });

                    // fetchedPodcast = sortPosts(fetchedPodcast);
                    // fetchedNews = sortPosts(fetchedNews);
                    // fetchedGondo = sortPosts(fetchedGondo);
                    
                    console.log(fetchedPosts);
                    console.log(fetchedNews);
                    console.log(fetchedPodcast);
                    console.log(fetchedGondo);                       
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