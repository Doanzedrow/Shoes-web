import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductHot from "../../components/product-hot";
import QuantityChange from "../../components/quantity-change";
import ProductTabs from "../../components/tabs";
import { QuantityEnums } from "../../enums/quantity.enums";
import useAddToCart from "../../hooks/addToCart.hook";
import { getProductDetail } from "../../redux/product.slice";
import { moneyFormat } from "../../utils/money-format";
import ProductThumbnail from "./product-thumbnail";
import Loading from "../../components/loading";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(40);
  const dispatch = useDispatch();
  const { onUpdateToCartHandler } = useAddToCart();
  const { id } = useParams();
  const { data, error, isLoading } = useSelector((state) => state.product);
  const {
    id: productId,
    // brand_id,
    // product_category_id,
    name,
    description,
    content,
    price,
    // qty,
    // discount,
    rating,
    // created_at,
    // updated_at,
    product_details,
    product_images,
    product_comments,
  } = data;

  const quantityChangeHandler = (type) => {
    if (type === QuantityEnums.SUB && quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
    if (type === QuantityEnums.ADD) {
      setQuantity((prevState) => prevState + 1);
    }
  };

  const getProductDetailHandler = async (id) => {
    try {
      await dispatch(getProductDetail({ id }));
    } catch (error) {
      toast.error(error);
    }
  };

  const addToCartHandler = async () => {
    await onUpdateToCartHandler(productId, size, quantity);
  };

  useEffect(() => {
    getProductDetailHandler(id);
  }, [id]);

  return (
    <>
      <section className="product-detail">
        <div className="container">
          {isLoading && <Loading />}
          {error && !isLoading && <>Không tìm thấy sản phẩm</>}
          {productId && !error && !isLoading && (
            <div className="row">
              <div className="col-md-6">
                <ProductThumbnail images={product_images?.map((f) => f.path)} />
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <h2 className="product-name">{name}</h2>
                  <div>
                    <div className="product-rating">
                      {Array(rating)
                        .fill(0)
                        .map((_, idx) => (
                          <i className="fa fa-star" key={idx} />
                        ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="product-price">
                      {moneyFormat(price)} VND{" "}
                      {/* <del className="product-old-price">
                      {moneyFormat(product.oldPrice)} VND
                    </del> */}
                    </h3>
                  </div>
                  <p>{description}</p>
                  <div className="size-color clearfix">
                    <div className="product-form product-size">
                      <div className="row">
                        <label className="font-weight-bold text-uppercase h6 mb-2 d-block col-12" />
                        <div className="col-12">
                          <ul className="wapper_cb size d-flex flex-wrap justify-content-center justify-content-lg-start">
                            {product_details &&
                              product_details.map((item) => (
                                <li className="cb" key={item.id}>
                                  <label htmlFor="radio2296">
                                    <input
                                      type="radio"
                                      data-id={2296}
                                      defaultValue={2296}
                                      id="radio2296"
                                      name="radio"
                                      className="radio"
                                      defaultChecked
                                    />
                                    <div
                                      className="rd_in"
                                      onClick={() => setSize(item.size)}
                                    >
                                      {item.size}
                                    </div>
                                  </label>
                                </li>
                              ))}

                            <div className="clear" />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4">
                    <QuantityChange
                      quantity={quantity}
                      onChange={quantityChangeHandler}
                    />
                    <button
                      className="btn btn-product-to-cart"
                      onClick={addToCartHandler}
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-12 mt-4">
                <ProductTabs
                  descriptions={content}
                  comments={product_comments}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <ProductHot />
    </>
  );
}

export default ProductDetail;
