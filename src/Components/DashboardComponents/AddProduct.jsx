import React from "react"


export default function AddProduct(){
    const [isOpen, setIsOpen]=React.useState(false);
    

    return (
        <>
        <button 
            className="addProduct"
            onClick={() => setIsOpen(prev => !prev) }
        >+</button>
        {isOpen && <form name="addProds" className="add-prods" onSubmit={submitProduct} Style={formStyle}>
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
                }
        </>

    )
}