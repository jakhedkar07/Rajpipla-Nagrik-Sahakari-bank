import React from "react";
import styles from "./savings.module.css";
import { Link } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";
import i18n from "i18next";
const Savings = () => {
  return (
    <>
      <div className={styles.h}>
        <ul className={styles.header}>
          <li>
            <h1>{i18n.t("navbar.SA")}</h1>
          </li>
          <div className={styles.hh}>
            <Link to="/">
              <li>
                <h4>{i18n.t("navbar.home")}</h4>
              </li>
            </Link>
            <li>
              <h4>/{i18n.t("navbar.SA")}</h4>
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.information}>
        <div className={styles.info1}>
          <h2>Initial Amount To Open Savings Account | For cheque book</h2>
          <div className={styles.info2}>
            <h2>• Rs.500 | Rs.1000</h2>
            <div className={styles.info3}>
              <h2>Rate of interest</h2>
              <div className={styles.info4}>
                <h2>• 3%</h2>

                <div className={styles.info5}>
                  <h2>Benefits</h2>
                  <div className={styles.info6}>
                    <h2>• NEFT/RTGS Facility</h2>
                    <h2>• Free SMS Alerts On Request</h2>
                    <h2>• Standing Instructions</h2>
                    <h2>• A/c. view facility on mobile</h2>
                    <div className={styles.info7}>
                      <h2>
                        Documents to be submitted for opening Savings Account
                      </h2>
                      <div className={styles.info8}>
                        <h2>(A) Individual</h2>
                        <h2>• Two Photograph of the applicant customer </h2>
                        <h2>
                          • Copy of Aadhar card/Election card/Voter ID/Driving
                          License (address proof) etc. as per KYC norms
                        </h2>
                        <h2>• Copy of PAN card(compulsory) .</h2>
                        <h2>• Nomination Is Compulsory.</h2>
                        <div className={styles.info9}>
                          <h2>(B) Joint Account</h2>
                          <h2>
                            • Two Photograph of candidate(Of each individual){" "}
                          </h2>
                          <h2>
                            • Copy of Aadhar card/Election card/Voter ID/Driving
                            License (address proof) etc. as per KYC norms
                          </h2>
                          <h2>• Copy of PAN card(compulsory) .</h2>
                          <h2>• Nomination Is Compulsory.</h2>
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
  );
};

export default withTranslation()(Savings);
