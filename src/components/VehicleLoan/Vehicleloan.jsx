import React from 'react'
import styles from "./Vehicleloan.module.css";
import { Link } from 'react-router-dom';

const Vehicleloan = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Vehicle Loan </h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Vehicle Loan </h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
        <div className={styles.info3}>
            <h2>Primary Security : Hypothecation of Vehicle.</h2>
            <div className={styles.info4}>
                <h2>Rate of Interest : For four wheeler loan (commercial)
                </h2>
                <div className={styles.info5}>
                    <h2>• 7 Years - 11.50%</h2>
                    <div className={styles.info6}>
                        <div className={styles.info7}>
                            <h2>Rate of Interest : For four wheeler loan (personal)</h2>
                            <div className={styles.info8}>
                                    <h2>• 7 Years - 8.50%</h2>
                                <div className={styles.info9}>
                                    <h2>Rate of Interest : For three wheeler loan</h2>
                                <div className={styles.info10}>
                                    <h2>• 7 Years - 12.50%</h2>
                                    </div>  
                                    <div className={styles.info9}>
                                    <h2>Rate of Interest : For two wheeler loan (personal)</h2>
                                    </div>
                                <div className={styles.info12}>
                                    <h2>• 5 Years - 13%</h2>
                                    </div>     
                                <div className={styles.info15}>
                                    <h2>For the Applicant/s.</h2>
                                </div>
                                <div className={styles.info16}>
                                   
                                    <h2>•Copy of I.T. return(Latest 3 years)</h2> 
                                   
                                    <h2>•Copy of  Driving license (In Force).</h2>
                                    <h2>•Residential Address Proof.</h2>
                                    <h2>•Proof  of  Residential Property owned by the applicant / member of the family.</h2>
                                    <h2>•Bank A/c Statement for the last six months.</h2>
                                    <h2>•CIBIL Report.</h2>
                                    <h2>•Savings A/c compulsory.</h2>
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
</div>
</div>
    </>
  )
}

export default Vehicleloan