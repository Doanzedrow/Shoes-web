import React, { useState } from "react";
import TabDescription from "./tab-description";
import TabDetails from "./tab-detail";
import TabReview from "./tab-review";
import "../../assets/sass/components/product-tab.scss";

function ProductTabs({ descriptions, comments }) {
  const [tabActive, setTabActive] = useState(1);

  const onTabChangeHandler = (tabNum) => {
    setTabActive(tabNum);
  };

  return (
    <>
      <div className="tab-nav gap-4">
        <p
          className={`tab-nav-item ${tabActive === 1 ? "active" : ""}`}
          onClick={() => onTabChangeHandler(1)}
        >
          Descriptions
        </p>
        <p
          className={`tab-nav-item ${tabActive === 2 ? "active" : ""}`}
          onClick={() => onTabChangeHandler(2)}
        >
          Details
        </p>
        <p
          className={`tab-nav-item ${tabActive === 3 ? "active" : ""}`}
          onClick={() => onTabChangeHandler(3)}
        >
          Reviews ({comments.length})
        </p>
      </div>
      <div className="tab-content">
        {tabActive === 1 && <TabDescription descriptions={descriptions} />}
        {tabActive === 2 && <TabDetails />}
        {tabActive === 3 && <TabReview comments={comments} />}
      </div>
    </>
  );
}

export default ProductTabs;
