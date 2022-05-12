import React from 'react'
import Link from 'next/link';

import { urlFor } from '../lib/client'
import Logo from '../components/img/logo.svg'

function HeroBanner({ heroBanner }) {
    return (
        <div className="hero-banner-container">
            <p className="tomato-img">
                {heroBanner.smallText}
            </p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            <img
                className="hero-banner-image"
                src={urlFor(heroBanner.image)}
                alt="mega-pack"
            />
            <div>
                <Link href="/product/mega-pack-sales">
                    <button type="button">
                        {heroBanner.buttonText}
                    </button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner