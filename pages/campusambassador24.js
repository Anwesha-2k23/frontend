import styles from '../styles/CampusAmbas_24.module.css'
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
// import { useState, useEffect } from 'react';

export default function CampusAmbassador24() {
    // const [screenWidth, setScreenWidth] = useState(0);

    // useEffect(() => {
    //     // Check if window is defined (i.e., we are on the client-side)
    //     if (typeof window !== 'undefined') {
    //         setScreenWidth(window.innerWidth);

    //         // Update the screenWidth state whenever the window is resized
    //         const handleResize = () => {
    //             setScreenWidth(window.innerWidth);
    //         };

    //         // Attach the event listener
    //         window.addEventListener('resize', handleResize);

    //         // Clean up the event listener when the component unmounts
    //         return () => {
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, []);

    return (
        <><div style={{ background: "#1C1D47" }}>
            <div id="hero">
                <img
                    src="/CAHeroImage.svg"
                    loading='lazy'
                    style={{
                        layout: "fill",
                        objectFit: "contain",
                        width: "100%"
                    }}
                    // width={screenWidth}  
                    // height={0.760214 * screenWidth}    
                    alt="helosection"
                />
            </div>
            <div className={styles.registerposition} >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdibq4yc8kvo91fNSDh0ZzhDFrmi3f_umAtgnrxrqjAXiJ7fA/viewform"
                    style={{ textDecoration: "none" }}>
                    <div className={styles.register}>
                        <p >REGISTER</p>
                    </div>
                </a>
                <a href="" style={{ textDecoration: "none", marginLeft: "" }}>
                    <div className={styles.leaderboard}>
                        LEADERBOARD
                    </div>
                </a>

            </div>




            <div className={styles.turtlediv}>

                <img
                    src="/tortiose.svg"
                    className={styles.turtle}
                    alt="turtle"></img>

                <div className={styles.perks} >
                    <div className={styles.perktitle}>PERKS</div>
                    <ul className={styles.perkcontent}>
                        <li>• Selfie with Celebrities</li>
                        <li>• Campus Ambassador Certificate</li>
                        <li>• CA Merchandise</li>
                        <li>• Free Anwesha Tickets and Goodies</li>
                        <li>• Building Skills With Talented People</li>
                        <li>• Feature of Top 3 CAs on Anwesha Social &nbsp;&nbsp;Media</li>
                    </ul>
                </div>
            </div>



            <div className={styles.mandiv}  >
                <div className={styles.perks} style={{ marginTop: "11vw" }}>
                    <div className={styles.perktitle}>RESPONSIBILITES</div>
                    <ul className={styles.perkcontent}>
                        <li>• Increase footfall from the college</li>
                        <li>• Increase the registration from the &nbsp;&nbsp;college</li>
                        <li>• Social Media and Publicity</li>
                        <li>• Hospitality: Facilitate campus visits and &nbsp;&nbsp;auditions for Anwesha Team</li>
                    </ul>
                </div>

                <img
                    src="/man.svg"
                    className={styles.man}
                    alt="MAN"></img>
            </div>



            <div className={styles.judgebox}>

                <div className={styles.judge} styles={{ margin: "auto" }}>
                    JUDGING CRITERIA
                </div>

                <div>
                    <div className={styles.judgecontent}>
                        <p className={styles.condition}>
                            CONDITION                         
                        </p>
                        <p className={styles.condition} style={{ width: "12vw", padding: "auto", marginLeft: "1.4vw" }}>
                            POINTS
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox}>
                            Online Registration
                        </p>
                        <p className={styles.rightbox}>
                            15xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox} style={{ background: "#51295E"}}>
                            Offline Registration
                        </p>
                        <p className={styles.rightbox} style={{ background: "#51295E" }}>
                            30px
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox}>
                            Instagram Story
                        </p>
                        <p className={styles.rightbox}>
                            5xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox} style={{ background: "#51295E"}}>
                            Instagram Post
                        </p>
                        <p className={styles.rightbox} style={{ background: "#51295E" }}>
                            10xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox}>
                            Putting Poster/Banner
                        </p>
                        <p className={styles.rightbox}>
                            15xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox} style={{ background: "#51295E"}}>
                            Sharing Messages On Whatsapp Groups
                        </p>
                        <p className={styles.rightbox} style={{ background: "#51295E" }}>
                            5xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox}>
                            Putting On Whatsapp Status
                        </p>
                        <p className={styles.rightbox}>
                            5xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox} style={{ background: "#51295E"}}>
                           Creative Way Of Incorporating Glimpses Of Answesha 
                        </p>
                        <p className={styles.rightbox} style={{ background: "#51295E" }}>
                            10-39xp
                        </p>
                    </div>

                    <div className={styles.judgecontent}>
                        <p className={styles.leftbox}>
                            Hospitality
                        </p>
                        <p className={styles.rightbox}>
                            10-30xp
                        </p>
                    </div>
                </div>
            </div>

            <img
                src="/leftleaf.svg"
                className={styles.leftleaf}
                alt="leaf"></img>
            <img
                src="/rightleaf.svg"
                className={styles.rightleaf}
                alt="leaf"></img>



            <div className={styles.treasurebox}>
                <div className={styles.perks} style={{ marginRight:"0px" }}>
                    <div className={styles.perktitle}>REWARDS</div>
                    <ul className={styles.perkcontent}>
                        <li><h3><b>BEST CA</b></h3></li>
                        <li>Best CA Sash + Hoodie + Surprise Gifts</li>
                        <li><h3><b>TOP 5 CA</b></h3></li>
                        <li>Appreciation on Social Media Handles + Surprise Gifts</li>
                        <li><h3><b>TOP 10 CA</b></h3></li>
                        <li>Suitable Prizes</li>
                    </ul>
                </div>
                <img
                    src="/treasure.svg"
                    className={styles.treasure}
                    alt="turtle"></img>
           </div>
        </div>
        </>)
}

