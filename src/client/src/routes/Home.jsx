import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>QUIZERA</h1>
        <br />
        <div>
          Quizera is a platorm build for students and teachers to make learning
          easier
        </div>
        <br />
        <br />
        <div>Please login to continue</div>
      </header>
    </div>
  );
};

export default Home;
