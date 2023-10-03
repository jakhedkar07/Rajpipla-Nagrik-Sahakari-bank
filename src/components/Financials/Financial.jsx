import React from 'react'
import styles from "./financial.module.css";
import { Link } from 'react-router-dom';

const Financial = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Financial highlights</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Financial Highlights</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.I}>
    <img  src="./images/FA.png" alt="" />
    </div>
    </>
  )
}

export default Financial