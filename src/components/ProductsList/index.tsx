import React, { useState } from "react";
import { IProductModel, IProductModelExtended } from "../../models/Product";
import ProductItemComponent from "../ProductItem";

import "./ProductList.style.scss";

interface IProductListComponent {
  products: IProductModel[];
}

const ProductListComponent: React.FC<IProductListComponent> = ({
  products,
}) => {
  const [items, setItems] = useState<IProductModelExtended[]>(products);

  const handleSelectProductItem = (id: number) => {
    setItems((vals: IProductModelExtended[]) =>
      vals.map((val: IProductModelExtended) =>
        val.id === id ? { ...val, isSelected: !val.isSelected } : val
      )
    );
  };

  return (
    <div className="product-list">
      <div className="product-list__title">Ты сегодня покормил кота?</div>

      <div className="product-list__container">
        {items.map((item: IProductModelExtended) => (
          <ProductItemComponent
            key={item.id}
            {...item}
            onSelect={handleSelectProductItem.bind(null, item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
