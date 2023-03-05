import Image from 'next/image'
import React from 'react'
import styles from '../styles/oursponsors.module.css'

const oursponsors = () => {
    // const n = 4;
    const data = {
        coordinators: [
            { name: 'Anurag', image: '/A_logo.png' },
            { name: 'Aritra', image: '/A_logo.png' },
            { name: 'Praveen', image: '/A_logo.png' },
            { name: 'Divit', image: '/A_logo.png' },
            { name: 'Divit', image: '/A_logo.png' },
                
        ],
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <h2 className={styles.teamHeader}>Sponsors</h2>
                <hr className={styles.teamHeadingBar} />
                <div className={styles.coordinators}>
                    {/* <h2 className={styles.teamSubHeading}>Coordinators</h2> */}
                    {/* <hr className={styles.teamSubHeadingBar} /> */}
                    <div className={styles.picContainer}>
                        {/* {[...Array(n)].map((e, i) =>  */}
                        {data.coordinators.map((item, index) => (
                            <div className={styles.teamCard}>
                                <Image
                                    className={styles.memberImage}
                                    height={220}
                                    width={220}
                                    src={`${item.image}`}
                                    alt={item.name}
                                />
                                <div className={styles.teamMemberDetails}>
                                    <div className={styles.memberName}>
                                        <strong>{item.name}</strong>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default oursponsors
