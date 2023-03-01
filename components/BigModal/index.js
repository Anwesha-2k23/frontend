// simple react modal component
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../authContext'
import soloEventRegistration from '../Payments/soloEventRegistration'
import styles from './Modal.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Modal = (props) => {
    const router = useRouter()
    const userData = useContext(AuthContext)
    useEffect(() => {
        console.log(props.body)
    }, [])
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
                            <div className={styles.date_loc}>
                                <div className={styles.date_row}>
                                    <img src="/assets/calendar-clock.svg" />
                                    <div className={styles.date}>
                                        <span className={styles.day}>
                                            {new Date(
                                                props.body.start_time
                                            ).toLocaleString('default', {
                                                day: 'numeric',
                                            })}
                                        </span>
                                        <span className={styles.month}>
                                            {new Date(
                                                props.body.start_time
                                            ).toLocaleString('default', {
                                                month: 'short',
                                            })}
                                        </span>
                                    </div>
                                    {props.body.end_time ? <div>-</div> : null}
                                    {props.body.end_time ? (
                                        <div className={styles.date}>
                                            <span className={styles.day}>
                                                {new Date(
                                                    props.body.end_time
                                                ).toLocaleString('default', {
                                                    day: 'numeric',
                                                })}
                                            </span>
                                            <span className={styles.month}>
                                                {new Date(
                                                    props.body.end_time
                                                ).toLocaleString('default', {
                                                    month: 'short',
                                                })}
                                            </span>
                                        </div>
                                    ) : null}
                                </div>
                                <div className={styles.location}>
                                    <img src="/assets/location.svg" />
                                    {props.body.venue}
                                </div>
                            </div>
                            <p className={styles.description}>
                                {props.body.description}
                            </p>
                            <div className={styles.team_pay}>
                                <div>
                                    <img src="/assets/team.svg" />
                                    {props.body.max_team_size === 1
                                        ? 'Solo'
                                        : props.body.min_team_size ===
                                          props.body.max_team_size
                                        ? props.body.min_team_size + ' members'
                                        : props.body.min_team_size +
                                          ' - ' +
                                          props.body.max_team_size +
                                          ' members'}
                                </div>
                                {props.body.registration_fee ? (
                                    <div>
                                        <img src="/assets/payment.svg" />₹
                                        {props.body.registration_fee}
                                    </div>
                                ) : null}
                            </div>
                            {props.body.registration_deadline ? (
                                <div className={styles.team_pay}>
                                    <img src="/assets/alert.svg" />
                                    Registration closes{' '}
                                    {new Date(
                                        props.body.registration_deadline
                                    ).toDateString('default', {
                                        day: 'numeric',
                                        month: 'long',
                                    })}
                                </div>
                            ) : null}
                            {props.body.prize ? (
                                <div className={styles.team_pay}>
                                    <img src="/assets/prize.svg" />
                                    Prizes worth ₹{props.body.prize}!
                                </div>
                            ) : null}
                            <div className={styles.contacts}>
                                <img src="/assets/contact.svg" />
                                {Array.isArray(props.body.organizer) ? (
                                    <div className={styles.contact}>
                                        {props.body.organizer.map((e) => {
                                            return (
                                                <a
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
                                                    <span>{e[0]}</span>
                                                    {e[1] ? (
                                                        <span>
                                                            <img
                                                                alt="phone"
                                                                src="/footer/phone.svg"
                                                            />
                                                            {e[1]}
                                                        </span>
                                                    ) : null}
                                                </a>
                                            )
                                        })}
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
                        {props.body.is_active ? (
                            <button
                                className={styles.btn}
                                onClick={() => {
                                    if (props.body.is_online) {
                                        console.log('online')
                                        router.replace(
                                            props.body.registration_link
                                        )
                                    }
                                    // else if(props.body.is_solo) {
                                    //     soloEventRegistration(userData, props.body.id)
                                    //     // console.log('proper')
                                    // }
                                    // else {
                                    //     router.push({
                                    //     pathname: `/event-registration/${[
                                    //         props.body.id,
                                    //     ]}`,
                                    //     query: {
                                    //         id: props.body.id,
                                    //         name: props.body.name,
                                    //         description: props.body.description,
                                    //         max_team_size: props.body.max_team_size,
                                    //         min_team_size: props.body.min_team_size,
                                    //         registration_fee:
                                    //             props.body.registration_fee,
                                    //     },
                                    // })
                                    // }
                                }}
                                // disabled
                            >
                                Register
                            </button>
                        ) : null}
                        {props.body.video ? (
                            <a
                                target="_blank"
                                className={styles.btn}
                                href={props.body.video}
                                // onClick={(e) => props.closeHandler()}
                            >
                                Rulebook
                            </a>
                        ) : null}
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Modal
