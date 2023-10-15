import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MyCarousel from '../Carousel/Carousel';
import Carousel from 'react-bootstrap/Carousel';
import Card from '../Cards/Cards';
import styles from "./home.module.css"
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Link} from "react-router-dom";
import Locker from '../Locker/Locker';

function Home({ t }) {
  return (
    <>
    <div className={styles.body}>
      
      <MyCarousel/>
      <img src="./images/1.jpg"  style={{
    width: "95%",
    height: "700px",
    margin: "50px auto",
    objectFit:"cover",
    display: "block", // Center horizontally
    borderRadius: "30px",
  }} alt="" />
  <section className={styles.sect}>
    <div className={styles.text}>
      <header>
    <h1>{i18n.t('home.tb')}</h1>
    <h2>{i18n.t('home.tb1')}</h2>
    </header>
    <div className={styles.info}>
      <div >
      <h3>Net Profit</h3>
      <p>₹ 33,84,752.12</p>
      </div>
      <div >
      <h3>Reserve Funds</h3>
      <p>₹ 4,19,53,569</p>
      </div>
    
    
    
      <div >
      <h3>Deposits</h3>
      <p>₹ 68,30,26,702</p>
      </div>
     
      <div >
      <h3>Working Capital</h3>
      <p>₹ 84,71,47,468</p>
      </div>
      <div >
      <h3>Share Capital</h3>
      <p>₹ 1,03,09,150</p>
      </div>
      <div >
      <h3>Share Holder</h3>
      <p>₹ 12,422</p>
      </div>
      <div>
      <h3>Loans & Advances</h3>
      <p>₹ 38,91,92,777</p>
      </div>
     
    </div>
    </div>
    <div className={styles.slides}>
    <Carousel>
      <Carousel.Item>
       <img src="./images/NAGRIK BANK 75 YEAR.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/28.jpg" alt="" />
      
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/29.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/21.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/22.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/23.jpg" alt="" />
        
      </Carousel.Item> <Carousel.Item>
      <img src="./images/24.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/25.jpg" alt="" />
        
      </Carousel.Item>
      <Carousel.Item>
      <img src="./images/26.jpg" alt="" />
        
      </Carousel.Item>
    </Carousel>
    </div>
  </section >
      <Card/>
      
    </div>
    </>
  );
}

export default withTranslation()(Home)
