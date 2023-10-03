import React from 'react';
import styles from "./RTGS.module.css";
import {Link} from "react-router-dom";
const RTGS = () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>RTGS/NEFT</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/RTGS/NEFT</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    Transfer your funds to anywhere in India. Beneficiary Accounts will get credit as per RTGS / NEFT settlement cycle (approx. 2 hours). You can transfer your funds more than Rs. 2 Lacs with Real Time Gross Settlement (RTGS). There is not ceiling limit for NEFT.
You need to fill details of Beneficiary Bank like IFS Code, Beneficiary Account No., Beneficiary Name and Remittance Amount in RTGS/NEFT fund transfer form.
    </p>
    </div>
    </section>
   
    </>
  )
}

export default RTGS