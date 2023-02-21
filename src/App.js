import './App.css';
import products from './products.json';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {
  const [basket, setBasket] = useState([]);
  const [cost, setCost] = useState();
  useEffect(() => {
    const totalPrice = basket.reduce((pre, basket) => pre + (basket.amount * basket.price), 0);
    setCost(totalPrice);
  }, [basket])
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div className='productbox' >
          {
            products.map(product => (
              <Product key={product.id}
                basket={basket}
                product={product}
                setBasket={setBasket}
              />
            ))
          }
        </div>
        <Basket cost={cost} basket={basket} />
      </div>
    </div>
  );
}

export default App;
