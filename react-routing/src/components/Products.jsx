import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let res = await fetch("http://localhost:8080/products")
      let data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className='products'>
      {products.map((e) => (
        <div key={e.id}>
          <img src={e.image}></img>
          <h4>
            <Link to={`/products/${e.id}/${e.name}`} style={{ textDecoration: 'none'}}>{e.name}</Link>
          </h4>
          <p>Rs. {e.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Products;