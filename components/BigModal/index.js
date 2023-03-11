// simple react modal component
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../authContext'
import soloEventRegistration from '../Event Registration/soloEventRegistration'
import styles from './Modal.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Modal = (props) => {
    const router = useRouter()
    const userData = useContext(AuthContext)

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
                        <h1>{props.title}</h1>
                        {/* <hr style={{height:'10px', color:'black'}}/> */}
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
                        <div className={styles.image}>
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
                        </div>
                        <div className={styles.modal_body}>
                            <div className={styles.date_venue}>
                                <span className={styles.date_text}>Date</span>
                                <span className={styles.date_value}>
                                    {new Date(
                                        props.body.start_time
                                    ).toLocaleString('default', {
                                        day: 'numeric',
                                    })}{' '}
                                    -{' '}
                                    {new Date(
                                        props.body.end_time
                                    ).toLocaleString('default', {
                                        day: 'numeric',
                                    })}
                                    {new Date(
                                        props.body.start_time
                                    ).toLocaleString('default', {
                                        month: 'long',
                                    })}
                                </span>
                                <br />
                                <span className={styles.date_text}>Venue</span>
                                <span className={styles.date_value}>
                                    {props.body.venue}
                                </span>
                            </div>
                            <p className={styles.description}>
                                {props.body.description}
                            </p>
                            <div className={styles.team_pay}>
                                <div style={{ fontWeight: '700' }}>
                                    {/* <img src="/assets/team.svg" /> */}
                                    {props.body.max_team_size === 1
                                        ? 'Individual Participation'
                                        : props.body.min_team_size ===
                                          props.body.max_team_size
                                        ? props.body.min_team_size + ' members'
                                        : props.body.min_team_size +
                                          ' - ' +
                                          props.body.max_team_size +
                                          ' members'}
                                </div>
                                {props.body.registration_fee ? (
                                    !userData.isAuth ? (
                                        <div>
                                            Registration Fee &nbsp;
                                            {/* <img src="/assets/payment.svg" /> */}
                                            <span style={{ fontWeight: '700' }}>
                                                {' '}
                                                ₹{props.body.registration_fee}
                                            </span>
                                        </div>
                                    ) : userData.state.user.user_type !==
                                      'iitp_student' ? (
                                        <div>
                                            Registration Fee &nbsp;
                                            {/* <img src="/assets/payment.svg" /> */}
                                            <span style={{ fontWeight: '700' }}>
                                                {' '}
                                                ₹{props.body.registration_fee}
                                            </span>
                                        </div>
                                    ) : null
                                ) : null}
                            </div>
                            {props.body.registration_deadline ? (
                                <div
                                    className={styles.team_pay}
                                    style={{ flexDirection: 'row' }}
                                >
                                    {/* <img src="/assets/alert.svg" /> */}
                                    Registration closes on &nbsp;{' '}
                                    <span style={{ fontWeight: '700' }}>
                                        {new Date(
                                            props.body.registration_deadline
                                        ).toDateString('default', {
                                            day: 'numeric',
                                            month: 'long',
                                        })}
                                    </span>
                                </div>
                            ) : null}
                            {props.body.prize ? (
                                <div
                                    className={styles.team_pay}
                                    style={{ flexDirection: 'row' }}
                                >
                                    {/* <img src="/assets/prize.svg" /> */}
                                    Prizes worth: &nbsp;
                                    <span style={{ fontWeight: '700' }}>
                                        {' '}
                                        ₹{props.body.prize}!
                                    </span>
                                </div>
                            ) : null}
                            <div className={styles.contacts}>
                                {/* <img src="/assets/contact.svg" />    */}
                                {Array.isArray(props.body.organizer) ? (
                                    <div
                                        className={styles.team_pay}
                                        style={{ flexDirection: 'column' }}
                                    >
                                        Organizers
                                        {props.body.organizer.map(
                                            (e, index) => {
                                                return (
                                                    <a
                                                        key={index}
                                                        style={
                                                            e[1]
                                                                ? null
                                                                : {
                                                                      pointerEvents:
                                                                          'none',
                                                                  }
                                                        }
                                                        target="_blank"
                                                        href={
                                                            e[1]
                                                                ? `tel:${e[1]}`
                                                                : '#'
                                                        }
                                                    >
                                                        <span
                                                            style={{
                                                                fontWeight:
                                                                    '700',
                                                            }}
                                                        >
                                                            {e[0]}
                                                        </span>
                                                        &nbsp;
                                                        {e[1] ? (
                                                            <span
                                                                style={{
                                                                    fontWeight:
                                                                        '700',
                                                                }}
                                                            >
                                                                {/* <img
                                                                    alt="phone"
                                                                    src="/footer/phone.svg"
                                                                /> */}
                                                                {e[1]}
                                                            </span>
                                                        ) : null}
                                                    </a>
                                                )
                                            }
                                        )}
                                    </div>
                                ) : (
                                    <div className={styles.contact}>
                                        {props.body.organizer}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.modal_footer}>
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
                            onClick={() => {
                                if (props.body.is_online) {
                                    console.log('online')
                                    router.replace(props.body.registration_link)
                                } else if (userData.isAuth) {
                                    if (props.body.is_solo) {
                                        soloEventRegistration(
                                            props.body.id,
                                            router,
                                            props.closeHandler
                                        )
                                    } else {
                                        // router.replace(props.body.registration_link)
                                        router.push({
                                            pathname: `/event-registration/${[
                                                props.body.id,
                                            ]}`,
                                            query: {
                                                id: props.body.id,
                                                name: props.body.name,
                                                description:
                                                    props.body.description,
                                                max_team_size:
                                                    props.body.max_team_size,
                                                min_team_size:
                                                    props.body.min_team_size,
                                                registration_fee:
                                                    props.body.registration_fee,
                                            },
                                        })
                                    }
                                } else {
                                    router.push('/userLogin')
                                }
                            }}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Modal
