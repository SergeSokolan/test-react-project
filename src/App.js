import React, { Component } from "react";
import "./App.css";
import data from "./data/goods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  declOfNum(number, titles) {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}

  render() {
    return (
      <section className="sec">
        <div className="cont">
          <ul className="list">
            {this.state.catFood.map( (item, index) => 
               <li className={`item ${item.inStock === true ? '' : 'item_unavailable'}`} key={index}>
                <span>{item.itemName}</span>
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                  <span>{`${item.serving} порций`}</span>
                  <span>
                    {item.gift === 1 ? (
                      `мышь в подарок`
                    ) : (
                      `${item.gift} ${ this.declOfNum(item.gift, ['мышь', 'мыши', 'мышей']) } в подарок`
                    )}
                  </span>
                  <span>{`${item.weight} кг`}</span>
                  <span>{item.inStock === true ? item.description : `Печалька, ${item.subtitle} закончился.`}</span>
                </li>
              )}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
