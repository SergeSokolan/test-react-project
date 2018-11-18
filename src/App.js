import React, { Component } from "react";
import "./App.css";
import data from "./data/goods.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    return (
      <section className="sec">
        <div className="cont">
          <ul className="list">
            {this.state["cat-food"].map((item, index) => {
              return (
                <li className={`item ${item['in-stock'] === false ? 'item_unavailable' : ''}`} key={index}>
                <span>{item['item-name']}</span>
                  <h1>{item.title}</h1>
                  <h2>{item.subtitle}</h2>
                  <p>{`${item.serving} порций`}</p>
                  <p>{`${item.gift} мышь в подарок`}</p>
                  <p>{`${item.weight} кг`}</p>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
