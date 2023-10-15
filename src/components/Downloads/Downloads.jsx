
import React from 'react';
import styles from "./downloads.module.css";
import {Link} from "react-router-dom";
const Downloads= () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Downloads</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Downloads</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.downloads}>
    <div className={styles.report}>
      <h2>Savings A/c(pay slip)</h2>
      <div className={styles.links}>
      <a href="/images/pdf/saving acc pay slip.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/saving acc pay slip.pdf" target="_blank" download>Download</a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Current A/c form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/current account.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/current account.pdf" target="_blank" download>Download</a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Recurring A/c form</h2>
      <div className={styles.links}>
      <a href="/images/recurring opening.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/path-to-your-pdf-file.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>KYC application form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/kyc form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/kyc form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Fixed deposit form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/F.D spesimen card.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/F.D spesimen card.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Account opening form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/account opening form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/account opening form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Account closing form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/account closing form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/account closing form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>RTGS/NEFT form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/rtgs neft form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/rtgs neft form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Gold loan form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/gold loan form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/gold loan form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Home loan,Business loan & Cash credit</h2>
      <div className={styles.links}>
      <a href="/images/pdf/home loan, business loan and cash credit form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/home loan, business loan and cash credit form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    
    <div className={styles.report}>
      <h2>Locker opening form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/locker aggrement.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/locker aggrement.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Share Purchase form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/share purchase form.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/share purchase form.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Changes in Share form</h2>
      <div className={styles.links}>
      <a href="/images/pdf/form for changes in share.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/form for changes in share.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    <div className={styles.report}>
      <h2>Safe Deposit Chamber</h2>
      <div className={styles.links}>
      <a href="/images/pdf/safe deposit chamber.pdf" target="_blank" rel="noopener noreferrer">
              View PDF
            </a>
      <a href="/images/pdf/safe deposit chamber.pdf" target="_blank" download>Download </a>
      </div>
    </div>
    </div>
   </section>
   </>
  );
}

export default Downloads