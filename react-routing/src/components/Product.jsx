import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();


    useEffect(() => {
        if (id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
        }
    }, [id]);

    return (
        <div className='product'>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <p>Rs. {product.price}</p>
        </div>
    )
}

export default Product;