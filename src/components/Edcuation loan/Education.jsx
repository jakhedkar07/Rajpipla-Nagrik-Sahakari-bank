import React from 'react'
import styles from "./edu.module.css";
import { Link } from 'react-router-dom';

const Education = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Education Loan</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Eduction Loan</h4></li>
    </div>
    </ul>
    </div>
    <div class={styles.information}>
            <div class={styles.info4}>
                <h2>Rate of Interest : for member</h2>

                <div class={styles.info5}>
                    <h2>• 10 year- 9%</h2>

        
                    <div class={styles.info6}>
                        
                        <div class={styles.info7}>
                                <div class={styles.info9}>
                                <div class={styles.info15}>
                                    <h2>For the Applicant/s.</h2>
                                </div>
                                <div class={styles.info16}>
                                <h2>•Proof of Identity (Any one) : Aadhar card/Pan Card etc.</h2>
                                    <h2>•Proof of Residence/ Address (Any one): Passport mandatory in case of Studies Abroad</h2> 
                                    <h2>•Academic Records:</h2> 
                                    <h2>•10th Result & 12th Result, Graduation Result- Semester-wise (if applicable)</h2>
                                    <h2>•Concerned educational document's</h2>
                                    <h2>•Proof of admission: Offer Letter or Admission Letter from the Institution. Conditional admission letter may be considered in case of studies abroad.</h2>
                                    <h2>•Statement of cost of study/ Schedule of expenses.</h2>
                                    <h2>•College / Course prospectus (if available).</h2>
                                    <h2>• 2 passport-size photographs</h2>
                                    <h2>•CIBIL Report.</h2>
                                    
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

export default Education