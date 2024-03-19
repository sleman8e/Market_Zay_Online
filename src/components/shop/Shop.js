import React, { useState, useEffect } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {setProducts(data);console.log(data);})
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="container">
            <h2 style={{textAlign:"center",color:"#111"}}>Shop Market</h2>
            <ImageGallery products={products}  />
        </div>
    );
};

export default Shop;
