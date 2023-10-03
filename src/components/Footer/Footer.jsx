import React from 'react';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// In your main CSS or JavaScript file
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1 order-2 order-lg-1">
                        <h1>Your Right Banking <br /> Partner</h1>
                        <p>Build a better life around us</p>
                        {/* <div className="footer-icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div> */}
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2 order-1 order-lg-2" id={styles.middle}>
                        <h2>Address</h2>
                        <h6>RAJPIPLA NAGRIK SAHKARI BANK LTD., Station Road, Rajpipla, D-Narmada. :393145</h6>
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+912612554365">+91 261 2554365, 2554366</a><br />
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+912612554365">+91 261 2554365, 2554366</a><br />
                        <h2>Our GST Number:</h2>
                        <h4>24AAABT0230D1Z9</h4>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3" id={styles.right}>
                        <h5>Quick Links</h5>
                        <a href="/">Branch Network</a><br />
                        <a href="/">Downloads</a><br />
                        <a href="/">Loans/Deposit Calculator</a><br />
                        <a href="/">SSBL IFSC Code List</a><br />
                        <a href="/">Annual Reports</a><br />
                        <a href="/">Unclaimed Deposits</a><br />
                        <a href="/">Photo Gallery</a><br />
                        <a href="/">Service Charges</a><br />
                        <a href="/">Public Holidays</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
