import React from "react";  
import '../styles/modal.css'  
import Button from "./button";

export default function Modal ({title, text, classActive, closeModal}){   
    return( 
        <> 
        <div className={`background-modal ${classActive?'background-modal-active':''}`}> 
        {/* renderizado condicional, pasamos como propiedad un estado externo el valor de este se almacena en la varibale destructurada classActive y nos devuelve un true o false, este valor es evaluado atraves del operador ternario y este decide que calse agregar, dependiendo del valor en cuestion, las clases deberan tener propiedades css para renderizar o eliminar el componente */}
            <div className="card-modal" onClick={closeModal}>  
            <div className="card-content"> 
             <div className="card-header">   
                <h2 className="card-title">{title}</h2>  
                <i className="fa-solid fa-triangle-exclamation header-icon"></i>
             </div>
             <div className="card-body">  
                    <p className="card-text">{text}</p> 
                    <Button classButton='button-modal' eventFunction={()=>null} >salirXD</Button>
                    {/* enviamos una funcion que nos retorna un valor nulificado ya que el evento lo esta disparando el modal y se lo estamos delegando al boton, por lo cual para evitar conflictos, mandamos un null al evento del boton para nulificarlo */}
             </div>
            </div> 
            </div>
        </div> 
        </>
    ) 

}