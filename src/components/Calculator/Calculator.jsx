import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './calculator.module.css';

const Calculator = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(1);
  const [duration, setDuration] = useState('year');
  const [result, setResult] = useState('');

  const calculate = () => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    const simpleInterest = duration === 'year' ? (p * r * t) / 100 : (p * r * t) / 1200;
    const amount = p + simpleInterest;
    setResult(
      `Principal Amount: ${p.toFixed(2)}\nTotal Interest: ${simpleInterest.toFixed(2)}\nTotal Amount: ${amount.toFixed(2)}`
    );
  };

  return (
    <section className={styles.image}>
      <div className={styles.h}>
        <ul className={styles.header}>
          <li>
            <h1>Loan Calculator</h1>
          </li>
          <div className={styles.hh}>
            <Link to="/">
              <li>
                <h4>Home</h4>
              </li>
            </Link>
            <li>
              <h4>/Loan Calculator</h4>
            </li>
          </div>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.inputwrapper}>
          <div className={styles.wrapper}>
            <label htmlFor="principal">Principal(₹):</label>
            <input
              type="number"
              id="principal"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className={styles.wrapper}>
            <label htmlFor="rate">Rate:</label>
            <input
              type="number"
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="time">Time:</label>
        <div className={styles.timewrapper}>
          <input
            type="number"
            id={styles.time}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <select
            name="duration"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option value="year">Year</option>
            <option value="month">Month</option>
          </select>
        </div>
        <button id={styles.btn}onClick={calculate}>Calculate</button>
        <div className={styles.result}>
          <pre>{result}</pre>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
