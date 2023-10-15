import React from 'react'
import styles from "./houseloan.module.css";
import { Link } from 'react-router-dom';

const Houseloan = (props) => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>{props.title} </h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Home Loan </h4></li>
    </div>
    </ul>
    </div>
    
    <div className={styles.information}>
    <div className={styles.info1}>
        <h2>Eligibility Criteria:</h2>
        <div className={styles.info2}>
          
            <div className={styles.info3}>
                <h2>Primary Security : Mortgage of the House Property.</h2>
                <div className={styles.info4}>
                    <h2>Rate of Interest :</h2>

                    <div className={styles.info5}>
                        <h2>{props.tenure} - {props.interestrate}</h2>
                        <div className={styles.info6}>
                            <h2>Interest Scheme once selected at the time of disbursement can’t be changed afterwards. </h2>
                            <div className={styles.info7}>
                                <h2>Processing Charges :</h2>
                                <div className={styles.info8}>
                                        <h2>• 0.50% of loan</h2>
                                       
                                  
                                    <div className={styles.info13}>
                                        <h2>How to apply :</h2>
                                    </div>
                                    <div className={styles.info14}>
                                    <h2>An application in Bank’s Prescribed Form duly filled up having been affixed with the Photographs of  the applicant/s and guarantors along with their signatures to be supported by the papers / documents detailed as under.</h2>
                                    </div>
                                    <div className={styles.info15}>
                                        <h2>For the Applicant/s.</h2>
                                    </div>
                                    <div className={styles.info16}>
                                    <h2>•Income Proof(Latest 3 year IT return)</h2>
                                    <h2>•Copy of Pan card/ Adhar card.</h2> 
                                    <h2>•Copy Of Property Card.</h2> 
                                    <h2>•Immovable property Documents.</h2>
                                    <h2>•K.Y.C . Documents</h2>
                                    <h2>•2 Passport size photo's of applicent.</h2>
                                    
                                    <h2>•Latest CIBIL Report</h2>
                                    <h2>•Authority approved plan and estimate </h2>
                                    <h2>•Guarantor Property Card(copy).</h2>
                                    <h2>• Guarantor Income text return (last year)</h2>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className={styles.info7}>
                            <h2>Note</h2>
                            <div className={styles.info8}>
                               <h2>Subject to vary with time </h2>
                                   
                            
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

export default Houseloan