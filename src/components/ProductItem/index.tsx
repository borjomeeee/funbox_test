import React, { useState, MouseEvent } from "react";

import { IProductModelExtended } from "../../models/Product";

import "./ProductItem.style.scss";

import { declOfNum } from "../../utils";

interface IProductItemComponent extends IProductModelExtended {
  onSelect: () => void;
}

const ProductItemComponent: React.FC<IProductItemComponent> = (props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleSelectItem = () => {
    setIsHovered(false);
    props.onSelect();
  };

  const onBotDescrButtonClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    handleSelectItem();
  };

  const cardClassName = `${
    props.isSelected ? "product-item__card_selected" : ""
  } ${isHovered ? "product-item__card_hovered" : ""} ${
    props.isDisabled ? "product-item__card_disabled" : ""
  }`;

  const cardListeners = props.isDisabled
    ? {}
    : {
        onMouseEnter: setIsHovered.bind(null, true),
        onMouseLeave: setIsHovered.bind(null, false),
        onClick: handleSelectItem,
      };

  const unitsCountText = declOfNum(props.numUnits, [
    "порция",
    "порции",
    "порций",
  ]);

  const surprisesCountText = declOfNum(props.numSurprise, [
    "мышь",
    "мыши",
    "мышей",
  ]);

  return (
    <div className="product-item">
      <div className="product-item__container">
        <div
          className={`product-item__card ${cardClassName} card`}
          {...cardListeners}
        >
          {props.isDisabled && <div className="card__background-disabled" />}
          {props.isSelected && isHovered ? (
            <div className="card__top-descr card__top-descr_cancel">
              Котэ не одобряет?
            </div>
          ) : (
            <div className="card__top-descr">{props.type}</div>
          )}

          <div className="card__title">{props.title}</div>
          <div className="card__sub-title">{props.subTitle}</div>

          <div className="card__content">
            <div className="card__num-units">
              <b>{props.numUnits} </b>
              {unitsCountText}
            </div>
            {props.numSurprise > 0 && (
              <div className="card__num-surprise">
                <b>{props.numSurprise === 1 ? "" : props.numSurprise} </b>
                {surprisesCountText} в подарок
              </div>
            )}

            {props.textData && (
              <div className="card__text-data">{props.textData}</div>
            )}
          </div>

          <div className="card__num-container">
            <div className="card__num-container-top">{props.weight}</div>
            <div className="card__num-container-bot">кг</div>
          </div>
        </div>

        {props.isSelected ? (
          <div className="product-item__bot-descr">{props.descr}</div>
        ) : props.isDisabled ? (
          <div className="product-item__bot-descr product-item__bot-descr_disabled">
            Печалька, с {props.subTitle} закончился.
          </div>
        ) : (
          <div className="product-item__bot-descr">
            Чего сидишь? Порадуй котэ,{" "}
            <span>
              <a href="/" onClick={onBotDescrButtonClick}>
                купи
              </a>
              .
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItemComponent;
