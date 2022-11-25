
import React from 'react'; 
import Button from './componentes/button';
import './styles/calculadora.css';   
import { useState } from 'react'; 
import { evaluate } from 'mathjs'; 

// componentes
import Pantalla from './componentes/pantalla'; 
import ButtonClear from './componentes/button-clear'; 
import Modal from './componentes/modal';

export default function Calculadora() {  
   const [numbers, setNumbers] = useState(''); 
   const [modal, setModal] = useState(false);  

   const input = (valores) =>{   
   setNumbers(numbers + valores);  
   // agregamos el valor anterior almacenado en la variable numbers, y concatenamos con el siguiente valor almacenado en la variable valores, de esta manera los numeros no se reemplazaran en la pantalla
   }  
   const clear = () =>{ 
      setNumbers(''); 
   }
   const Resultado = () =>{   
   try{ 
      numbers? setNumbers(evaluate(numbers)):setModal(true);  
   }catch(err){  
      setModal(true);   
   }
   } 
   const closeModal = (e) =>{  
      if(e.target.matches('.button-modal')){ 
         setModal(false);   
         clear(); 
      }
   }
  return ( 
   <>  
   <Modal title='¡Lo sentimos ha ocurrido un error!' text='Por favor ingresa una operacion aritmetica valida' classActive ={modal} closeModal={closeModal}/>
   
   <div className='container-calculadora'>   
    <Pantalla Contenido={numbers} /> 
   <div className='row'> 
      <Button eventFunction = {input} classButton='button'>1</Button>
      <Button eventFunction = {input} classButton='button' >2</Button>
      <Button eventFunction = {input} classButton='button' >3</Button>
      <Button eventFunction = {input} classButton='button' classOperador='button-operador' >+</Button>  
   </div> 
   <div className='row'> 
      <Button eventFunction = {input} classButton='button' >4</Button> 
      <Button eventFunction = {input} classButton='button' >5</Button>
      <Button eventFunction = {input} classButton='button' >6</Button>
      <Button eventFunction = {input} classButton='button' classOperador='button-operador' >-</Button>
   </div> 
   <div className='row'> 
      <Button eventFunction = {input} classButton='button' >7</Button> 
      <Button eventFunction = {input} classButton='button' >8</Button>
      <Button eventFunction = {input} classButton='button' >9</Button>
      <Button eventFunction = {input} classButton='button' classOperador='button-operador' >*</Button>
    </div> 
   <div className='row'>  
      <Button eventFunction = {Resultado} classButton='button' classOperador='button-operador'>=</Button> 
      <Button eventFunction = {input} classButton='button'>0</Button>
      <Button eventFunction = {input} classButton='button'>.</Button>
      <Button eventFunction = {input} classButton='button' classOperador='button-operador' >/</Button> 
   </div> 
   <ButtonClear clear ={clear}/>
   </div> 
   </>
  );
}