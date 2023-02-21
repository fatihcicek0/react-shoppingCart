import React from "react";
import './style.css'
export default function Product({ product, basket, setBasket }) {
    const basketProduct = basket.find(item => item.id === product.id)

    function addBasket() {
        const addFind = basket.find(item => item.id == product.id);
        if (addFind) {
            addFind.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), {

                id: product.id,
                name: product.name,
                img: product.img,
                amount: addFind.amount,
                price: product.price

            }])

        } else {
            setBasket([...basket, {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: 1
            }])
        }
    }

    function removeBasket() {
        const removeFind = basket.find(item => item.id == product.id);
        removeFind.amount -= 1;
        if (removeFind.amount == 0) {
            setBasket([...basket.filter(item => item.id !== product.id)]);
        } else {
            setBasket([...basket.filter(item => item.id !== product.id), {
                id: product.id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: removeFind.amount
            }])
        }
    }
    return (
        <div key={product.id}>
            <div className="product" >
                <img src={product.img}></img>
                <div className="productInfo" >
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
                <div className="countProduct">
                    <button onClick={addBasket}>+</button> 
                    <b>{basketProduct && basketProduct.amount || 0}</b> 
                    <button onClick={removeBasket} disabled={!basketProduct}>-</button>
                </div>
            </div>
        </div>
    )
}