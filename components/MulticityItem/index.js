import styles from './multicityitem.module.css'

const index = ({ event }) => {
    return (
        <div className={styles.eventCard}>
            <div className={styles.eventImageWrapper}>
                <div className={styles.eventImageWrapper_dot} />
                <div className={styles.eventImageWrapper_box}></div>
            </div>
            <div className={styles.eventBody}>
                <p className={styles.eventTitle}>{event.city}</p>
                <div className={styles.eventDetails}>
                    <p>
                        <b>Date:</b>&nbsp;{event.date}
                    </p>
                    <p>
                        <b>Venue:</b>&nbsp;{event.venue}
                    </p>
                    <p>
                        <b>Registration Deadline:</b>&nbsp;
                        {event.registration_deadline}
                    </p>
                    <p>
                        <b>Registration Fee:</b>&nbsp;{event.registration_fee}
                    </p>
                    <p>
                        <b>Timings:</b>&nbsp;{event.timings}
                    </p>
                    <span style={{ display: 'inline-flex' }}>
                        <b>Contact Details:</b>&nbsp;
                        {Array.isArray(event.contact) ? (
                            <div>
                                {event.contact.map((item) => {
                                    return (
                                        <>
                                            {item.name} ({item.phone})
                                            <br />
                                        </>
                                    )
                                })}
                            </div>
                        ) : (
                            `${event.contact.name} (${event.contact.phone})`
                        )}
                    </span>
                </div>
                <div className={styles.eventLinks}>
                    <a
                        className={styles.registerLink}
                        href={event.register_link}
                    >
                        <p>Register</p>
                    </a>
                    <a
                        className={styles.rulebookLink}
                        href={event.rulebook_link}
                    >
                        <p>Rulebook</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default index
