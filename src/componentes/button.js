import React from "react";  
import '../styles/button.css'

export default function Button (props){  
    const buttonClass = (value) => (isNaN(value)) && (value !== '.'); 
    return( 
        <> 
        <div className={`${props.classButton} ${buttonClass(props.children)? props.classOperador :''.trim()}` } onClick={()=>props.eventFunction(props.children)}>{props.children}</div>  
        {/* el objero children: es una propiedad en jsx que pasamos como una prop, esta propiedad hace referencia al contenido del componente, es decir que todo lo que pongamod dentro de las etiquetas de apertura y cierre del componete se almacenara dentro del objeto children */}
        </>
    );
}