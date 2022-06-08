import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Products from './components/Products';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path='/products/:id/:name' element={<Product />}></Route>
      </Routes>

    </div>
  );
}

export default App;
