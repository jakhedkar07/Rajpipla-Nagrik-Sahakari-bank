// src/components/Carousel.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from "./carousel.module.css";


function MyCarousel() {
  
       
  return (
    <>
    
    <div className={styles.cs}>
      <Carousel  showThumbs={false}
      scroll={true}
        showStatus={false}
        showIndicators={true} // Show slide indicators
        infiniteLoop={true} // Enable infinite loop
        centerMode={false} // Center the active slide
        centerSlidePercentage={100}
        autoPlay={true} 
        stopOnHover={true}
        useKeyboardArrows={true}
        showArrows={false}>
        <div>
          <img src="/images/CARLON.png" alt="Image 1" />
        </div>
        <div>
          <img src="/images/CARHOME.png" height={"300px"} alt="Image 2" />
        </div>
        <div>
          <img src="/images/NAGRIC SA A.png" alt="Image 3" />
        </div>
      </Carousel>
    </div> 
   

    <div className={styles.image}>
    <div className={styles.images}>
        <img src="/images/bank.jpeg"  alt="" />
        </div>
        <div className={styles.text}>
        <h2>Welcome to Rajpipla Nagrik Sahakari Bank </h2>
        <p>Established in the year 1982 with an authorized Share Capital of Rs. 25.00 lacs and the paid up Share Capital of Rs. 4.00 lacs The Sarvodaya Sahakari Bank Ltd., Surat is rightly bracketed as one of the leading and top-most co-op. banks of the city. From a small rental place into the centrally airconditioned well equipped premises, Bank had leapfrogged in the year 1991. To meet with the high-tech demand of the time, Bank got fully</p>
        </div>
        <div className={styles.images}>
        <img src="/images/NAGRIK BANK 75 YEAR.png" alt="" />
        </div>
    </div>
    </>
  );
}

export default MyCarousel;
