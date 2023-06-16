import React from 'react';
import InstagramItem from '../instagram-item';
import ContactUsItem from '../contact-us/contact-us-item';

function Footer() {
    return (
        <footer className="mt-5 py-5">
            <div className="row container mx-auto pt-5">
                <div className="footer-one col-lg-3 col-md-6 col-12">
                    <img
                        alt=""
                        className="img-fluid w-50 h-50"
                        src="../../assets//img/logo_ft.png"
                    />
                    <p className="pt-3">
                        Hãy đến với Shoe Store nơi bạn tìm thấy đam mê của chính
                        mình. Vào đặt hàng ngay để có những đôi giày hợp với
                        phong cách của bạn
                    </p>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Featured</h5>
                    <ul className="text-uppercase list-unstyled">
                        <li>
                            <a href="/">TRANG CHỦ</a>
                        </li>
                        <li>
                            <a href="#product-new">SẢN PHẨM MỚI</a>
                        </li>
                        <li>
                            <a href="#product-hot">BÁN CHẠY NHẤT</a>
                        </li>
                        <li>
                            <a href="/">NIKE</a>
                        </li>
                        <li>
                            <a href="/">ADDIAS</a>
                        </li>
                        <li>
                            <a href="/">JORDAN</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
                    <h5 className="pb-2">Contact Us</h5>
                    <ContactUsItem title="Address" description="42A Đường An Bình, Phường An Bình, Thành Phố Dĩ An, Tỉnh Bình Dương" />
                    <ContactUsItem title="Phone" description="0968673591" />
                    <ContactUsItem title="Email" description="shoes117@gmail.com" />
                </div>
                <div className="footer-one col-lg-3 col-md-6 col-12 mb-4">
                    <h5 className="pb-2">Instagram</h5>
                    <div className="row">
                        <InstagramItem imgSrc="../../assets/img/slider1.png" />
                        <InstagramItem imgSrc="../../assets/img/slider2.png" />
                        <InstagramItem imgSrc="../../assets/img/slider3.png" />
                    </div>
                </div>
            </div>
            <div className="copyright mt-5">
                <div className="row container mx-auto">
                    <div className="col-lg-6 col-md-6 col-12 text-nowrap mb-2">
                        <p>© Bản quyền thuộc về SHOES.VN</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <a href="/">
                            <i className="fa-brands fa-facebook" />
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-twitter" />
                        </a>
                        <a href="/">
                            <i className="fa-brands fa-instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
