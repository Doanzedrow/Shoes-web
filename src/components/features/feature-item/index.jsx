import React from 'react';

function FeatureItem({ title, subtitle, iconClass, content }) {
    return (
        <div className="col col-md-4">
            <div className="ps-iconbox">
                <i className={iconClass} />
                <h3>{title}</h3>
                <p className="content-text">{subtitle}</p>
            </div>
            <div className="ps-iconbox-content">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default FeatureItem;
