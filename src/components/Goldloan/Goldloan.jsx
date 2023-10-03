import React from 'react'
import styles from "./goldloan.module.css";
import { Link } from 'react-router-dom';

const Goldloan = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Loan Against Gold</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Loan against gold</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
    <h2>Draw instant loan by pledging Gold Ornaments.</h2>
    <div className={styles.info2}>
        <h2>Loan Amount for Councilor :  Rs. 10.00 Lac</h2>
        <h2>Loan Amount for Non-Councilor :  Rs. 1.00 Lac</h2>
        <div className={styles.info3}>
            <h2>Period :  12 Months.</h2>
            <div className={styles.info4}>
                <h2>Rate of Interest : 8%.* </h2>

                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Goldloan