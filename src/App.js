import React, { Component } from "react";
import data from "./data/goods.json";
//import { ReactComponent as Background } from "./style/images/list-background.svg";
import cat from "./style/images/cat.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  declOfNum(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  render() {
    return (
      <section className="goods">
                <div className="goods__container">
        <h1 className="title">Ты сегодня покормил кота?</h1>
          <ul className="goods__list">
            {this.state.catFood.map((item, index) => (
              <li
                className={`goods__item ${
                  item.inStock === true
                    ? "goods__item_available"
                    : "goods__item_unavailable"
                }`}
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="324px"
                  height="484px"
                  className="goods-item__bg"
                >
                  <defs>
                    <pattern
                      id="pattern"
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect height="100%" width="100%" fill="white" />
                      <g id="img-overlay">
                        <image
                          x="0"
                          y="211"
                          width="320"
                          height="273"
                          xlinkHref={cat}
                        />
                      </g>
                    </pattern>
                  </defs>

                  <path
                    className="goods-item__bg-path"
                    fillRule="evenodd"
                    stroke="rgb(22, 152, 217)"
                    strokeWidth="4px"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    fill="url(#pattern)"
                    d="M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"
                  />
                </svg>

                <div className="goods-item__card">
                  <span className="card__text card__text_large card__text_gray">
                    {item.brief}
                  </span>
                  <h1 className="card__title">{item.title}</h1>
                  <h2 className="card__title card__title_sub">
                    {item.subtitle}
                  </h2>
                  <span className="card__text card__text_gray">
                    <b className="bold">{item.serving}</b> порций
                  </span>
                  <span className="card__text card__text_gray">
                    {item.gift === 1
                      ? "мышь в подарок"
                      : [
                          <b className="bold" key={index}>
                            {item.gift}
                          </b>,
                          `${this.declOfNum(item.gift, [
                            "мышь",
                            "мыши",
                            "мышей"
                          ])} в подарок`
                        ]}
                  </span>
                  {item.details.length > 0 && (
                    <span className="card__text card__text_gray">
                      {item.details}
                    </span>
                  )}
                  <div className="card__ellipse">
                    <span className="ellipse__qty">{item.weight}</span>
                    <span className="ellipse__uom">кг</span>
                  </div>
                </div>
                <span className="goods-item__info">
                  {item.inStock === true
                    ? item.description
                    : `Печалька, ${item.subtitle} закончился.`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
