import React from 'react'
import styles from '../styles/comingsoon.module.css'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar/Navbar'

function newsletter() {
    return (
        <>
            <div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className={styles.sections}>
                <div
                    className={[styles.homesection, styles.casection].join('')}
                >
                    Yes
                </div>
                <div
                    className={[styles.homesection, styles.mcsection].join('')}
                >
                    No
                </div>
            </div>
        </>
    )
}

export default newsletter
