import React from "react";  
import '../styles/modal.css'  
import Button from "./button";

export default function Modal ({title, text, classActive, closeModal}){   
    return( 
        <> 
        <div className={`background-modal ${classActive?'background-modal-active':''}`}> 
            <div className="card-modal" onClick={closeModal}>  
            <div className="card-content"> 
             <div className="card-header">   
                <h2 className="card-title">{title}</h2>  
                <i className="fa-solid fa-triangle-exclamation header-icon"></i>
             </div>
             <div className="card-body">  
                    <p className="card-text">{text}</p> 
                    <Button classButton='button-modal' eventFunction={()=>null} >salirXD</Button>
             </div>
            </div> 
            </div>
        </div> 
        </>
    ) 

}