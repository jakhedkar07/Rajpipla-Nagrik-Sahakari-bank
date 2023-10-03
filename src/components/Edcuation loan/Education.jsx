import React from 'react'
import styles from "./edu.module.css";
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Business loan</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Business loan</h4></li>
    </div>
    </ul>
    </div>
    <div class={styles.information}>
            <div class={styles.info4}>
                <h2>Rate of Interest : for councilor</h2>

                <div class={styles.info5}>
                    <h2>• 10 year- 9%</h2>

        
                    <div class={styles.info6}>
                        
                        <div class={styles.info7}>
                                <div class={styles.info9}>
                                <div class={styles.info15}>
                                    <h2>For the Applicant/s.</h2>
                                </div>
                                <div class={styles.info16}>
                                    <h2>•Income Proof</h2>
                                    <h2>•Copy of I.T. Pan card.</h2> 
                                    <h2>•Present Residential Address Proof.</h2> 
                                    <h2>•Copy of  Sale Agreement in case of purchase of house property.</h2>
                                    <h2>•Copy of  Driving license (In Force).</h2>
                                    <h2>•Residential Address Proof.</h2>
                                    <h2>•Proof  of  Residential Property owned by the applicant / member of the family.</h2>
                                    <h2>•Bank A/c Statement for the last six months.</h2>
                                    <h2>•Statement of A/c for Loan / Advance facility availed from other Bank / F.I.</h2>
                                </div>
                                <div class={styles.info17}> 
                                <div class={styles.info19}>
                                    <h2>For the Guarantor/s.</h2>
                                </div>
                                <div class={styles.info20}>
                                    <h2>•Photo I.D.</h2>
                                    <h2>•Income Proof.</h2> 
                                    <h2>•Residential Address Proof.</h2> 
                                    <h2>•Proof  of Residential  Property owned in their name.</h2>
                                </div>
                                <div class={styles.info21}>
                                    <h2>Note :</h2>
                                </div>
                                <div class={styles.info22}>
                                    <h2>•Title Search Report and Valuation Report from the Advocate and Valuer empaneled by the Bank is required to be produced on or before disbursement of the loan and fees for the same to be paid by the borrower.</h2>
                                    <h2>•Stamp duty attracted for the mortgage deed and other agreement of loan to be paid by the borrower at the prevailing rates.</h2> 
                                    <h2>•Other supportive papers/documents/proofs to be produced, if further  needed and asked by the Bank’s Advocate / Valuer / Bank.</h2> 
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

export default Education