import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function Checkout() {
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  const [formData, setFormData] = useState({
    address: "",
    tel: "",
    email: "",
    name: "",
    note: "",
  });
  const { address, tel, email, name, note } = formData;
  const inputChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkoutSubmitHandler = (e) => {
    e.preventDefault();

    if (!address || !tel || !email || !name) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    toast.success("Bạn đã đặt hàng thành công");
  };

  useEffect(() => {
    if (user) {
      setFormData((prevState) => ({
        ...prevState,
        name: user.name,
      }));
      setFormData((prevState) => ({
        ...prevState,
        email: user.email,
      }));
    }
  }, [user]);
  return (
    <div>
      <main>
        <section className="checkOut-s">
          <div className="container">
            {/* row */}
            <form className="checkOut-form" onSubmit={checkoutSubmitHandler}>
              <div className="row">
                <div className="col-md-7 input-check">
                  {/* Billing Details */}
                  <div className="billing-details">
                    <div className="section-title">
                      <h3>Địa chỉ người nhận</h3>
                    </div>
                    <div className="form-group">
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={inputChangeHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={inputChangeHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="input"
                        type="text"
                        name="address"
                        placeholder="Địa chỉ"
                        value={address}
                        onChange={inputChangeHandler}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="input"
                        type="tel"
                        name="tel"
                        placeholder="Số điện thoại"
                        value={tel}
                        onChange={inputChangeHandler}
                        required
                      />
                    </div>
                    <div className="order-notes">
                      <textarea
                        className="input"
                        name="note"
                        placeholder="Ghi chú"
                        defaultValue={""}
                        value={note}
                        onChange={inputChangeHandler}
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary center w-100">
                    Hoàn tất
                  </button>
                </div>
                {/* Order Details */}
                <div className="col-md-5 order-details">
                  <div className="section-title text-center">
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="order-summary">
                    <div className="order-col">
                      <div>
                        <strong>Sản phẩm</strong>
                      </div>
                      <div>
                        <strong>Giá</strong>
                      </div>
                    </div>
                    <div className="order-products">
                      <div className="order-col">
                        <div>1x Name</div>
                        <div>1000 VND</div>
                      </div>
                    </div>
                    <div className="order-col">
                      <div>Phí ship: </div>
                      <div>
                        <strong>Miễn phí</strong>
                      </div>
                    </div>
                    <div className="order-col">
                      <div>
                        <strong>Tổng tiền</strong>
                      </div>
                      <div>
                        <strong
                          className="order-total"
                          style={{ fontSize: 20 }}
                        >
                          10000 VND
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Order Details */}
              </div>
            </form>
            {/* /row */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;
