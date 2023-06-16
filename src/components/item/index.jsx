import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAddToCart from "../../hooks/addToCart.hook";
import { moneyFormat } from "../../utils/money-format";
import NoImage from "../../assets/images/no_image.jpg"
function Item({
  productId,
  url,
  name,
  price,
  salePercent = 0,
  isNew = false,
  star = 5,
  image,
  details,
}) {
  const [sizeSelected, setSizeSelected] = useState(0);
  const onSelectedSizeHandler = (e, size) => {
    e.stopPropagation();
    e.preventDefault();
    setSizeSelected(size);
  };
  const { onUpdateToCartHandler } = useAddToCart();
  const addToCartHandler = async (e, size) => {
    e.stopPropagation();
    e.preventDefault();

    if (!sizeSelected) {
      toast.error("Vui lòng chọn size giày");
      return;
    }

    await onUpdateToCartHandler(productId, sizeSelected, 1);
  };
  return (
    <Link to={url} className="product">
      <div className="product-img">
        <img alt="" src={image ? `${process.env.REACT_APP_Image_URL}/${image}` : NoImage} />
        <div className="product-label">
          {salePercent !== 0 && <span className="sale">-{salePercent}%</span>}
          {isNew && <span className="new">NEW</span>}
        </div>
      </div>
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price">
          {moneyFormat(price)} đ <br />
          {salePercent !== 0 && (
            <del className="product-old-price">
              {moneyFormat(Math.floor(price / ((100 - salePercent) / 100)))} đ
            </del>
          )}
        </h4>
        {star && (
          <div className="product-rating">
            {Array(star)
              .fill(0)
              .map((_, idx) => (
                <i className="fa fa-star" key={idx} />
              ))}
          </div>
        )}

        <ul className="product-sizes gap-2 mt-2">
          {details?.length > 0 &&
            details.map((detail) => (
              <li
                key={detail.id}
                onClick={(e) => onSelectedSizeHandler(e, detail.size)}
                className={sizeSelected === detail.size ? "active" : ""}
              >
                {detail.size}
              </li>
            ))}
        </ul>
        <div
          className="btn btn-sm w-100 btn-add-to-cart"
          onClick={addToCartHandler}
        >
          Thêm giỏ hàng
        </div>
      </div>
    </Link>
  );
}

export default Item;
