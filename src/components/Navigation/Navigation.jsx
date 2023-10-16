import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
import i18n from "i18next";
import { withTranslation } from "react-i18next";

const Navigation = ({ t }) => {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    // Toggle between Gujarati and English
    const newLanguage = i18n.language === "en" ? "gujarati" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  const[expanded, isExpanded]=useState("false");
  return (
    
    <>
      <nav >
      <Navbar
       collapseOnSelect
        expand="xxl"
        bg="light"
        fixed="top"
        sticky="true"
        className="navbar-expand-xxl"
        expanded={expanded}
      >
        <Navbar.Brand>
          <Link to="/">
            <div className={styles.logo}>
              {" "}
              <img className={styles.logoImage} src="./images/logo.png"/>
            </div>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={styles.togglebutton}
          onClick={()=>isExpanded(!expanded)}
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
      
        >
          <Nav className="ml-auto">
            <ul className={styles.xxlnav}>
              <Nav.Item>
                <button onClick={toggleLanguage}>
                  {i18n.t("button.toggleLanguage")}
                </button>
              </Nav.Item>
                <NavDropdown title={t("navbar.about")} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/History" >
                    {t("navbar.History")}
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/Founder">
                    {t("navbar.founder")}
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/Vision">
                    {t("navbar.vision")}
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/List">
                    {t("navbar.list")}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t("navbar.banking")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown
                    title={t("navbar.ac&d")}
                    drop="right"
                    style={{ position: "relative" }}
                    className={styles["sub-dropdown-item"]}
                  >
                    <NavDropdown.Item as={Link} to="/Savings">
                      {t("navbar.SA")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Current">
                      {t("navbar.CA")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Recurring">
                      {t("navbar.RA")}
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title={t("navbar.loan")}
                    id="loan-submenu"
                    drop="right"
                    style={{ position: "relative" }}
                    className={styles["sub-dropdown-item"]}
                    alignRight
                  >
                    <NavDropdown
                      title={t("navbar.HL")}
                      id="loan-submenu"
                      drop="right"
                      style={{ position: "relative", top: "-100%" }}
                    >
                      <NavDropdown.Item
                        as={Link}
                        to="/Houseloan"
                        interestRate={12}
                      >
                        {t("navbar.HL1")}
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        as={Link}
                        to="/Houseloan1"
                        interestRate={12}
                      >
                        {t("navbar.HL2")}
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        as={Link}
                        to="/Houseloan2"
                        interestRate={12}
                      >
                        {t("navbar.HL3")}
                      </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown.Item as={Link} to="/Vehicleloan">
                      {t("navbar.VL")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Business">
                      {t("navbar.BL")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Education">
                      {t("navbar.EL")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Goldloan">
                      {t("navbar.GL")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Solar">
                      {t("navbar.SL")}
                    </NavDropdown.Item>

                    <NavDropdown.Item as={Link} to="/Nsckvp">
                      {t("navbar.NS")}
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown>

                <NavDropdown
                  title={t("navbar.interestRates")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/FD">
                    {t("navbar.FD")}
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/LIR">
                    {t("navbar.LN")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Link to="/Financial" eventKey="1" onClick={()=>isExpanded(false)}>
                  <li>{t("navbar.financial")} </li>
                </Link>

                <NavDropdown
                  title={t("navbar.services")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/RTGS">
                    {t("navbar.RN")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Locker">
                    {t("navbar.SD")}
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title={t("navbar.customerCare")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/Downloads">
                    {t("navbar.downloads")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Calculator">
                    {t("navbar.calculator")}
                  </NavDropdown.Item>

                  <NavDropdown title={t("navbar.g")} className="px-2 fs-5 ">
                    <NavDropdown.Item as={Link} to="/Gallery">
                      {t("navbar.gallery")}
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/Rgallery">
                      {t("navbar.rgallery")}
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown.Item as={Link} to="/Why">
                    {t("navbar.why")}
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Report">
                    {t("navbar.report")}
                  </NavDropdown.Item>
                </NavDropdown>

                <Link to="/Contact" eventKey="1" onClick={()=>isExpanded(false)}>
                  <li>{t("navbar.contact")} </li>
                </Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default withTranslation()(Navigation);
