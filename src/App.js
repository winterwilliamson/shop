
import { useState, useEffect } from 'react';
import './App.css';
import Products from './components/Products'
import Navbar from './components/Navbar/Navbar'
import {commerce} from './lib/commerce'
import Cart from './components/Cart/Cart'
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Checkout  from './components/CheckoutForm/CheckoutForm';
import Offer from './components/product/Offer'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const {data}  = await commerce.products.list();

    setProducts(data);

  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  
  }
  const handleClick = async(productId, quantity) => {

    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)

  }

  const removeCart = async(productId) => {
         const {cart }= await commerce.cart.remove(productId);

         setCart(cart);

  }

  const emptyCart = async() => {
    const  { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  const handleUpdateCart = async(productId, quantity) => {
    const {cart} = await commerce.cart.update(productId, {quantity})

    setCart(cart)
  }

 


  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  



  return (
    <Router>
       <div className="App">
      
     
      <Switch>
        
          <Route exact path='/shop/' >
          <Navbar totalItems={cart.total_items} ></Navbar>
          <Offer></Offer>
          <Products products={products} handleClick={handleClick} ></Products>
         
          </Route>
          <Route exact path='/shop/cart'>
          <Cart cart={cart} removeCart={removeCart} handleUpdateCart={handleUpdateCart} emptyCart={emptyCart}></Cart>
          </Route>
          <Route exact path='/checkout'>
            <Checkout cart={cart}></Checkout>
          </Route>

      </Switch>
      
      
    
    </div>

    </Router>
   
  );

  }


export default App;
