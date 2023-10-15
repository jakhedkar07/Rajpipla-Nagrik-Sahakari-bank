import React from 'react'
import styles from "./current.module.css";
import { Link } from 'react-router-dom';

const Current = () => {
  return (
    <>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Current Account</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Current A/c</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.information}>
<div className={styles.info1}>
    <h2>Initial Amount To Open Current Account</h2>
    <div className={styles.info2}>
        <h2>• Rs.2500</h2>
        <div className={styles.info3}>
            <h2>Rate of interest</h2>
            <div className={styles.info4}>
                <h2>0%</h2>

                <div className={styles.info5}>
                    <h2>Benefits</h2>
                    <div className={styles.info6}>
                    
                            <h2>•  NEFT/RTGS Facility</h2>
                            <h2>• Free SMS Alerts On Request</h2>
                            <h2>• Cheque Book Facility</h2>
                            <h2>• Standing Instructions </h2>
                            <h2>• A/c. view facility on mobile.</h2>
                        <div className={styles.info7}>
                            <h2>Documents to be submitted for opening Current Account</h2>
                            <div className={styles.info8}>
                            <h2>(A) Individual</h2>
                                    <h2>• Two Photograph of the applicant proprietor/partners </h2>
                                    <h2>• Copy of Aadhar card/Election card/Voter ID/Driving License (address proof) etc. as per KYC norms</h2>
                                    <h2>• Copy of PAN card compulsory .</h2>
                                    <h2>• Nomination Is Compulsory.</h2>
                                    <h2>• MSME Certificate/GST Certificate</h2>
                                <div className={styles.info9}>
                                <h2>(B) Joint Account</h2>
                                        <h2>• Two Photograph of candidate(Of each individual) </h2>
                                        <h2>• Copy of Aadhar card/Election card/Voter ID/Driving License (address proof) etc. as per KYC norms</h2>
                                    <h2>• Copy of PAN card compulsory .</h2>
                                        <h2>• Nomination Is Compulsory.</h2>
                                        <h2>• MSME Certificate/GST Certificate</h2>
                                       
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
</div>
    </>
  )
}

export default Current