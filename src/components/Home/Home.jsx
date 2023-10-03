import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import MyCarousel from '../Carousel/Carousel';
import Card from '../Cards/Cards';
import styles from "./home.module.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



function Home() {
  return (
    <>
    <div>
      <marquee behavior="" direction="right" bgcolor="rgb(0, 0, 75)" color="white">Welcome to nagrik sahkari bank</marquee>
      <MyCarousel/>
      <img src="./images/1.jpg"  style={{
    width: "95%",
    height: "700px",
    margin: "50px auto",
    display: "block", // Center horizontally
    borderRadius: "30px",
  }} alt="" />
  {/* <section className={styles.sect}>
    <div className={styles.text}>
      <header>
    <h1>Total Business 84,71,47,468</h1>
    <h2>Financial Strength (As on 31/03/2023)</h2>
    </header>
    <div className={styles.info}>
      <div style={{padding:"30px"}}>
      <h3>Net Profit</h3>
      <p>33,84,752.12</p>
      </div>
      <div style={{padding:"30px"}}>
      <h3>Reserve Funds</h3>
      <p>4,19,53,569</p>
      </div>
      <div style={{padding:"30px"}}>
      <h3>Loans & Advances</h3>
      <p>38,91,92,777</p>
      </div>
      <div style={{padding:"30px"}}>
      <h3>Deposits</h3>
      <p>68,30,26,702</p>
      </div>
     
      <div style={{padding:"30px"}}>
      <h3>Working Capital</h3>
      <p>84,71,47,468</p>
      </div>
      <div style={{padding:"30px"}}>
      <h3>Share Capital</h3>
      <p>1,03,09,150</p>
      </div>
     
    </div>
    </div>
    <div className={styles.slides}>

    </div>
  </section > */}
      <Card/>
      
    </div>
    </>
  );
}

export default Home
