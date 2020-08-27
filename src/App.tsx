import React from "react";
import ProductListComponent from "./components/ProductsList";
import { IProductModel } from "./models/Product";

import "./assets/style/index.scss";

const products: IProductModel[] = [
  {
    id: 1,
    title: "Нямушка",
    subTitle: "с фуа-гра",

    type: "Сказочное заморское ямство",
    weight: 0.5,

    numUnits: 10,
    numSurprise: 1,

    descr: "Печень утки разварная с артишоками.",

    isDisabled: false,
  },
  {
    id: 2,
    title: "Нямушка",
    subTitle: "с рыбой",

    type: "Сказочное заморское ямство",
    weight: 2,

    numUnits: 40,
    numSurprise: 2,

    descr: "Головы щучьи с чесноком да свежайшая сёмгушка.",

    isDisabled: false,
  },
  {
    id: 3,
    title: "Нямушка",
    subTitle: "с курой",
    textData: "заказчик доволен",

    type: "Сказочное заморское ямство",
    weight: 5,

    numUnits: 100,
    numSurprise: 5,

    descr: "Филе из цыплят с трюфелями в бульоне.",

    isDisabled: true,
  },
];

function App() {
  return (
    <div className="container">
      <ProductListComponent products={products} />
    </div>
  );
}

export default App;
