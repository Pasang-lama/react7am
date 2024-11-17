import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    },
  };


function Banner() {

    const bannerData = [
        {
            id: 1,
            bannerText: "NEW STYLE",
            bannerDescription: "Boot's Collection For Men",
            bannerCover: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_2.jpg?v=1613716582"
        },
        {
            id: 2,
            bannerText: "MAN BAGS",
            bannerDescription: "New Men's Collection",
            bannerCover: "https://new-basel2.myshopify.com/cdn/shop/files/highcompress-slider_1.jpg?v=1613716582"
        }
  
    ]

    return (
        <>

<Carousel responsive={responsive}>

            {
                bannerData.map((items, index) => (
                    <div className="banner-items" key={index}>
                        <img src={items.bannerCover} alt=""  className='w-100 img-fluid'/>
                        <div className="banner-content">
                            <div className="banner-text">{items.bannerText}</div>
                            <div className="banner-description">{items.bannerDescription}</div>
                            <a href="">Learn More</a>
                        </div>
                    </div>

                ))

            }
            
</Carousel>;
            </>
    )
}

export default Banner
