import React from "react"
import Card from './../card.jsx';
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import FlipMove from 'react-flip-move';
export default function Products({ products }) {
    const [stateProducts, setStateProducts] = React.useState(products);
    const [searchParams, setSearchParams] = useSearchParams();
    const [submited, setSubmited] = React.useState(false)
    const [newProdValues, setNewProdValues] = React.useState({
        imgSrc: './../HomeImage.jpg',
        price: "",
        name: "",
        description: "",
        type: "",
        id: Date.now()
    });

    const initialPrice = searchParams.get("price") || "price";
    const initialType = searchParams.get("type") || "type";

    const navigate = useNavigate();
    const location = useLocation();

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
    console.log(stateProducts)
    const s = "White sofa";


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
    const elementProducts = sortedProducts.map((product) => (
        <div key={product.id}>
            <Card
                imgSrc={product.imgSrc}
                price={product.price}
                name={product.name}
                description={product.description}
            />
        </div>
    ));



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

    console.log(stateProducts);
    const style = {
        borderColor: "red"
    }




    return (
        <>
            <form name="addProds" className="add-prods" onSubmit={submitProduct}>
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
            <div className="shop">


                <FlipMove
                    className="cards-container"
                    duration={500}
                    staggerDurationBy={30}
                    onStart={() => console.log("Animation started")}
                    onFinish={() => console.log("Animation finished")}
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
        </>
    )
}