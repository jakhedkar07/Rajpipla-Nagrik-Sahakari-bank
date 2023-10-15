import styles from "./navigation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Contact  from "../Contacts/Contact";
import Home from "../Home/Home";
// import HomeGuj from "../Guj/Home/HomeGuj";
import Vision from "../Vision/Vision";
import Deposits from "../../Deposits/Deposits";
import Financial from "../Financials/Financial";
import FD from "../Fixeddeposit/FD";
import Goldloan from "../Goldloan/Goldloan";
import Houseloan from "../HouseLoan/Houseloan";
import RTGS from "../RTGS/RTGS";
import Locker from "../Locker/Locker";
import i18n from 'i18next';
import Calculator from "../Calculator/Calculator";
import Savings from "../Savings A/c/Savings";
import Current from "../Current A/c/Current";
import Business from "../Business loan/business";
import Education from "../Edcuation loan/Education";
import Solar from "../Solar/Solar";
import Nsckvp from "../NSCKVP/Nsckvp";
import Recurring from "../Recurring Desposit/Recurring";
import List from "../List Of Directors/List";
import LIR from "../Loan interest rates/LIR";
import Gallery from "../Gallery/Gallery";
import Report from "../Report/Report";
import Downloads from "../Downloads/Downloads";
import Why from "../WBU/Why";
import { withTranslation } from 'react-i18next';
import Rgallery from "../../Rajpipla photos/Rgallery";

const Navigation = ({ t}) => {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    // Toggle between Gujarati and English
    const newLanguage = i18n.language === 'en' ? 'gujarati' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
    

    <nav> 
     
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" sticky="true">
      <Navbar.Brand>
      
        <Link to="/"><div className={styles.logo}> <img className={styles.logoImage} src="./images/logo.png" /></div></Link>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.togglebutton} />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <ul>
      <Nav.Item>
      <button onClick={toggleLanguage}>{i18n.t('button.toggleLanguage')}</button>
    </Nav.Item>
          <NavDropdown title={t('navbar.about')} id="basic-nav-dropdown">
            <Link to="/History"><NavDropdown.Item href="#action1">{t('navbar.History')}</NavDropdown.Item></Link>
            <Link to="/Founder">  <NavDropdown.Item href="#action2">{t('navbar.founder')}</NavDropdown.Item></Link>
            <Link to="/Vision"> <NavDropdown.Item href="#action2">{t('navbar.vision')}</NavDropdown.Item></Link>
            <Link to="/List"><NavDropdown.Item href="#action2">{t('navbar.list')}</NavDropdown.Item></Link>
          </NavDropdown>
 <NavDropdown title={t('navbar.banking')} id="basic-nav-dropdown">
     <NavDropdown title={t('navbar.ac&d')} drop="right" style={{ position: 'relative' }}  className={styles['sub-dropdown-item']}
       >
        <Link to="/Savings"><NavDropdown.Item href="Savings" menuAlign="right">{t('navbar.SA')}</NavDropdown.Item></Link>
        <Link to="/Current"><NavDropdown.Item href="Current" menuAlign="right" >{t('navbar.CA')}</NavDropdown.Item></Link>
        <Link to="/Recurring"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.RA')}</NavDropdown.Item></Link>
        </NavDropdown>
    <NavDropdown title={t('navbar.loan')} id="loan-submenu" drop="right" style={{ position: 'relative' }} className={styles['sub-dropdown-item']}
        alignRight>
        <NavDropdown title={t('navbar.HL')} id="loan-submenu" drop="right" style={{ position: 'relative', top: '-100%' }}>
        <Link to="/Houseloan"  ><NavDropdown.Item href="PersonalLoan" menuAlign="right">{t('navbar.HL1')}</NavDropdown.Item></Link>
        <Link to="/Houseloan1" interestRate={12}><NavDropdown.Item href="PersonalLoan" menuAlign="right">{t('navbar.HL2')}</NavDropdown.Item></Link>
        <Link to="/Houseloan2 " interestRate={12}><NavDropdown.Item href="PersonalLoan" menuAlign="right">{t('navbar.HL3')}</NavDropdown.Item></Link>
        </NavDropdown>
        
        <Link to="/Vehicleloan"><NavDropdown.Item href="HomeLoan" menuAlign="right" >{t('navbar.VL')}</NavDropdown.Item></Link>
        
        <Link to="/Business"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.BL')}</NavDropdown.Item></Link>
        <Link to="/Education"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.EL')}</NavDropdown.Item></Link>
        <Link to="/Goldloan"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.GL')}</NavDropdown.Item></Link>
        <Link to="/Solar"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.SL')}</NavDropdown.Item></Link>
        <Link to="/Nsckvp"> <NavDropdown.Item href="CarLoan" menuAlign="right">{t('navbar.NS')}</NavDropdown.Item></Link>
        {/* Add more subdropdown items as needed */}
      </NavDropdown>
    </NavDropdown>

            <NavDropdown  title={t('navbar.interestRates')} id="basic-nav-dropdown">
            <Link to="/FD"> <NavDropdown.Item href="Fixed Desposits interest rates">{t('navbar.FD')}</NavDropdown.Item></Link>
            <Link to="/LIR"> <NavDropdown.Item href="Loan interest rates">{t('navbar.LN')}</NavDropdown.Item></Link>
            </NavDropdown>
     <Link to="/Financial"> <NavLink href="#action1"> {t('navbar.financial')} </NavLink></Link>
      <NavDropdown  title={t('navbar.services')} id="basic-nav-dropdown">
      <Link to="/RTGS"> <NavDropdown.Item href="#action1">{t('navbar.RN')}</NavDropdown.Item></Link>
            <Link to="/Locker"><NavDropdown.Item href="#action1">{t('navbar.SD')}</NavDropdown.Item></Link>
           
          </NavDropdown>
          <NavDropdown  title={t('navbar.customerCare')} id="basic-nav-dropdown">
          <Link to="/Downloads">  <NavDropdown.Item href="#action2"> {t('navbar.downloads')}</NavDropdown.Item></Link>
            
            <Link to="/Calculator"><NavDropdown.Item href="#action2">{t('navbar.calculator')}</NavDropdown.Item></Link>
            <NavDropdown title={t('navbar.g')} drop="right" style={{ position: 'relative' }} 
       className={styles['sub-dropdown-item']}>
            <Link to="/Gallery"><NavDropdown.Item href="#action2"> {t('navbar.gallery')}</NavDropdown.Item></Link> 
            <Link to="/Rgallery"><NavDropdown.Item href="#action2"> {t('navbar.rgallery')}</NavDropdown.Item></Link>
             </NavDropdown>
         
            <Link to="/Why"><NavDropdown.Item href="#action2"> {t('navbar.why')}</NavDropdown.Item></Link> 
            <Link to="/Report"><NavDropdown.Item href="#action2"> {t('navbar.report')}</NavDropdown.Item></Link>
          </NavDropdown>
          
      <Link to="/Contact" color="black" ><li>{t('navbar.contact')} </li></Link>
     
        </ul>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </nav>
    </>
  )
}

export default withTranslation()(Navigation);