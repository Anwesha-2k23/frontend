import Image from 'next/image'
import React from 'react'
import styles from '../styles/ourteam.module.css'

function CoordCard({ data, title }) {
    return (
        <>
            <h2 className={styles.teamSubHeading}>{title}</h2>
            {/* <hr className={styles.teamSubHeadingBar} /> */}
            <div className={styles.picContainer}>
                {data.map((item, index) => (
                    <div key={index} className={styles.teamCard}>
                        <Image
                            className={styles.memberImage}
                            height={220}
                            width={220}
                            src={item.image}
                            alt={item.name}
                        />
                        <div className={styles.teamMemberDetails}>
                            <div className={styles.memberName}>
                                <strong>{item.name}</strong>
                            </div>
                            {/* <div className={styles.memberCommitte}>
                                {item.committee}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </>)
}

export default function ourteam() {
    // const n = 4;
    const data = {
        festcoord: [
            { name: 'Abhilasha', image: '/team/abhilasha.png' },
            { name: 'Yashweer', image: '/team/yashveer.png' }
        ],
        webnapp: [
            { name: 'Anurag Deo', image: '/team/anurag.png' },
            { name: 'Aritra Bhaduri', image: '/team/aritra.png' },
            { name: 'Vaibhav Gupta', image: '/team/vaibhav.png' },
            { name: 'Arvind Meena', image: '/team/arvind.png' },
        ],
        spons: [
            { name: 'Suryansh Bansal', image: '/team/suryansh_spons.png' },
            { name: 'Aviral Shrivastava', image: '/team/aviral_spons.png' },
            { name: 'Ritvik', image: '/team/ritvik_spons.png' },

        ],
        TV: [
            { name: 'Arkadeep Acharya', image: '/team/akradeep_tv.jpg' },
            { name: 'Diptadip Malik', image: '/team/diptadip_tv.jpg' },
            { name: 'Surya Prakash', image: '/team/surya_tv.jpg' },
            { name: 'Ankit Kumar', image: '/team/ankit_tv.jpg' },

        ],
        events: [
            { name: 'Aryan', image: '/team/aryan_events.png' },
            { name: 'Divyanshee', image: '/team/divyanshee_events.png' },
            { name: 'Shivendra', image: '/team/shivendra_events.png' },
            { name: 'Yash', image: '/team/yash_events.png' },
            { name: 'Nikita', image: '/team/nikita_events.png' },
            
        ],
        rsp: [
            { name: 'Khushi Pathak', image: '/team/khushi_rsp.jpeg' },
            { name: 'Harsh Chandra', image: '/team/harsh_rsp.jpeg' },
            { name: 'Swabnam', image: '/team/swabnam_rsp.jpeg' },
            { name: 'Sudhanshu', image: '/team/sudhanshu_rsp.jpeg' },

        ],
        hospi: [
            { name: 'Aditya Pandey', image: '/team/aditya_hospi.jpeg' },
            { name: 'Aditi Kumari', image: '/team/aditi_hospi.jpg' },
            { name: 'Aruj Gautam', image: '/team/aruj_hospi.jpeg' },
            { name: 'Devendra Singh', image: '/team/devendra_hospi.jpeg' },

        ],
        mpr: [
            { name: 'Kumari Ankita', image: '/team/ankita_mpr.png' },
            { name: 'Gaurang Bansal', image: '/team/gaurang_mpr.png' },
            { name: 'Ankur Kumar', image: '/team/ankur_mpr.png' },
            { name: 'Anudeep Talari', image: '/team/anudeep_mpr.png' },
            { name: 'Kanishka Solanki', image: '/team/kanishka_mpr.png' },
        ],
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <h2 className={styles.teamHeader}>Our Team</h2>
                <hr className={styles.teamHeadingBar} />
                <div className={styles.coordinators}>
                    {/* {[...Array(n)].map((e, i) =>  */}
                    <CoordCard data={data.festcoord} title="Fest Coordinators" />
                    <CoordCard data={data.webnapp} title="Web & App" />
                    <CoordCard data={data.spons} title="Spons Committee" />
                    <CoordCard data={data.events} title="Events Committee" />
                    <CoordCard data={data.mpr} title="MPR Committee" />
                    <CoordCard data={data.rsp} title="RSP  Committee" />
                    <CoordCard data={data.TV} title="Anwesha TV" />
                    <CoordCard data={data.hospi} title="Hospitality  Committee" />
                </div>
            </div>
        </div>
    )
}
