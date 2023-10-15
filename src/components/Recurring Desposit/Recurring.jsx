import React from 'react'
import styles from "./recurring.module.css";
import { Link } from 'react-router-dom';

const Recurring = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Recurring Account</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Recurring A/c</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
    <h2>Initial Amount To Open Recurring Account</h2>
    <div className={styles.info2}>
        <h2>• Rs.100</h2>
        <div className={styles.info3}>
            <h2>Rate of interest</h2>
            <div className={styles.info4}>
                <h2>• 1 Year : 6.75%</h2>
                <h2>• 2 Year : 7%</h2>
                <h2>• 3 Year : 7%</h2>
                <h2>• 4 Year : 7.10%</h2>
                <h2>• 5 Year : 7%</h2>

                <div className={styles.info5}>
                    <h2>Benefits</h2>
                    <div className={styles.info6}>
                        <h2>• Passbook Facility</h2>
                         
                         
                            <h2>• Standing Instructions</h2>
                            <h2>• A/c. view facility on mobile</h2>
                        <div className={styles.info7}>
                            <h2>Documents to be submitted for opening Recurring Account</h2>
                            <div className={styles.info8}>
                               <h2>Savings Account compulsory</h2>
                                   
                            
                            </div>
                        </div>
                        <div className={styles.info7}>
                            <h2></h2>
                            <div className={styles.info8}>
                               <h2> </h2>
                                   
                            
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default Recurring