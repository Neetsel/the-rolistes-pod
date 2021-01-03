import React from 'react';
// import  './style.css';

const Popup = (props) => {

    const google = "<iframe width='100%' height='100%' scrolling='no' src='https://eepurl.com/gJCUVX' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";

        
    return(
        <div className='popup'>
            <div className='popup_inner'>
                <h1> {this.props.text} </h1>
                <div dangerouslySetInnerHTML={{ __html: google ? google :""}}/>
                <button onClick={props.clicked}> close me </button>
            </div>
        </div>
    );

}

export default Popup;