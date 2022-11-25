import React from "react";  
import '../styles/button.css'

export default function Button (props){  
    const buttonClass = (value) => (isNaN(value)) && (value !== '.'); 
    return( 
        <> 
        <div className={`${props.classButton} ${buttonClass(props.children)? props.classOperador :''.trim()}` } onClick={()=>props.eventFunction(props.children)}>{props.children}</div> 
        </>
    );
}