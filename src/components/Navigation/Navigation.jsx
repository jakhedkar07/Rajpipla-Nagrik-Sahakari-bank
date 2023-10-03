import styles from "./navigation.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import React from 'react';
import {Link} from "react-router-dom";
import Contact  from "../Contacts/Contact";
import Vision from "../Vision/Vision";
import Deposits from "../../Deposits/Deposits";
import Financial from "../Financials/Financial";
import FD from "../Fixeddeposit/FD";
import Goldloan from "../Goldloan/Goldloan";
import Houseloan from "../HouseLoan/Houseloan";
import RTGS from "../RTGS/RTGS";
import Locker from "../Locker/Locker";
import DD from "../DD/DD";
import Calculator from "../Calculator/Calculator";
import Savings from "../Savings A/c/Savings";
import Current from "../Current A/c/Current";
import Business from "../Business loan/business";
import Education from "../Edcuation loan/Education";
import Solar from "../Solar/Solar";
import Nsckvp from "../NSCKVP/Nsckvp";
import Recurring from "../Recurring Desposit/Recurring";
const Navigation = () => {
  return (
    <nav> 
      <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" sticky="true">
      <Navbar.Brand>
      
        <Link to="/"><div className={styles.logo}><img src="/images/logo 11.png" /></div></Link>
      
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
      <ul>
          <NavDropdown title="About Bank" id="basic-nav-dropdown">
            <Link to="/History"><NavDropdown.Item href="#action1">Bank History</NavDropdown.Item></Link>
            <Link to="/Founder">  <NavDropdown.Item href="#action2">Our founders and Past directors</NavDropdown.Item></Link>
            <Link to="/Vision"> <NavDropdown.Item href="#action2">Vision and Mission</NavDropdown.Item></Link>
            <NavDropdown.Item href="#action2">List of directors</NavDropdown.Item>
          </NavDropdown>
 <NavDropdown title="Banking" id="basic-nav-dropdown">
     <NavDropdown title="A/C & Deposits" id="loan-submenu" drop="right" style={{ position: 'relative' }}
        alignRight>
        <Link to="/Savings"><NavDropdown.Item href="Savings" menuAlign="right">Savings A/c</NavDropdown.Item></Link>
        <Link to="/Current"><NavDropdown.Item href="Current" menuAlign="right" >Current A/c</NavDropdown.Item></Link>
        <Link to="/Recurring"> <NavDropdown.Item href="CarLoan" menuAlign="right">Recurring Deposits</NavDropdown.Item></Link>
        </NavDropdown>
    <NavDropdown title="Loan" id="loan-submenu" drop="right" style={{ position: 'relative' }}
        alignRight>
        <NavDropdown title="Home Loan" id="loan-submenu" drop="right" style={{ position: 'relative', top: '-100%' }}>
        <Link to="/Houseloan"  ><NavDropdown.Item href="PersonalLoan" menuAlign="right">For Commercial construction</NavDropdown.Item></Link>
        <Link to="/Houseloan1" interestRate={12}><NavDropdown.Item href="PersonalLoan" menuAlign="right">For New construction</NavDropdown.Item></Link>
        <Link to="/Houseloan2 " interestRate={12}><NavDropdown.Item href="PersonalLoan" menuAlign="right">House maintenance</NavDropdown.Item></Link>
        </NavDropdown>
        
        <Link to="/Vehicleloan"><NavDropdown.Item href="HomeLoan" menuAlign="right" >Vehicle Loan</NavDropdown.Item></Link>
        
        <Link to="/Business"> <NavDropdown.Item href="CarLoan" menuAlign="right">Business Loan</NavDropdown.Item></Link>
        <Link to="/Education"> <NavDropdown.Item href="CarLoan" menuAlign="right">Education Loan</NavDropdown.Item></Link>
        <Link to="/Goldloan"> <NavDropdown.Item href="CarLoan" menuAlign="right">Gold Loan</NavDropdown.Item></Link>
        <Link to="/Solar"> <NavDropdown.Item href="CarLoan" menuAlign="right">Solar Loan</NavDropdown.Item></Link>
        <Link to="/Nsckvp"> <NavDropdown.Item href="CarLoan" menuAlign="right">N.S.C.K.V.P</NavDropdown.Item></Link>
        {/* Add more subdropdown items as needed */}
      </NavDropdown>
    </NavDropdown>

            <NavDropdown title="Interest Rates" id="basic-nav-dropdown">
            <Link to="/FD"> <NavDropdown.Item href="Fixed Desposits interest rates">Fixed Desposits interest rates</NavDropdown.Item></Link>
            <NavDropdown.Item href="Loan interest rates">Loan interest rates</NavDropdown.Item>
            </NavDropdown>
     <Link to="/Financial"> <NavLink href="#action1">Financial </NavLink></Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
      <Link to="/RTGS"> <NavDropdown.Item href="#action1">RTGS/NEFT</NavDropdown.Item></Link>
            <Link to="/Locker"><NavDropdown.Item href="#action1">Safe Deposit and locker facility</NavDropdown.Item></Link>
            <Link to="/DD">  <NavDropdown.Item href="#action2">Demand Draft and Pay orders</NavDropdown.Item></Link>
          </NavDropdown>
          <NavDropdown title="Customer Care" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action2">Downloads</NavDropdown.Item>
            <NavDropdown.Item href="#action2">FAQs</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Complaint/Suggestion Form</NavDropdown.Item>
            <Link to="/Calculator"><NavDropdown.Item href="#action2">Loans and Deposit Calculator</NavDropdown.Item></Link>
            <NavDropdown.Item href="#action2">Unclaimed Deposits</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Photo Gallery</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Service Charges</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Why banking with us?</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Annual Reports</NavDropdown.Item>
          </NavDropdown>
          
      <Link to="/Contact" color="black" ><li>Contact </li></Link>
     
        </ul>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    </nav>
  )
}

export default Navigation