import React from 'react'
import { Col } from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './FullPost.module.css';
import globalClasses from '../../App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Post = (props) => {

    const createYoutubeEmbed = (key) => {
        return '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + key + '" frameborder="0" allowfullscreen></iframe><br/>';
    };
      
    const transformYoutubeLinks = (text) => {
        if (!text) return text;
        const self = this;
        
        const linkreg = /(?:)<a([^>]+)>(.+?)<\/a>/g;
        const fullreg = /(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^& \n<]+)(?:[^ \n<]+)?/g;
        
        let resultHtml = text;  
        
        // get all the matches for youtube links using the first regex
        const match = text.match(fullreg);
        if (match && match.length > 0) {
            // get all links and put in placeholders
            const matchlinks = text.match(linkreg);
            if (matchlinks && matchlinks.length > 0) {
                for (var i=0; i < matchlinks.length; i++) {
                    resultHtml = resultHtml.replace(matchlinks[i], "#placeholder" + i + "#");
                }
            }
        
            // now go through the matches one by one
            for (var i=0; i < match.length; i++) {
            // get the key out of the match using the second regex
            let matchParts = match[i].split(regex);
            // replace the full match with the embedded youtube code
            resultHtml = resultHtml.replace(match[i], createYoutubeEmbed(matchParts[1]));
            }
        
            // ok now put our links back where the placeholders were.
            if (matchlinks && matchlinks.length > 0) {
                for (var i=0; i < matchlinks.length; i++) {
                    resultHtml = resultHtml.replace("#placeholder" + i + "#", matchlinks[i]);
                }
            }
        }
        return resultHtml;
    };

    const htmlContent = transformYoutubeLinks(props.content);

    return (
        
        <Col xs={12} className={globalClasses.no_padding_smallscreen}>
            <div className={globalClasses.item_box}>                
                <h1 className={[globalClasses.section_title, globalClasses.section_title_article].join(' ')}>{props.title}</h1>                    
                {/* <p>{props.author}</p> */}
                <div className={globalClasses.date_article}><FontAwesomeIcon icon={faCalendarAlt} aria-hidden="true"/> {props.date}</div>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className={classes.fullPost}/>     
            </div>                                   
        </Col>
    );
}

export default Post;
