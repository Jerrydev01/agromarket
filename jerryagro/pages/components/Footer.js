import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className="footer-container">
            <p>{year} JerryAgro Market All rights reserved.</p>
            <p className="icons">
                <AiFillFacebook />
                <AiFillInstagram />
                <AiOutlineTwitter />
            </p>
        </div>

    )
}

export default Footer