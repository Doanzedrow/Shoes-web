import React from "react";
import FeatureItem from "./feature-item";

function Features() {
  return (
    <section className="features">
      <div className="container-features container">
        <div className="row gx-8">
          <FeatureItem
            iconClass="fa-regular fa-credit-card"
            title="Cam Kết chính hãng"
            subtitle="100 % Authentic"
            content="Sản phẩm chính hãng từ Châu Âu, Châu Mỹ..."
          />

          <FeatureItem
            iconClass="fa-solid fa-truck-fast"
            title="Giao hàng hỏa tốc"
            subtitle="Express delivery"
            content="SHIP hỏa tốc 1h nhận hàng trong nội thành HCM"
          />

          <FeatureItem
            iconClass="fa-solid fa-truck-fast"
            title="Hỗ trợ 24/24"
            subtitle="Supporting 24/24"
            content="123456789"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
