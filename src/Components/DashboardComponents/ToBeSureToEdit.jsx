import React from "react"
import FLoatingModal from './FloatingModal.jsx';
export default function ToBeSureToEdit({editIsOpen,  setEditProd, setEditIsOpen}){


    function handleClick (value){
        setEditProd(value);
        setEditIsOpen(false);
        
    }
    return (
        <FLoatingModal isOpen={editIsOpen} setIsOpen={ () => {}}>
            <div className="delete-warning">
                <h4 className="delete-message">Once data is deleted, it cannot be recovered ⚠️</h4>
                <h4 className="delete-message" style={{color:"black "}}>Delete the product?</h4>
                <div>
                    <button 
                        className="no"
                        onClick={() =>handleClick(false)}
                    >No</button>
                    <button 
                        className="yes"
                        onClick={() =>handleClick(true)}
                    >yes</button>
                </div>
            </div>
        </FLoatingModal>
    )
}