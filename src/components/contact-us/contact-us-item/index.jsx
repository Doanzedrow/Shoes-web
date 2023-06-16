import React from 'react'

function ContactUsItem({ title, description }) {
    return (
        <div>
            <h6 className="text-uppercase">{title}</h6>
            <p>
                {description}
            </p>
        </div>
    )
}

export default ContactUsItem