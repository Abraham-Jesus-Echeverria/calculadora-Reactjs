import React from "react";  
import '../styles/modal.css'  
import Button from "./button";

export default function Modal ({title, text, classActive, closeModal}){   
    return( 
        <> 
        <div className={`background-modal ${classActive?'background-modal-active':''}`}> 
        {/* renderizado condicional, pasamos como propiedad un estado externo el valor de este se almacena en la varibale destructurada classActive y nos devuelve un true o false, este valor es evaluado atraves del operador ternario y este decide que calse agregar, dependiendo del valor en cuestion, las clases deberan tener propiedades css para renderizar o eliminar el componente */}
            <div className="card-modal">  
            <div className="card-content"> 
             <div className="card-header">   
                <h2 className="card-title">{title}</h2>  
                <i className="fa-solid fa-triangle-exclamation header-icon"></i>
             </div>
             <div className="card-body">  
                    <p className="card-text">{text}</p> 
                    <Button classButton='button-modal' eventFunction={closeModal} >salirXD</Button>
                    {/* ejecutamos la funcion closeModal que pasamos como propiedad a nuesto modal, esta funcion estara disponible para todos los elementos del modal esta funcion cambia el estado del modal, esto nos permite renderizar y borrar el modal */}
             </div>
            </div> 
            </div>
        </div> 
        </>
    ) 

}