import React from 'react'
import styles from "./business.module.css";
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Business Loan</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Business Loan</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
        <div className={styles.info3}>
           
            <div className={styles.info4}>
                <h2>Rate of Interest :</h2>

                <div className={styles.info5}>
                    <h2>• 10 Years - 11%</h2>
                    <div className={styles.info6}>
                        
                        <div className={styles.info7}>
                                <div className={styles.info9}>
                                <div className={styles.info15}>
                                    <h2>For the Applicant/s.</h2>
                                </div>
                                <div className={styles.info16}>
                                <h2>•MSME licence</h2>
                                <h2>•Copy of I.T. return(Latest 3 years)</h2> 
                                    <h2>•Valuation Report(Authorized Valuer)</h2> 
                                    <h2>• Two Photographs of candidate.</h2>
                                    <h2>•CIBIL Report.</h2>
                                    <h2>• Copy of PAN card/ Aadhar card (proof of recidence).</h2>
                                </div>
                                <div className={styles.info17}> 
                                <div className={styles.info19}>
                                    <h2>For the Guarantor/s.</h2>
                                </div>
                                <div className={styles.info20}>
                                <h2>• Two Photographs</h2>
                                <h2>•Copy of I.T. return(Last 1 year)</h2> 
                                  <h2>• Copy of PAN card/ Aadhar card (proof of recidence).</h2>
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
</div>

    </>
  )
}

export default Business