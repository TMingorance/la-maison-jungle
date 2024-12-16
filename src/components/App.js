import '../styles/App.css';
import { useState } from "react";
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList'
import QuestionForm from './QuestionForm';
import Footer from './Footer';

function App() {
  const [categorySelected, updateCategorySelected] = useState("");
  

  let initialCartList = JSON.parse(localStorage.getItem("cartList"));
  if (!initialCartList){
    initialCartList = [];
  }

  const [cartList, updateCart] = useState(initialCartList);

  return (
    <>
      <Banner/>
      <ShoppingList categorySelected={categorySelected} updateCategorySelected={updateCategorySelected} cartList={cartList} updateCart={updateCart}/>
      <Cart cartList={cartList} updateCart={updateCart}/>
      <QuestionForm/>
      <Footer/>
    </>
  );
}

export default App;
