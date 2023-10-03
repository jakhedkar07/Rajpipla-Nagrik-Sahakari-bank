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
            <h2>• Any person having sufficient repaying capacity.</h2>
                <h2>•For the purpose of Purchase OR Construct a House Property for residence within the District – Surat.</h2>
                <h2>•Loan maximum up to 85 % of the Purchase Cost as per Sale Agreement OR Cost of Construction as per Construction Agreement  in case new Construction OR Valuation by the approved valuer of the Bank which ever is less.</h2>
                <h2>•Loan amount will depend upon the repaying capacity of the applicant and the  worth of the personal guarantees offered.</h2>
                <h2>•Personal Guarantee of at least two persons having income / asset expectable to the Bank.</h2>
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
                                        <h2>• 0.5% frome loan</h2>
                                        <h2>* Service tax applicable*</h2>
                                    <div className={styles.info9}>
                                        <h2>Pre-Payment Charges :</h2>
                                    </div>
                                    <div className={styles.info10}>
                                        <h2>Prepayment Penal Interest@ 2.00% on Balance outstanding for Take over of Housing Loan A/c.</h2>
                                    </div>
                                    <div className={styles.info11}>
                                        <h2>Share Money Contribution : 2.5 % of the Loan Sanctioned.</h2>
                                    </div>
                                    <div className={styles.info12}>
                                        <h2>Tenure For Repayment : Maximum 180 Months, depending upon the age of the applicant/ co-applicants.</h2>
                                    </div>
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
                                        <h2>•Income Proof.</h2>
                                        <h2>•Copy of I.T. Pan card.</h2> 
                                        <h2>•Present Residential Address Proof.</h2> 
                                        <h2>•Copy of  Sale Agreement in case of purchase of house property.</h2>
                                    </div>
                                    <div className={styles.info17}>
                                        <h2>In case of construction :</h2>
                                    </div>
                                    <div className={styles.info18}>
                                        <h2>•A copy of Construction agreement.</h2>
                                        <h2>•A copy of sale-deed of the land.</h2> 
                                        <h2>•A copy of approved plan along with the permission granted by S.M.C.</h2> 
                                        <h2>•Bank A/c Statement for the last six months.</h2>
                                        <h2>•Statement of A/c for Loan / Advance facility availed from other Bank / F.I.</h2>
                                    </div>
                                    <div className={styles.info19}>
                                        <h2>For the Guarantor/s.</h2>
                                    </div>
                                    <div className={styles.info20}>
                                        <h2>•Photo I.D.</h2>
                                        <h2>•Income Proof.</h2> 
                                        <h2>•Residential Address Proof.</h2> 
                                        <h2>•Proof  of Residential  Property owned in their name.</h2>
                                    </div>
                                    <div className={styles.info21}>
                                        <h2>Note :</h2>
                                    </div>
                                    <div className={styles.info22}>
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
    </div>
    </div>
    </>
  )
}

export default Houseloan