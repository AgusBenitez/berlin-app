import React from 'react';
import '../Banner/Banner.css';
import CardPromo from '../CardPromo/CardPromo';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='bannerIntro'><h2>OFERTAS DEL MES</h2></div>
            <div className='bannerCards'>
                <CardPromo />
                <CardPromo />
                <CardPromo />
            </div>
        </div>
    )
}

export default Banner
