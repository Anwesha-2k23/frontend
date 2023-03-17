import React, { useState, useEffect, useContext } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Details from '../components/Profile/details'
import MyEvents from '../components/Profile/myEvents'
import MyMerch from '../components/Profile/myMerch'
import Head from 'next/head'
import styles from '../styles/profile.module.css'
import stylesForm from '../styles/ca.module.css'
import { AuthContext } from '../components/authContext'

const host = process.env.NEXT_PUBLIC_HOST

function profile() {
    const userData = useContext(AuthContext)
    const [tabIndex, setTabIndex] = useState(0)
    // const profDetails = userData.state.user;
    const [profDetails, setProfDetails] = useState(
        userData.state.user || { anwesha_id: '' }
    )
    const [qrcode, setQrcode] = useState(
        userData ? userData.state.user?.qr_code : ''
    )

    useEffect(() => {
        fetch(`${host}/user/editprofile`, {
            method: 'GET',
            credentials: 'include',
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((result) => {
                setProfDetails(result), console.log(result)
            })
            .catch((error) => console.log('error', error))
    }, [])

    function regenrateqr() {
        fetch(`${host}/user/regenerateqr/`, {
            method: 'GET',
            credentials: 'include',
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((result) => {
                setQrcode(result.qr_code)
            })
            .catch((error) => console.log('error', error))
    }

    return (
        <>
            <Head>
                <title>Profile - Anwesha 2023</title>
                <meta name="description" content="Anwesha 2023" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>
            <div className={stylesForm.container}>
                <div className={styles.idandqr}>
                    <h1 className={styles.anwesha_id}>
                        {profDetails.anwesha_id}
                    </h1>
                    <div className={styles.qrcode}>
                        <img src={qrcode} alt="" />
                        <button className={styles.qrBtn} onClick={regenrateqr}>
                            Regenerate QR
                        </button>
                    </div>
                </div>
                {/* <h1 className={styles.anwesha_id}>{profDetails.anwesha_id}</h1> */}

                <Tabs className={styles.tabs}>
                    <TabList
                        className={styles.tabList}
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                    >
                        <Tab className={styles.tab}>DETAILS</Tab>
                        <Tab className={styles.tab}>MY EVENTS</Tab>
                        {/* <Tab className={styles.tab}>MY MERCHANDISE</Tab> */}
                    </TabList>

                    <TabPanel className={styles.tabPanel}>
                        <Details />
                    </TabPanel>
                    <TabPanel className={styles.tabPanel}>
                        <MyEvents />
                    </TabPanel>
                    <TabPanel className={styles.tabPanel}>
                        <MyMerch />
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
}

export default profile
