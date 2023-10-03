import React from 'react'
import {Link} from "react-router-dom";
import styles from "./locker.module.css";
const Locker = () => {
  return (
    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Safe Deposit and Locker facility</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Safe Deposit and Locker facility</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    RAJPIPLA NAGRIK SAHAKARI Bank provides Safe Deposit Locker facility to keep your valuables at a Safe & Secured Place. Various sizes of Lockers are available in our Bank.
    </p>
    </div>
    </section>
  )
}

export default Locker