import React from 'react';  
import '../styles/button-clear.css'

const ButtonClear = (props) => <div className='buttonClear' onClick={props.clear}>ClearXD</div>  
// podemos usar arrow functions para hacer componentes funcionales, esto normalmente se hace cuando el componente es simple y se puede expresar en una sola linea de codigo

export default ButtonClear; 