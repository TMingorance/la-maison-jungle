import { useState } from "react";
import "../styles/Cart.css"

function Cart({cartList, updateCart}) {   

    const [isOpen, updateIsOpen] = useState(false);

    const totalPrice = cartList.reduce((accumulator, currentCartElement) => accumulator += currentCartElement.plant.price * currentCartElement.count, 0);

    function updateAndStore(aCartList){
        updateCart([...aCartList]);
        localStorage.setItem("cartList", JSON.stringify(aCartList));
    }

    if(isOpen)
        return (<div className="lmj-cart">
                    <button onClick={() => updateIsOpen(false)}>
                        <h2>Panier</h2>
                    </button>

                    <p>Panier : </p>
                    <ul>
                    {cartList.map((cartElement, index) => {
                        return <li key={`${cartElement.id} + ${index}`}>
                            {cartElement.plant.name} x {cartElement.count} : {cartElement.plant.price * cartElement.count}€
                            <button onClick={() => {
                                cartList.splice(index,1);
                                updateAndStore(cartList)
                            }}>
                                Supprimer du panier
                            </button>
                            </li>
                    })}
                    </ul>
                    <button onClick={() => updateAndStore([])}>Vider le panier</button>
                    <h3>Prix total : {totalPrice}€</h3></div>
        )
    else
        return (<button onClick={() => updateIsOpen(true)}>Panier</button>)
}

export default Cart