// simple react modal component
import React, { useEffect, useState, useContext } from 'react'
import { AuthContext } from '../authContext'
import soloEventRegistration from '../Event Registration/soloEventRegistration'
import { ToastContainer, toast } from 'react-toastify'
import styles from './Modal.module.css'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Modal = (props) => {
    const router = useRouter()
    const userData = useContext(AuthContext)

    function handleRagister() {
        if (userData.isAuth) {
            if (props.body.is_solo) {
                soloEventRegistration(
                    props.body.id,
                    props.body.registration_fee,
                    userData.state.user.email_id,
                    userData.state.user.phone_number,
                    userData.state.user.anwesha_id,
                    router,
                    props.closeHandler
                )
                // console.log(userData.state.user)
            } else {
                // router.replace(props.body.registration_link)
                router.push({
                    pathname: `/event-registration/${[props.body.id]}`,
                    query: {
                        id: props.body.id,
                        name: props.body.name,
                        description: props.body.description,
                        max_team_size: props.body.max_team_size,
                        min_team_size: props.body.min_team_size,
                        registration_fee: props.body.registration_fee,
                    },
                })
            }
        } else {
            router.push('/userLogin')
        }
    }

    return (
        <React.StrictMode>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                    <hr
                        style={{
                            width: '100%',
                            height: '2px',
                            marginBottom: '35px',
                        }}
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: '30px',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            overflowY: 'scroll',
                            paddingBottom: '50px',
                        }}
                    >
                        <div className={styles.leftColumn}>
                            <img
                                src={
                                    props.body.poster
                                        ? props.body.poster
                                        : '/events/poster.png'
                                }
                                alt="Fest Image"
                                width={220}
                                height={220}
                                style={{ borderRadius: '15px' }}
                            />
                            {/* <div className={styles.modal_footer}> */}
                            {props.body.video ? (
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.btn}
                                    id={styles.rulebtn}
                                    href={props.body.video}
                                // onClick={(e) => props.closeHandler()}
                                >
                                    Rulebook
                                </a>
                            ) : null}
                            <button
                                className={styles.btn}
                                onClick={handleRagister}
                            >
                                Register
                            </button>
                            {/* </div> */}
                        </div>
                        <div className={styles.modal_body}>
                            <div className={styles.date_venue}>
                                <span className={styles.date_text}>Date:</span>
                                <span className={styles.date_value}>
                                    {new Date(
                                        props.body.start_time
                                    ).toLocaleString('default', {
                                        day: 'numeric',
                                    })}
                                    {' '}
                                    {props.body.start_time.substring(0, 10) !== props.body.end_time.substring(0, 10) ? (
                                        <>
                                            {'- '}
                                            {new Date(props.body.end_time).toLocaleString('default', {
                                                day: 'numeric',
                                            })}
                                        </>
                                    ) : null}
                                    {' '}
                                    {new Date(
                                        props.body.start_time
                                    ).toLocaleString('default', {
                                        month: 'long',
                                    })}
                                </span>
                                <br />
                                <span className={styles.date_text}>Venue:</span>
                                <span className={styles.date_value}>
                                    {props.body.venue}
                                </span>
                            </div>
                            <p className={styles.description}>
                                {props.body.description}
                            </p>
                            <div className={styles.team_pay}>
                                <div style={{ fontWeight: '600' }}>
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
                                    !userData.isAuth ||
                                        userData.state.user.user_type !==
                                        'iitp_student' ? (
                                        <p>
                                            Registration Fee&nbsp;
                                            {/* <img src="/assets/payment.svg" /> */}
                                            <span style={{ fontWeight: '600' }}>
                                                ₹{props.body.registration_fee}
                                            </span>
                                        </p>
                                    ) : null
                                ) : null}
                            </div>
                            {props.body.registration_deadline ? (
                                <div
                                    className={styles.team_pay}
                                // style={{ flexDirection: 'row' }}
                                >
                                    <p>
                                        {/* <img src="/assets/alert.svg" /> */}
                                        Registration closes on&nbsp;
                                        <span style={{ fontWeight: '600' }}>
                                            {new Date(
                                                props.body.registration_deadline
                                            ).toDateString('default', {
                                                day: 'numeric',
                                                month: 'long',
                                            })}
                                        </span>
                                    </p>
                                </div>
                            ) : null}
                            {props.body.prize ? (
                                <div
                                    className={styles.team_pay}
                                    style={{ flexDirection: 'row' }}
                                >
                                    {/* <img src="/assets/prize.svg" /> */}
                                    Prizes worth: &nbsp;
                                    <span style={{ fontWeight: '600' }}>
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
                                                        rel="noreferrer"
                                                        href={
                                                            e[1]
                                                                ? `tel:${e[1]}`
                                                                : '#'
                                                        }
                                                    >
                                                        <span
                                                            style={{
                                                                fontWeight:
                                                                    '600',
                                                            }}
                                                        >
                                                            {e[0]}
                                                        </span>
                                                        &nbsp;
                                                        {e[1] ? (
                                                            <span
                                                                style={{
                                                                    fontWeight:
                                                                        '600',
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
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Modal
