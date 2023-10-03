
import React from 'react';
import styles from './cards.module.css';

function Card({ imageSrc, title, description }) {
  return (
    <div className={styles.cards}>
        <div className={styles.card}>
      <img src="./images/locker.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>Locker Facilty</h2>
      <p className={styles.cardDescription}>Bank provides safe deposit locker facilities to keep your valuables at a safe and secured place.
</p>
<button className={styles.Button}>Read more</button>
      </div>
      <div className={styles.card}>
      <img src="./images/deposit.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>Unclaimed Deposits</h2>
      <p className={styles.cardDescription}>We have displayed a list of unclaimed deposits / inoperative accounts of the bank on our website. Please check it.
      </p>
      <button className={styles.Button}>Read more</button>
      </div>
      <div className={styles.card}>
      <img src="./images/report.jpg" alt={title} className={styles.cardImage} />
      <h2 className={styles.cardTitle}>Annual Report</h2>
      <p className={styles.cardDescription}>To know bank's progress during financial year and new activities of the bank, download our annual report.</p>
      <button className={styles.Button}>Read more</button>
      </div>
    </div>
  );
}

export default Card;
