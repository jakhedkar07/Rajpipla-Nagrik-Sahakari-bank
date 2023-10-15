import React from 'react';
import Calculator from '../Calculator/Calculator';
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// In your main CSS or JavaScript file
import '@fortawesome/fontawesome-free/css/all.min.css';
import Gallery from '../Gallery/Gallery';
import Downloads from '../Downloads/Downloads';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from 'i18next';
const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1 order-2 order-lg-1">
                        <h1>{i18n.t('home.bp')}</h1>
                        <p>{i18n.t('home.bp1')}</p>
                        {/* <div className="footer-icons">
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div> */}
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2 order-1 order-lg-2" id={styles.middle}>
                        <h2>{i18n.t('home.add')}</h2>
                        <h5>{i18n.t('home.addr')} </h5>
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+912612554365">02640-220040</a><br />
                        <FontAwesomeIcon icon={faPhone} /><a href="tel:+912612554365">+91 9909425040</a><br />
                        
                        <h3>{i18n.t('home.gst')}</h3>
                        <h5>24AAABT0230D1Z9</h5>
                        <h3>IFSC CODE:</h3>
                        <h5>GSCB0URNSBL</h5>
                      
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3" id={styles.right}>
                        <h3>{i18n.t('home.ql')}</h3>
                        <Link to="/Downloads"> <a href="/">{i18n.t('navbar.downloads')}</a><br /></Link>
                        <Link to="/Calculator"> <a href="/">{i18n.t('navbar.calculator')}</a><br /></Link>
                        <Link to="/Report"> <a href="/">{i18n.t('navbar.report')}</a><br /></Link>
                        <Link to="/Gallery"><a href="/">{i18n.t('navbar.gallery')}</a><br /></Link>
                        <h3>{i18n.t('home.Rno.')}</h3>
                        <h5>13152/49</h5>
                        <h3>R.B.I.lic.no:</h3>
                        <h5>U.B.D.G.J.876P</h5>
                        
                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(Footer);
