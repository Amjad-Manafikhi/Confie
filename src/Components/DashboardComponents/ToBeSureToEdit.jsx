import React from "react"
import FLoatingModal from './FloatingModal.jsx';
export default function ToBeSureToEdit({editIsOpen,  setEditProd, setEditIsOpen, newProdValues, setNewProdValues, setIsOpen}){



   
        function changeProdValues(event) {
            
            setNewProdValues(prev => ({
                ...prev,
                [event.target.id]: event.target.value
            }));
        }
    
        function submitProduct(event) {
            event.preventDefault();
            setEditProd(true)
            setEditIsOpen(false);
    
            
        }
       
    return (
        <FLoatingModal isOpen={editIsOpen} setIsOpen={setIsOpen}>

    
                <form 
                    name="addProds" 
                    className="add-prods"
                    onSubmit={submitProduct} 
                >
                    <h2>Add Product</h2>
                    <label htmlFor="name">name</label>
                    <input value={newProdValues.name} id="name" type="text" onChange={changeProdValues}  />
            
                    <label htmlFor="description">description</label>
                    <input value={newProdValues.description} id="description" type="text" onChange={changeProdValues}  />
            
                    <label htmlFor="price">price</label>
                    <input value={newProdValues.price} id="price" type="text" onChange={changeProdValues} />
                
                    <label htmlFor="imgSrc">image source</label>
                    <input value={newProdValues.imgSrc} id="imgSrc" type="text" onChange={changeProdValues}  />
                
                    <label htmlFor="type">type</label>
                    <input value={newProdValues.type} id="type" type="text" onChange={changeProdValues} />
                
                    <button type="submit" className="submit-button">submit</button>
                
                </form>




            
        </FLoatingModal>
    )
}