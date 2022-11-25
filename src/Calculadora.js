
import React from 'react'; 
import Button from './componentes/button';
import './styles/calculadora.css';   
import { useState } from 'react';  
// hook que nos permite hacer el cambio de estado en componentes funcionales. 
import { evaluate } from 'mathjs';  
// libreria que nos permite evaluar una cadena de string como operacion matematica, hay que descargar esta como una dependencia externa, ya que js contiene su propia libreria para expresiones algebraicas

// componentes
import Pantalla from './componentes/pantalla'; 
import ButtonClear from './componentes/button-clear'; 
import Modal from './componentes/modal';

export default function Calculadora() {  
   const [numbers, setNumbers] = useState(''); 
   const [modal, setModal] = useState(false);   
   // generamos estado para manipular el renderizado del modal. 

   const input = (valores) =>{   
   setNumbers(numbers + valores);  
   // agregamos el valor anterior almacenado en la variable numbers, y concatenamos con el siguiente valor almacenado en la variable valores, de esta manera los numeros no se reemplazaran en la pantalla
   }  
   const clear = () =>{ 
      setNumbers(''); 
      // limpiamos el estado numbers con una cadena de texto vacia
   }
   const Resultado = () =>{   
   try{ 
      numbers? setNumbers(evaluate(numbers)):setModal(true);   
      // la funcion evaluate('operacion') nos evalua una cadena de string en formato de operacion aritmetica, si el string tiene una operacion la resuelve y nos devuelve el resultado si no nos devolvera un error. 
   }catch(err){  
      setModal(true);   
   } 
   // si numbers es un valor indefinido entonces añadimos el estado setModal en true lo que nos dejara renderizar el modal a traves de sus clases dinamicas.
   // si la validacion del estado que almacena la operacion no es valida nos manda el error al catch lo que nos permite modificar el comportamiento del error y en este caso renderizar el modal.
   } 
   const closeModal = (e) =>{  
      if(e.target.matches('.button-modal')){ 
         setModal(false);   
         clear(); 
      }
   } 
   // para cerrar el modal lo que hacemos es aplicarle un evento al modal, para luego delegarle ese evento al boton, lo que nos permite manipular el estado del modal, con el boton que este anida. 
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