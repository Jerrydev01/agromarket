// this page renders the template to the browser window
import React from 'react';

import HeroBanner from './components/HeroBanner';
import FooterBanner from './components/FooterBanner';
import { client } from '../lib/client';

const HomePage = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {/* {console.log(bannerData)} */}
      <div className="products-heading">
        <h2>Best Selling <span>AgroProducts</span></h2>
        <p>Variety of products available</p>
      </div>
      <div className="products-container">
        {products?.map(product => product.name)}
      </div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }

}


export default HomePage
