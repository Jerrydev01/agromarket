import React from 'react'
import { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'
import { urlFor } from '../lib/client'
import { useStateContext } from '../../context/StateContext'

const Cart = () => {
    const cartRef = useRef();
    const { totalQuantities, totalPrice, setShowCart, cartItems } = useStateContext();

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button type="button"
                    className="cart-heading"
                    onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">
                        ({totalQuantities} items)
                    </span>
                </button>
                {cartItems.length < 1 && (
                    <div className="empty-cart">
                        <AiOutlineShoppingCart size={152} />
                        <h3>Your Agro Shopping Cart is Empty</h3>
                        <Link href='/'>
                            <button
                                className="btn"
                                type="button"
                                onClick={() => setShowCart(false)}>
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                )}
                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((cartItem) => (
                        <div className="product" key={cartItem._id}>
                            <img className="cart-product-image"
                                src={urlFor(cartItem?.image[0])} />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{cartItem.name}</h5>
                                    <h4>{cartItem.price}</h4>
                                </div>

                                <div className="flex bottom">
                                    <div>
                                        <p className="quantity-desc">
                                            <span
                                                className="minus"
                                                onClick=""
                                            >
                                                <AiOutlineMinus />
                                            </span>
                                            <span
                                                className="num"
                                                onClick=""
                                            >
                                                0
                                            </span>
                                            <span
                                                className="plus"
                                                onClick=""
                                            >
                                                <AiOutlinePlus />
                                            </span>
                                        </p>
                                    </div>
                                    <button className="remove-item"
                                        onClick=""
                                        type="button">
                                        <TiDeleteOutline />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Cart