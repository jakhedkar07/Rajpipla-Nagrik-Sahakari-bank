import React from 'react';
import styles from "./history.module.css";
import {Link} from "react-router-dom";
const History = () => {
  return (
    <>

    <section className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>History</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/History</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
    <p >
    Late Chandulal Vyas was pioneer of nagarik sahakari bank to establish cooperative activities of Rajpipla town and became first president of RNSBL.He was a High Court Pleader. Apart from this, he served as Deputy Diwan of Rajpipla State.After the independence of the country, he served as the President of Rajpipla Municipality and made an invaluable contribution to the development of the town. With his foresight, the vegetable market in Rajpipala was organized in his own way. In the first phase, he used his unique ideas to grow the bank out of financial difficulties.
    </p>
    </div>
    </section>
   
    </>
  )
}

export default History