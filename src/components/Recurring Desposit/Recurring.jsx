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
    <h2>Initial Amount To Open Savings Account</h2>
    <div className={styles.info2}>
        <h2>• Rs.250</h2>
        <div className={styles.info3}>
            <h2>Rate of interest</h2>
            <div className={styles.info4}>
                <h2>• 3%</h2>

                <div className={styles.info5}>
                    <h2>Benefits</h2>
                    <div className={styles.info6}>
                        <h2>• Passbook Facility</h2>
                            <h2>•  NEFT Facility</h2>
                            <h2>• Free SMS Alerts On Request</h2>
                            <h2>• Cheque Book Facility</h2>
                            <h2>• Standing Instructions</h2>
                            <h2>• A/c. view facility on internet.</h2>
                        <div className={styles.info7}>
                            <h2>Documents to be submitted for opening Savings Account</h2>
                            <div className={styles.info8}>
                                <h2>(A) Individual</h2>
                                    <h2>• Recent Photograph of the applicant customer.</h2>
                                    <h2>• Copy of PAN card.</h2>
                                    <h2>• Copy of Photo Identity such as passport, Driving License, Election ID Card or PAN card  Any one of these to be submitted.</h2>
                                    <h2>• Proof of Residence such as Electricity Bill, Gas Bill, Telephone Bill of landline (BSNL), Municipal tax bill and receipt, LIC policy last premium paid notice and receipt Any one of these to be obtained.</h2>
                                    <h2>• If staying in rented premises than copy of rent agreement, or letter from society and copy of proof of resident from above.</h2>
                                <div className={styles.info9}>
                                    <h2>(B) Association of Persons like Association, Trust, Club, Society etc.</h2>
                                        <h2>• Recent Photograph of all the office bearers with designation.</h2>
                                        <h2>• Copy of Registration certificate of competent authority.</h2>
                                        <h2>• Copy of Resolution for opening account with the Bank with a mandate for operation of account.</h2>
                                        <h2>• Copy of Bye-Laws of the Association, club and society. In case of trust, a copy of trust deed to be submitted.</h2>
                                        <h2>• Details of existing Banking arrangement.</h2>
                                        <h2>• Copy of PAN Card for society, Trust, Club etc. and proof of office of address.</h2>
                                        <h2>• Name and address with proof for all the office bearers.</h2>
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

export default Recurring