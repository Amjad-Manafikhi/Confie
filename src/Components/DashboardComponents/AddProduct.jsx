import React from "react"
import { MdVisibility } from "react-icons/md";
import FloatingModal from './FloatingModal.jsx';

export default function AddProduct({ stateProducts, setStateProducts}){
        
    const [isOpen, setIsOpen]=React.useState(false);
    const [submited, setSubmited] = React.useState(false)
    const [newProdValues, setNewProdValues] = React.useState({
            imgSrc: './../HomeImage.jpg',
            price: "",
            name: "",
            description: "",
            type: "",
            id: Date.now()
        });

    
      

    

    function changeProdValues(event) {
        event.preventDefault();
        setNewProdValues(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    function submitProduct(event) {
        event.preventDefault();
        setSubmited(true);

        if (!newProdValues.name || !newProdValues.price || !newProdValues.imgSrc || !newProdValues.type || !newProdValues.description) {
            alert("Please fill in all required fields.");
            return;
        }
        setStateProducts(prev => [...prev, newProdValues]);
        setSubmited(false);

        // Clear the form after submission
        setNewProdValues({
            imgSrc: "./../HomeImage.jpg",
            price: "",
            name: "",
            description: "",
            type: ""
        });
    }
    const style = {
        borderColor: "red"
    }
    

    return (
        <>
        <button 
            className="addProduct"
            onClick={() => setIsOpen(true) }
        >+</button>

        <FloatingModal isOpen={isOpen} setIsOpen={setIsOpen}>

            <form 
                name="addProds" 
                className="add-prods"
                onSubmit={submitProduct} 
            >
                <h2>Add Product</h2>
                <label htmlFor="name">name</label>
                <input value={newProdValues.name} id="name" type="text" onChange={changeProdValues} style={(submited && !(newProdValues.name.length)) ? style : null} />
        
                <label htmlFor="description">description</label>
                <input value={newProdValues.description} id="description" type="text" onChange={changeProdValues} style={(submited && !((newProdValues.description.length))) ? style : null} />
        
                <label htmlFor="price">price</label>
                <input value={newProdValues.price} id="price" type="text" onChange={changeProdValues} style={(submited && !(newProdValues.price.length)) ? style : null} />
        
                <label htmlFor="imgSrc">image source</label>
                <input value={newProdValues.imgSrc} id="imgSrc" type="text" onChange={changeProdValues} style={(submited && !(newProdValues.imgSrc.length)) ? style : null} />
        
                <label htmlFor="type">type</label>
                <input value={newProdValues.type} id="type" type="text" onChange={changeProdValues} style={(submited && !(newProdValues.type.length)) ? style : null} />
        
                <button type="submit" className="submit-button">submit</button>
        
            </form>
        </FloatingModal>
                
         
        </>

    )
}