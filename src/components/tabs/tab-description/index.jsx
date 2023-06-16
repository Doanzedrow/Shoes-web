import React from "react";

function TabDescription({ descriptions }) {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <p>{descriptions}</p>
        </div>
      </div>
    </div>
  );
}

export default TabDescription;
