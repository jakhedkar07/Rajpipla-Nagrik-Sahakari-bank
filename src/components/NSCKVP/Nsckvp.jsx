import React from 'react'
import styles from "./nsckvp.module.css";
import { Link } from 'react-router-dom';

const Nsckvp = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Loan Against N.S.C./K.V.P</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Loan Against N.S.C./K.V.P</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
            <div className={styles.info4}>
                <h2>Rate of Interest : For Member</h2>

                <div className={styles.info5}>
                    <h2>• 12%</h2>

                    <div className={styles.info6}>
                        <h2>Rate of Interest : For Nominal Member</h2>
                    </div>
                        <div className={styles.info7}>
                            <h2>• 14%</h2>
                        </div>
                    <div className={styles.info6}>
                        
                        <div className={styles.info7}>
                                <div className={styles.info9}>
                                <div className={styles.info15}>
                                    <h2>For the Applicant/s.</h2>
                                </div>
                                <div className={styles.info16}>
                                    
                                    <h2>•Savings Account Compulsory</h2>
                                </div>
                                <div className={styles.info17}> 
                               
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

export default Nsckvp