// simple react modal component
import React, { useEffect, useState, useContext } from 'react'
import styles from './MerchModal.module.css'
import Image from 'next/image'

const Merchmodal = (props) => {
    return (
        <React.StrictMode>
            <div
                id="backdrop"
                className={styles.modal}
                onClick={() => props.closeHandler()}
            >
                <div
                    className={styles.modalContent}
                    onClick={(e) => {
                        e.stopPropagation()
                    }}
                >
                    <div className={styles.modal_head}>
                        <h1>Size Chart</h1>
                        <Image
                            src="/events/close.svg"
                            alt="Closebtn"
                            height={40}
                            width={40}
                            onClick={() => props.closeHandler()}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* <div className={styles.image}>
                            <img
                                src={
                                    props.body.poster
                                        ? props.body.poster
                                        : '/events/poster.png'
                                }
                                alt="Fest Image"
                                width={300}
                                height={300}
                                style={{ borderRadius: '15px' }}
                            />
                        </div> */}
                        <div className={styles.modal_body}>
                            <table className={styles.sizeTable}>
                                <thead>
                                    <tr>
                                        <th className={styles.tableHeading}>
                                            Size
                                        </th>
                                        <th className={styles.tableHeading}>
                                            Chest
                                        </th>
                                        <th className={styles.tableHeading}>
                                            Length
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.tableCell}>XS</td>
                                        <td className={styles.tableCell}>34</td>
                                        <td className={styles.tableCell}>25</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>S</td>
                                        <td className={styles.tableCell}>36</td>
                                        <td className={styles.tableCell}>26</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>M</td>
                                        <td className={styles.tableCell}>38</td>
                                        <td className={styles.tableCell}>27</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>L</td>
                                        <td className={styles.tableCell}>40</td>
                                        <td className={styles.tableCell}>28</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>XL</td>
                                        <td className={styles.tableCell}>42</td>
                                        <td className={styles.tableCell}>29</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>
                                            XXL
                                        </td>
                                        <td className={styles.tableCell}>44</td>
                                        <td className={styles.tableCell}>30</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.tableCell}>
                                            XXXL
                                        </td>
                                        <td className={styles.tableCell}>46</td>
                                        <td className={styles.tableCell}>31</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <div className={styles.modal_footer}>
                        {props.body.video ? (
                            <a
                                target="_blank"
                                className={styles.rulebtn}
                                href={props.body.video}
                                // onClick={(e) => props.closeHandler()}
                            >
                                Rulebook
                            </a>
                        ) : null}
                        <button
                            className={styles.btn}
                            onClick={() =>
                                {
                                if(props.body.is_online) {
                                    console.log('online')
                                    router.replace(props.body.registration_link)
                                }
                                else if(userData.isAuth) {
                                    if(props.body.is_solo) {
                                        soloEventRegistration(props.body.id, router, props.closeHandler)
                                    }
                                    else {
                                        // router.replace(props.body.registration_link)
                                        router.push({
                                            pathname: `/event-registration/${[
                                                props.body.id,
                                            ]}`,
                                            query: {
                                                id: props.body.id,
                                                name: props.body.name,
                                                description: props.body.description,
                                                max_team_size: props.body.max_team_size,
                                                min_team_size: props.body.min_team_size,
                                                registration_fee:
                                                    props.body.registration_fee,
                                            },
                                        }) 
                                    }
                                }
                                else {
                                    router.push('/userLogin')
                                }
                                }
                            }
                        >
                            Register
                        </button>
                    </div> */}
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Merchmodal
