import React from "react";

import styles from "../../styles/Home.module.css";



const Poster = () => (
  <section className={styles.home}>
    <div className={styles.title}>№1 в России</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>Лучшие цены 2023 года</div>
        <h1 className={styles.head}>Любые объемы и любые цены</h1>
      </div>
    </div>
  </section>
);

export default Poster;
