import React from 'react';
import './Card.css'
function Card(props){
    const classes='card '+props.className; // or const classes='card'+' '+props.className space must be given after 'card'
    return <div className={classes}>{props.children}</div>
}

export default Card;