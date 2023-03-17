import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./components/Header";
import Main from './components/Main';
import Cart from './components/Cart';
import AddToCart from './components/AddToCart';

function App() {
  const [productsCount, setProductsCount] = useState(0);

  return (<>
    <div className="App">
      <Header>
        <Cart cartsItem={productsCount} removeItems={()=>{setProductsCount(0)}} />
      </Header>
      <Main>
        <AddToCart cartsItem={productsCount} addItem={setProductsCount} />
      </Main>
    </div>
  </>)
}

export default App
