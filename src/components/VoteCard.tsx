import React, { useState} from 'react'
import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../../css/card.module.css"

function VoteCard({name, imageURL}) {
    const [score, setCount] = useState(0)
    return (
        <div className={styles.card_container}>
            <div className={styles.image_container}>
                <img src={imageURL}/>
            </div>
            <div className={styles.vote_container}>
                <div className={styles.text_container}>
                    <p className={styles.name}>{name}</p>
                    <p>Score: {score}</p>
                </div>
                <div className={styles.button_container}>
                    <button className={styles.vote_button} onClick={() => setCount(score+1)}>▲</button>
                    <button className={styles.vote_button} onClick={() => setCount(score-1)}>▼</button>
                </div>
            </div>
        </div>
    )
}

export default VoteCard