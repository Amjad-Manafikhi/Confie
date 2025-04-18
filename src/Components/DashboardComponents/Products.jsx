import React from "react"
import Card from './../card.jsx';
import { useSearchParams } from "react-router-dom";
import FlipMove from 'react-flip-move';
import AddProduct from './AddProduct.jsx';
import ToBeSureToDel from "./ToBeSureToDel.jsx";
import ToBeSureToEdit from "./ToBeSureToEdit.jsx";

export default function Products({ products }) {
    const [stateProducts, setStateProducts] = React.useState(products);
    const [searchParams, setSearchParams] = useSearchParams();
    const [deleteIsOpen, setDeleteIsOpen] = React.useState(false);
    const [deleteProd, setDeleteProd] = React.useState(false);
    const [deleteTargetId, setDeleteTargetId] = React.useState(null); 
    const [editIsOpen, setEditIsOpen] = React.useState(false);
    const [editProd, setEditProd] = React.useState(false);
    const [editTargetId, setEditTargetId] = React.useState(null); 
    const [newProdValues, setNewProdValues] = React.useState({
        imgSrc: './../HomeImage.jpg',
        price: "",
        name: "",
        description: "",
        type: "",
        id:-1
    });

    const initialPrice = searchParams.get("price") || "price";
    const initialType = searchParams.get("type") || "type";


    function changePrice(event) {
        const price = event.target.value;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("price", price);
        setSearchParams(newSearchParams);
    }
    function changeType(event) {
        const type = event.target.value;
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("type", type);
        setSearchParams(newSearchParams);
    }


    const filteredProducts =
        initialType && initialType !== "type" && initialType !== "all"
            ? stateProducts.filter((product) =>
                product.type === initialType
            )
            : stateProducts;

    let sortedProducts = filteredProducts;

    if (initialPrice === "HtoL") {
        sortedProducts = [...filteredProducts].reverse();
    }
    function handleDelete (id){
        setDeleteIsOpen(true);
        setDeleteTargetId(id);
    }
    function handleEdit(id){
        setNewProdValues(stateProducts.find(prod => prod.id===id ))
        setEditIsOpen(true);
        setEditTargetId(id);
    }

    React.useEffect(()=>{
        if(deleteProd){
            const id=deleteTargetId;
            setStateProducts( prev =>{
            return  prev.filter(product => product.id!==id )
            }
        )}
        setDeleteProd(false);
    },[deleteProd])

    React.useEffect(()=>{
        if(editProd){
            const id=editTargetId;
            setStateProducts(prev =>
                prev.map(product =>
                  product.id === id ? newProdValues : product
                )
              );
                          
        }
        setEditProd(false);
    },[editProd])



    const elementProducts = sortedProducts.map((product) => (
        <div key={product.id}>
            <Card
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                imgSrc={product.imgSrc}
                price={product.price}
                name={product.name}
                description={product.description}
                id={product.id}
            />
        </div>
    ));



    return (
        <>
            
            <div className="shop">


                <FlipMove
                    className="cards-container"
                    duration={500}
                    staggerDurationBy={30}
                >
                    <div className="sub-shop">
                        <h1 className="filter-name">Filters</h1>

                        <form>
                            <select name="Price" defaultValue={initialPrice} onChange={changePrice}>
                                <option value="price" disabled>Price</option>
                                <option value="HtoL">High To Low </option>
                                <option value="LtoH">Low To High </option>
                            </select>
                            <select name="Type" defaultValue={initialType} onChange={changeType}>
                                <   option value="type" disabled>Type</option>
                                <option value="all">All</option>
                                <option value="sofa">Sofa</option>
                                <option value="chair">Chair</option>
                                <option value="lamp">Lamp</option>
                            </select>
                        </form>
                    </div>
                    
                    {elementProducts}
                </FlipMove>
            </div>
            <AddProduct 
                stateProducts={stateProducts}
                setStateProducts={setStateProducts}
            />
             <ToBeSureToDel 
                deleteIsOpen={deleteIsOpen} 
                setDeleteProd={setDeleteProd} 
                setDeleteIsOpen={setDeleteIsOpen} 
            />
            <ToBeSureToEdit 
                editIsOpen={editIsOpen} 
                setEditProd={setEditProd} 
                setEditIsOpen={setEditIsOpen} 
                newProdValues={newProdValues}
                setNewProdValues={setNewProdValues}
                setIsOpen={setEditIsOpen}
            />
        </>
    )
}