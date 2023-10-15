import React from 'react'
import styles from "./solar.module.css";
import { Link } from 'react-router-dom';

const Solar = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Solar Roof-top loan</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Solar Roof-top loan</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
            <div className={styles.info4}>
                <h2>Rate of Interest :</h2>

                <div className={styles.info5}>
                    <h2>• 3 Years - 11.50%</h2>
                    <div className={styles.info6}>
                        
                        <div className={styles.info7}>
                                <div className={styles.info9}>
                                <div className={styles.info15}>
                                <h2>For the Applicant/s.</h2>
                                </div>
                                <div className={styles.info16}>
                                   
                                    <h2>•Copy of I.T. return(Latest 3 years)</h2> 
                                   
                                    <h2>•Electricity bill</h2>
                                    <h2>•Residential Address Proof.</h2>
                                    <h2>•Proof  of  Residential Property owned by the applicant / member of the family.</h2>
                                    <h2>•Bank A/c Statement for the last six months.</h2>
                                    <h2>•Savings A/c compulsory.</h2>
                                    <h2>•Quotation</h2>
                                </div>
                                <div className={styles.info17}> 
                                <div className={styles.info19}>
                                    <h2>For the Guarantor/s.</h2>
                                </div>
                                <div className={styles.info20}>
                                    <h2>•Photo I.D.</h2>
                                    <h2>•Income Proof.</h2> 
                                    <h2>•Residential Address Proof.</h2> 
                                    <h2>•Proof  of Residential  Property owned in their name.</h2>
                                </div>
                            </div>
                            <div className={styles.info7}>
                            <h2>Note : Subject to vary with time</h2>
                            
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

export default Solar