import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Shoes from "./components/Shoes/Shoes";
import CartProvider from "./store/CartProvider";

function App() {
  const [showcart, setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true);
  }
  const hideCartHandler = ()=>{
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showcart && <Cart onHide={hideCartHandler} />}
      <Header onShow={showCartHandler}/>
      <main>
        <Shoes />
      </main>
    </CartProvider>
  );
}

export default App;