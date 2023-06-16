import React from "react";
import Banner from "../../components/banner";
import Features from "../../components/features";
import ProductHot from "../../components/product-hot";
import ProductNew from "../../components/product-new";
import ScrollToTop from "../../components/scroll-top";
import Sidebar from "../../components/sidebar";
import { useSelector } from "react-redux";
import { RoleEnums } from "../../enums/role.enums";
import { Navigate } from "react-router-dom";
import Loading from "../../components/loading";
function Home() {
  const { roles } = useSelector((state) => state.auth);

  if (roles.includes(RoleEnums.Admin)) {
    return <Navigate to={"/admin/user"} replace />;
  }

  return (
    <>
      <Sidebar />
      <main>
        <Banner />
        <Features />
        <ProductNew />
        <ProductHot />
      </main>
      <ScrollToTop />
    </>
  );
}

export default Home;
