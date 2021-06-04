import React from 'react';
import appl from "./snake-food/appl.jpg";


export default (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return (
        <div className="snake-food" style={style}>   </div>
    )
}