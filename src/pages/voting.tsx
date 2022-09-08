import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import VoteCard from "../components/VoteCard";
import styles from "../../css/styles.module.css"

const Voting: NextPage = () => {
  return (
    <>
    <NavBar />
    <div className={styles.card_rack}>
      <VoteCard
        name = "Speedy Sidromo"
        imageURL = "/runner1.jpg"
      />
      <VoteCard
        name = "Muscular Macy"
        imageURL = "/runner4.jpeg"
      />
      <VoteCard
        name = "Agile Aspen"
        imageURL = "/runner3.jpeg"
      />
      <VoteCard
        name = "Fast-roller Fardan"
        imageURL = "/runner2.jpeg"
      />
    </div>
    </>
  );
};

export default Voting;
