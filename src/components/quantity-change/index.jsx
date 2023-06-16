import React from "react";
import "../../assets/sass/components/quantity.scss";
import { QuantityEnums } from "../../enums/quantity.enums";
function QuantityChange({ productId, quantity, onChange }) {
  return (
    <div className="quantity">
      <span
        className="quantity-sub"
        onClick={() => onChange(QuantityEnums.SUB, productId)}
      >
        -
      </span>
      <span className="quantity-num">{quantity}</span>
      <span
        className="quantity-add"
        onClick={() => onChange(QuantityEnums.ADD, productId)}
      >
        +
      </span>
    </div>
  );
}

export default QuantityChange;
