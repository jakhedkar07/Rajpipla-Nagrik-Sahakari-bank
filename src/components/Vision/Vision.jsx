import React from 'react';
import styles from "./vision.module.css";
import {Link} from "react-router-dom";
const Vision = () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Vision and Mission</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Vision and Mission</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    To delivering Banking products by consistent improvement of technology, process, more accessible and in a comfortable environment through committed and motivated workforce. To Provide delightful banking experience to all its customers.

Bank is planing for all it services become online in future, trying for UPI and internet banking system.
    </p>
    </div>
    </section>
   
    </>
  )
}

export default Vision