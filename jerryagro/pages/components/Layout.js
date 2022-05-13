import React from 'react'
import Head from 'next/head'

import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <head>
                <title>Jerrydev Agro Store</title>
            </head>
            <header>
                <Navbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            <div>
                <footerBanner />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout