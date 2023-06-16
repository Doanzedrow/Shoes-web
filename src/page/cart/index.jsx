import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../assets/sass/components/cart-table.scss";
import QuantityChange from "../../components/quantity-change";
import Section from "../../components/section";
import Title from "../../components/title";
import { QuantityEnums } from "../../enums/quantity.enums";
import useAddToCart from "../../hooks/addToCart.hook";
import { getCart } from "../../redux/cart.slice";
import { moneyFormat } from "../../utils/money-format";

function Cart() {
  const { data } = useSelector((state) => state.cart);
  let totalPrice = 0;
  if (data?.cart_items?.length) {
    totalPrice = data.cart_items.reduce((prevValue, currentValue) => {
      console.log(currentValue.price);
      return (prevValue += currentValue.price);
    }, 0);
  }

  const dispatch = useDispatch();
  const { onUpdateToCartHandler } = useAddToCart();

  const quantityChangeHandler = async (type, productId) => {
    if (type === QuantityEnums.SUB) {
      await onUpdateToCartHandler(productId, 40, -1);
      return;
    }
    if (type === QuantityEnums.ADD) {
      await onUpdateToCartHandler(productId, 40, 1);
    }
  };

  const removeProductFromCart = async (productId) => {
    await onUpdateToCartHandler(productId, 40, -99999);
  };

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <div className="cart">
        <Section>
          <Title label="Giỏ hàng" />
          <table className="table cart-table">
            <thead>
              <tr className="cart-table-head">
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data?.products?.length > 0 &&
                data.products.map((product) => (
                  <tr className="cart-table-row" key={product.id}>
                    <th scope="row">{product.id}</th>

                    <td className="cart-table-name">
                      <Link to={`/product/${product.id}`}>{product.name}</Link>
                    </td>
                    <td>
                      <QuantityChange
                        productId={product.id}
                        quantity={
                          data.cart_items.find(
                            (f) => f.product_id === product.id
                          ).qty
                        }
                        onChange={quantityChangeHandler}
                      />
                    </td>
                    <td>
                      {moneyFormat(
                        product.price *
                          data.cart_items.find(
                            (f) => f.product_id === product.id
                          ).qty
                      )}{" "}
                      VND
                    </td>
                    <td className="cart-table-actions">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeProductFromCart(product.id)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="cart-table-bottom">
            <div className="cart-table-total">
              <div>Tổng tiền: {moneyFormat(totalPrice)} VND</div>
            </div>
            <div className="cart-table-checkout mt-4">
              <Link to="/checkout" className="btn btn-primary">
                Thanh toán
              </Link>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default Cart;
