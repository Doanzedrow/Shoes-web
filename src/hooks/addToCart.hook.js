import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getCart, updateToCart } from "../redux/cart.slice";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const onUpdateToCartHandler = async (productId, size, quantity) => {
    try {
      await dispatch(
        updateToCart({
          product_id: productId,
          size,
          quantity,
        })
      ).unwrap();
      await dispatch(getCart());
      toast.success(
        quantity > 0 ? "Thêm giỏ hàng thành công" : "Xóa thành công"
      );
    } catch (error) {
      toast.error(error);
    }
  };

  return { onUpdateToCartHandler };
};

export default useAddToCart;
