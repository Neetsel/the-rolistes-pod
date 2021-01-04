import React from 'react';
import classes from './Popup.module.css';

const Popup = (props) => {

    const google = "<iframe width='100%' height='100%' src='https://eepurl.com/gJCUVX' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";
        
    return(
        <div className={classes.popup}>
            <div className={classes.popup_inner}>
                <h1> {props.text} </h1>
                <iframe width='100%' height='100%' src='https://eepurl.com/gJCUVX' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>
                <button onClick={props.clicked}> close me </button>                
            </div>
        </div>
    );

}

export default Popup;