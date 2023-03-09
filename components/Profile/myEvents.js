import React, { useState } from 'react'
import styles from './profile.module.css'

const host = process.env.NEXT_PUBLIC_HOST

function MyEvents() {
    const [events, setEvents] = useState({ solo: [], team: [] })
    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        credentials: 'include',
    }

    const res = fetch(`${host}/event/myevents`, requestOptions)
        .then((response) => response.json())
        .then((result) => {setEvents(result)})
        .catch((error) => console.log('error', error))

    
    
    return (
        <div>
            {events.solo.length === 0 && events.team.length === 0 ? (
                <div>No events registered</div>
            ) : null}
            {events.solo ? (events.solo.length !== 0 ? (
                <div>
                    <h1>Solo Events</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {events.solo.map((e) => {
                            return (
                                <div className={styles.event}>
                                    <h2>{e.event_name}</h2>
                                    <div className={styles.date_loc}>
                                        <div className={styles.date_row}>
                                            <img src="/assets/calendar-clock.svg" />
                                            <div className={styles.date}>
                                                <span className={styles.day}>
                                                    {new Date(
                                                        e.event_start_time
                                                    ).toLocaleString(
                                                        'default',
                                                        { day: 'numeric' }
                                                    )}
                                                </span>
                                                <span className={styles.month}>
                                                    {new Date(
                                                        e.event_start_time
                                                    ).toLocaleString(
                                                        'default',
                                                        { month: 'short' }
                                                    )}
                                                </span>
                                            </div>
                                            {e.event_end_time ? (
                                                <div>-</div>
                                            ) : null}
                                            {e.event_end_time ? (
                                                <div className={styles.date}>
                                                    <span
                                                        className={styles.day}
                                                    >
                                                        {new Date(
                                                            e.event_end_time
                                                        ).toLocaleString(
                                                            'default',
                                                            { day: 'numeric' }
                                                        )}
                                                    </span>
                                                    <span
                                                        className={styles.month}
                                                    >
                                                        {new Date(
                                                            e.event_end_time
                                                        ).toLocaleString(
                                                            'default',
                                                            { month: 'short' }
                                                        )}
                                                    </span>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className={styles.location}>
                                            <img src="/assets/location.svg" />
                                            {e.event_venue}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null) : null}
            {events.team ? (events.team.length !== 0 ? (
                <div>
                    <h1>Team Events</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        }}
                    >
                        {events.team.map((e) => {
                            return (
                                <div className={styles.event}>
                                    <h2>{e.event_name}</h2>
                                    <div className={styles.date_loc}>
                                        <div className={styles.date_row}>
                                            <img src="/assets/calendar-clock.svg" />
                                            <div className={styles.date}>
                                                <span className={styles.day}>
                                                    {new Date(
                                                        e.event_start_time
                                                    ).toLocaleString(
                                                        'default',
                                                        { day: 'numeric' }
                                                    )}
                                                </span>
                                                <span className={styles.month}>
                                                    {new Date(
                                                        e.event_start_time
                                                    ).toLocaleString(
                                                        'default',
                                                        { month: 'short' }
                                                    )}
                                                </span>
                                            </div>
                                            {e.event_end_time ? (
                                                <div>-</div>
                                            ) : null}
                                            {e.event_end_time ? (
                                                <div className={styles.date}>
                                                    <span
                                                        className={styles.day}
                                                    >
                                                        {new Date(
                                                            e.event_end_time
                                                        ).toLocaleString(
                                                            'default',
                                                            { day: 'numeric' }
                                                        )}
                                                    </span>
                                                    <span
                                                        className={styles.month}
                                                    >
                                                        {new Date(
                                                            e.event_end_time
                                                        ).toLocaleString(
                                                            'default',
                                                            { month: 'short' }
                                                        )}
                                                    </span>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className={styles.location}>
                                            <img src="/assets/location.svg" />
                                            {e.event_venue}
                                        </div>
                                    </div>
                                    <div className={styles.team_details}>
                                        <h3>{e.team_name}</h3>
                                        <h4>Leader: <strong>{e.team_lead}</strong></h4>
                                        <div className={styles.members}>
                                        {e.team_members.map(mem => {
                                            return(
                                                <div>{mem}</div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) : null) : null}
        </div>
    )
}

export default MyEvents
