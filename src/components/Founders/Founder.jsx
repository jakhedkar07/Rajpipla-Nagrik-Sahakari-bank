import React from 'react'
import {Link} from "react-router-dom";
import styles from "./founder.module.css"

export const Founder = () => {
  return (
  <div className={styles.image}>
    <div className= {styles.h}>
      <ul  className={styles.header}>
    <li><h1>Our Founders</h1></li>
<div  className={styles.hh}>
    <Link to="/"><li><h4>Home</h4></li></Link><li><h4>/Our Founders and Past directors</h4></li>
    </div>
    </ul>
    </div>
    <div className={styles.para}>
        <div className={styles.photo}>
        <img src="./images/f1.png" alt="" />
       <h5> Late Chandulal Mansukhram Vyas <br></br>
 First president from 1950 to 1956</h5>
        </div>
    <p >
    Late Chandulal Vyas was pioneer of Nagarik Sahakari bank to establish cooperative activities of Rajpipla town and became first president of RNSBL.He was a High Court Pleader. Apart from this, he served as Deputy Diwan of Rajpipla State.After the independence of the country, he served as the President of Rajpipla Municipality and made an invaluable contribution to the development of the town. With his foresight, the vegetable market in Rajpipala was organized in his own way. In the first phase, he used his unique ideas to grow the bank out of financial difficulties.

Late Chandulal Mansukhram Vyas
the first president from 1950 to 1956
    </p>
    </div>
    <div className={styles.para1}>
    
    <p >
    To help out communinity of common man and enterprenure class people Late Mangaldas Parekh brought vision of cooperative bank. He served as Managing director for 27 years by continuing incredible work at RNSB. He also served as President ofGrain merchant Assocition as well as member of Rajpipla municiple cooperation . During the time of State he provided grocery stocks to people in second world war by serving as Cashier.



    </p>
    <div className={styles.photo}>
        <img src="./images/f2.png" alt="" />
       <h5>Late Mangaldas Jagandas Parekh <br></br>
       First Managing Director 1949 to 1976</h5>
        </div>
   
    </div>
    </div>
  )
}
