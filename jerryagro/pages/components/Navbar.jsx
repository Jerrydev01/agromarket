import React from 'react'

import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <p className="logo">
                <Link href="/">
                    Jerry Agro
                </Link>
            </p>
            <div>
                <button className="cart-icon"
                    onClick=""
                    type="button"
                >
                    <AiOutlineShopping />
                    <span className="cart-item-qty">1</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar