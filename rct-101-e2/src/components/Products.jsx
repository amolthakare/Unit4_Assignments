import React from "react";
import axios from "axios";

import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import products from "../db.json";

const Products = () => {
  return (
    
    <Product key={products.id}{...products} />
  );
};

export default Products;

{/* <Product key={products.id}{...products} /> */}