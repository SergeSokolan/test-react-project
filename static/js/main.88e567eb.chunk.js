(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(2),c=a.n(s),l=(a(15),a(3)),r=a(4),o=a(8),m=a(5),d=a(9),_=a(6),g=a(7),p=a.n(g),u=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state=_,a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"declOfNum",value:function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}},{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"goods"},n.a.createElement("div",{className:"goods__container"},n.a.createElement("h1",{className:"title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),n.a.createElement("ul",{className:"goods__list"},this.state.catFood.map(function(t,a){return n.a.createElement("li",{className:"goods__item ".concat(!0===t.inStock?"goods__item_available":"goods__item_unavailable"),key:a},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"324px",height:"484px",className:"goods-item__bg"},n.a.createElement("defs",null,n.a.createElement("pattern",{id:"pattern",x:"0",y:"0",width:"100%",height:"100%",patternUnits:"userSpaceOnUse"},n.a.createElement("rect",{height:"100%",width:"100%",fill:"white"}),n.a.createElement("g",{id:"img-overlay"},n.a.createElement("image",{x:"0",y:"211",width:"320",height:"273",xlinkHref:p.a})))),n.a.createElement("path",{className:"goods-item__bg-path",fillRule:"evenodd",stroke:"rgb(22, 152, 217)",strokeWidth:"4px",strokeLinecap:"butt",strokeLinejoin:"miter",fill:"url(#pattern)",d:"M310.000,482.000 L14.000,482.000 C7.373,482.000 2.000,476.627 2.000,470.000 L2.000,45.000 L45.000,2.000 L310.000,2.000 C316.627,2.000 322.000,7.372 322.000,14.000 L322.000,470.000 C322.000,476.627 316.627,482.000 310.000,482.000 Z"})),n.a.createElement("div",{className:"goods-item__card"},n.a.createElement("span",{className:"card__text card__text_large card__text_gray"},t.brief),n.a.createElement("h1",{className:"card__title"},t.title),n.a.createElement("h2",{className:"card__title card__title_sub"},t.subtitle),n.a.createElement("span",{className:"card__text card__text_gray"},n.a.createElement("b",{className:"bold"},t.serving)," \u043f\u043e\u0440\u0446\u0438\u0439"),n.a.createElement("span",{className:"card__text card__text_gray"},1===t.gift?" \u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a":[n.a.createElement("b",{className:"bold",key:a},t.gift),"".concat(e.declOfNum(t.gift,[" \u043c\u044b\u0448\u044c"," \u043c\u044b\u0448\u0438"," \u043c\u044b\u0448\u0435\u0439"])," \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a")]),t.details.length>0&&n.a.createElement("span",{className:"card__text card__text_gray"},t.details),n.a.createElement("div",{className:"card__ellipse"},n.a.createElement("span",{className:"ellipse__qty"},t.weight),n.a.createElement("span",{className:"ellipse__uom"},"\u043a\u0433"))),n.a.createElement("span",{className:"goods-item__info"},!0===t.inStock?t.description:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, ".concat(t.subtitle," \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f.")))}))))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={catFood:[{brief:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",description:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",serving:10,gift:1,details:"",weight:.5,image:"",inStock:!0},{brief:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u0440\u044b\u0431\u043e\u0439",description:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430",serving:40,gift:2,details:"",weight:2,image:"",inStock:!0},{brief:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",subtitle:"\u0441 \u043a\u0443\u0440\u043e\u0439",description:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",serving:100,gift:5,details:"\u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",weight:5,image:"",inStock:!1}]}},7:function(e,t,a){e.exports=a.p+"static/media/cat.95ea8834.png"}},[[10,2,1]]]);
//# sourceMappingURL=main.88e567eb.chunk.js.map