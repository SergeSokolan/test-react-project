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
      <section className="goods">
        <div className="goods__container">
          <ul className="goods__list">
            {this.state.catFood.map( (item, index) => 
               <li className={`goods__item ${item.inStock === true ? 'goods__item_available' : 'goods__item_unavailable'}`} key={index}>
               <div className='goods-item__card'>
                <span className='card__text card__text_large'>{item.brief}</span>
                  <h1 className='card__title'>{item.title}</h1>
                  <h2 className='card__title card__title_sub'>{item.subtitle}</h2>
                  <span className='card__text'><b>{item.serving}</b> порций</span>
                  <span className='card__text'>
                    {item.gift === 1 ? (
                      'мышь в подарок'
                    ) : (
                      <b>{item.gift} {this.declOfNum(item.gift, ['мышь', 'мыши', 'мышей'])} в подарок</b>
                    )}
                  </span>
                  {item.details.length > 0 &&
                    <span className='card__text'>{item.details}</span>
                  }
                  <div className='card__ellipse'>
                   <span className='ellipse__qty'>{item.weight}</span>
                   <span className='ellipse__uom'>кг</span>
                  </div>
                  </div>
                  <span className='goods-item__info'>{item.inStock === true ? item.description : `Печалька, ${item.subtitle} закончился.`}</span>
                </li>
              )}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
