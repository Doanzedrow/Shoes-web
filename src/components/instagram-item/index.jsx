import React from 'react'

function InstagramItem({ imgSrc }) {
    return (
        <img
            alt=""
            className="img-fluid w-50 h-100 m-2"
            src={imgSrc}
        />
    )
}

export default InstagramItem