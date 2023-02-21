import React from "react";
import './style.css'
export default function Basket({ basket, cost }) {
  const basketLength = basket.length;
  return [
    <div>
      <div className={basketLength === 0 ? "none" : "show"}>
        <h2>Basket({basket.length})</h2>
        <ul>
          {
            basket.map(item => (
              <li key={item.id}>-{item.name} ({item.amount})</li>
            ))
          }
        </ul>
        {basket && <p>Total= {cost}</p> || null}
      </div>
    </div>
  ]
}