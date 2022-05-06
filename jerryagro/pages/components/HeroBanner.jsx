import React from 'react'
import Link from 'next/link';

import { urlFor } from '/lib/client'

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
                alt="tomatoes"
            />
            <div>
                <Link href="/product/ID">
                    <button type="button">
                        BUTTON TEXT
                    </button>
                </Link>
                <div className="desc">
                    <h5>Description</h5>
                    <p>DESCRIPTION</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner