import Image from 'next/image'
import Head from 'next/head'
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
            { name: 'Yashveer', image: '/team/yashveer.png' }
        ],
        webnapp: [
            { name: 'Anurag Deo', image: '/team/anurag.png' },
            { name: 'Aritra Bhaduri', image: '/team/aritra.png' },
            { name: 'Vaibhav Gupta', image: '/team/vaibhav.jpg' },
            { name: 'Arvind Meena', image: '/team/arvind.jpg' },
        ],
        spons: [
            { name: 'Suryansh Bansal', image: '/team/suryansh_spons.jpg' },
            { name: 'Aviral Shrivastava', image: '/team/aviral_spons.jpg' },
            { name: 'Ritvik', image: '/team/ritvik_spons.png' },

        ],
        TV: [
            { name: 'Arkadeep Acharya', image: '/team/akradeep_tv.jpg' },
            { name: 'Diptadip Malik', image: '/team/diptadip_tv.jpg' },
            { name: 'Surya Prakash', image: '/team/surya_tv.jpg' },
            { name: 'Ankit Kumar', image: '/team/ankit_tv.jpg' },

        ],
        events: [
            { name: 'Divyanshee', image: '/team/divyanshee_events.png' },
            { name: 'Shivendra', image: '/team/shivendra_events.jpg' },
            { name: 'Yash', image: '/team/yash_events.jpg' },
            { name: 'Nikita', image: '/team/nikita_events.jpg' },

        ],
        rsp: [
            { name: 'Khushi Pathak', image: '/team/khushi_rsp.jpeg' },
            { name: 'Harsh Chandra', image: '/team/harsh_rsp.jpeg' },
            { name: 'Swabnam', image: '/team/swabnam_rsp.jpeg' },

        ],
        hospi: [
            { name: 'Aditya Pandey', image: '/team/aditya_hospi.jpeg' },
            { name: 'Aditi Kumari', image: '/team/aditi_hospi.jpg' },
            { name: 'Aruj Gautam', image: '/team/aruj_hospi.jpeg' },
            { name: 'Devendra Singh', image: '/team/devendra_hospi.jpeg' },

        ],
        mpr: [
            { name: 'Kumari Ankita', image: '/team/ankita_mpr.jpg' },
            { name: 'Gaurang Bansal', image: '/team/gaurang_mpr.jpg' },
            { name: 'Ankur Kumar', image: '/team/ankur_mpr.jpg' },
            { name: 'Anudeep Talari', image: '/team/anudeep_mpr.jpg' },
            { name: 'Kanishka Solanki', image: '/team/kanishka_mpr.jpg' },
        ],
        convenor: [
            { name: 'Ashfaq Ahmed', image: '/team/ashfaq.png' },
        ],
        mprAdvisory: [
            { name: 'Gaurav Garg', image: '/team/gauravAdvisor_mpr.png' },
            { name: 'Robin', image: '/team/robinAdvisor_mpr.png' }
        ],
        eventsAdvisory: [
            { name: 'Athul', image: '/team/athulAdvisor_events.png' },
            { name: 'Abhishek Verma', image: '/team/abhishekAdvisor_events.png' },
            { name: 'Yash Malik', image: '/team/yashAdvisor_events.png' },
        ],
        rspAdvisory: [
            { name: 'Jayant Yadav', image: '/team/jayantAdvisor_rsp.png' },
            { name: 'Udit', image: '/team/uditAdvisor_rsp.png' }
        ],
        hospiAdvisory: [
            { name: 'Chirag Bhardwaj', image: '/team/chiragAdvisor_hospi.png' },
            { name: 'Rohit Nayak', image: '/team/rohitAdvisor_hospi.png' }
        ],
        TVAdvisory: [
            { name: 'Tanya', image: '/team/tanyaAdvisor_TV.png' },
            { name: 'Roshan Kishore', image: '/team/roshanAdvisor_TV.png' }
        ],
        webnappAdvisory: [
            { name: 'Rupak', image: '/team/rupakAdvisor_web.png' },
            { name: 'Adil', image: '/team/adilAdvisor_web.png' }
        ],
        sponsAdvisory: [
            { name: 'Prateek', image: '/team/prateekAdvisor_spons.png' },
            { name: 'Hardik', image: '/team/hardikAdvisor_spons.png' },
            { name: 'Aman', image: '/team/amanAdvisor_spons.png' },

        ],


    }
    return (
        <div className={styles.parentContainer}>
            <Head>
                <title>Team - Anwesha 2023</title>
                <meta name="description" content="Team-Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div className={styles.container}>
                <h2 className={styles.teamHeader}>Our Team</h2>
                <hr className={styles.teamHeadingBar} />
                <div className={styles.coordinators}>
                    {/* {[...Array(n)].map((e, i) =>  */}
                    <CoordCard data={data.festcoord} title="Fest Coordinators" />
                    <h2 className={styles.teamHeader}>Core Team</h2>
                    <hr className={styles.teamHeadingBar} />
                    <CoordCard data={data.spons} title="Spons Committee" />
                    <CoordCard data={data.mpr} title="MPR Committee" />
                    <CoordCard data={data.webnapp} title="Web & App" />
                    <CoordCard data={data.events} title="Events Committee" />
                    <CoordCard data={data.rsp} title="RSP  Committee" />
                    <CoordCard data={data.hospi} title="Hospitality  Committee" />
                    <CoordCard data={data.TV} title="Anwesha TV" />

                    <h2 className={styles.teamHeader}>Fest Convenor</h2>
                    <hr className={styles.teamHeadingBar} />
                    <CoordCard data={data.convenor} title="" />
                    <h2 className={styles.teamHeader}>Advisory</h2>
                    <hr className={styles.teamHeadingBar} />
                    
                    <CoordCard data={data.sponsAdvisory} title="Spons Committee" />
                    <CoordCard data={data.mprAdvisory} title="MPR Committee" />
                    <CoordCard data={data.webnappAdvisory} title="Web & App" />
                    <CoordCard data={data.eventsAdvisory} title="Events Committee" />
                    <CoordCard data={data.rspAdvisory} title="RSP  Committee" />
                    <CoordCard data={data.hospiAdvisory} title="Hospitality  Committee" />
                    <CoordCard data={data.TVAdvisory} title="Anwesha TV" />
                    
                    
                </div>
            </div>
        </div>
    )
}
