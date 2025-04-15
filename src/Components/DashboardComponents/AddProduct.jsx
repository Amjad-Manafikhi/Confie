import React from "react"
import { MdVisibility } from "react-icons/md";


export default function AddProduct({ products }){
        
    const [stateProducts, setStateProducts] = React.useState(products);
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
    const [shouldRender, setShouldRender] = React.useState(false);

    React.useEffect(() => {
        let timeout;
      
        if (isOpen) {
          setShouldRender(true);
        } else {
          timeout = setTimeout(() => setShouldRender(false), 300);
        }
      
        return () => clearTimeout(timeout);
      }, [isOpen]);
      

    

    function changeProdValues(event) {
        event.preventDefault();
        setNewProdValues(prev => ({
            ...prev,
            [event.target.id]: event.target.value
        }));
    }

    function submitProduct(event) {
        event.preventDefault(); // stop page reload
        setSubmited(true);
        // Optional: validate data
        if (!newProdValues.name || !newProdValues.price || !newProdValues.imgSrc || !newProdValues.type) {
            alert("Please fill in all required fields.");
            return;
        }
        setSubmited(false);
        setIsOpen(false)

        setStateProducts(prev => [...prev, newProdValues]);

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
    const screenStyle={
        backgroundColor:"transparent"
    }
    

    return (
        <>
        <button 
            className="addProduct"
            onClick={() => setIsOpen(true) }
        >+</button>

        {shouldRender && <div 
            className="dialog-full-screen"
            onClick={() => setIsOpen(false) }
            style={!isOpen ? screenStyle : null}
        >
            
            <dialog 
                className={`${isOpen ? "scale-in" : "scale-out"}`}
                open={true}
                onClick={(e) => e.stopPropagation()}
                >
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
                
            </dialog>
        </div>}
        </>

    )
}