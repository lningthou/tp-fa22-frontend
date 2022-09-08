import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import backgroundPic from "../../public/background.png"
import styles from "../../css/styles.module.css"

const Landing: NextPage = () => {
  return (
    <>
      <NavBar />
        <div className = {styles.landing_body}>
          <div className = {styles.text_block}>
            <h1 className={styles.landing_header}>Grand Cheese Race</h1>
            <p className={styles.landing_text}>It's the race of the century! All victors return for<br />one final race... who do you think will win?</p>
          </div>
        </div>
    </>
  );
};

export default Landing;
