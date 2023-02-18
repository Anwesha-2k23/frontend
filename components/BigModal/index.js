// simple react modal component
import React from 'react'
import styles from './Modal.module.css'
import { useRouter } from 'next/router'

const Modal = (props) => {
    const router = useRouter()
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
                    </div>
                    <div className={styles.modal_body}>
                        <p>
                            Organiser:{' '}
                            <span style={{ fontWeight: 400 }}>
                                {props.body.organizer}
                            </span>
                        </p>
                        <p>
                            Venue:{' '}
                            <span style={{ fontWeight: 400 }}>
                                {props.body.venue}
                            </span>
                        </p>
                        <p>
                            Timing:{' '}
                            <span style={{ fontWeight: 400 }}>
                                {new Date(props.body.start_time).toString()} -{' '}
                                {new Date(props.body.end_time).toString()}
                            </span>
                        </p>
                        <p>
                            Description:{' '}
                            <span style={{ fontWeight: 400 }}>
                                {props.body.description}
                            </span>
                        </p>
                        <p>
                            Prize:{' '}
                            <span style={{ fontWeight: 400 }}>
                                ₹{props.body.prize}
                            </span>
                        </p>
                        <p>
                            Registration Fee:{' '}
                            <span style={{ fontWeight: 400 }}>
                                ₹{props.body.registration_fee}
                            </span>
                        </p>
                        <p>
                            Team size:{' '}
                            <span style={{ fontWeight: 400 }}>
                                {props.body.min_team_size} -{' '}
                                {props.body.max_team_size} members
                            </span>
                        </p>
                    </div>
                    <div className={styles.modal_footer}>
                        <button
                            className={styles.btn}
                            onClick={()=>
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
                        >
                            Register
                        </button>
                        <button
                            className={styles.btn}
                            onClick={(e) => props.closeHandler()}
                        >
                            Rulebook
                        </button>
                    </div>
                </div>
            </div>
        </React.StrictMode>
    )
}

export default Modal
