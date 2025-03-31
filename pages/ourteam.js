import Image from 'next/image'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/ourteam.module.css'
import { Instagram as InstagramIcon, Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react'


function CoordCard({ data, title }) {
    return (
        <>
            <h2 className={styles.teamSubHeading}>{title}</h2>
            {/* <hr className={styles.teamSubHeadingBar} /> */}
            <div className={styles.picContainer}>
                {data.map((item, index) => (
                    <div key={index} className={styles.teamCard}>
                        <div className={styles.flipInner}>
                            <div className={styles.flipFront}>
                                <Image
                                    className={styles.memberImage}
                                    height={220}
                                    width={220}
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className={styles.teamMemberDetails}>
                                    <div className={styles.memberName}>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.flipBack}>
                                <Image
                                    src={item.cardBack || "/CardBack.png"}
                                    alt="Card Back"
                                    className={styles.cardBack}
                                    height={360}
                                    width={360}
                                />
                                <div className={styles.socialLinks}>
                                    {item.instagram && (
                                        <>
                                            <a href={item.instagram} target="_blank" rel="noopener noreferrer">
                                                <InstagramIcon size={24} className={styles.socialIcon} />
                                            </a>
                                            {(item.linkedin || item.email) && <div className={styles.iconDivider} />}
                                        </>
                                    )}
                                    {item.linkedin && (
                                        <>
                                            <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                                                <LinkedinIcon size={24} className={styles.linkedinIcon} />
                                            </a>
                                            {item.email && <div className={styles.iconDivider} />}
                                        </>
                                    )}
                                    {item.email && (
                                        <a href={`mailto:${item.email}`} target="_blank" rel="noopener noreferrer">
                                            <MailIcon size={24} className={styles.socialIcon} />
                                        </a>
                                    )}
                                </div>
                                <div className={styles.teamMemberDetails}>
                                    <div className={styles.memberName}>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                                {/* <div className={styles.memberCommitte}>
                                {item.committee}
                            </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>)
}

export default function ourteam() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const titleStyle = {
        opacity: Math.max(0, 1 - scrollY / 300),
        transform: `translateY(${Math.min(50, scrollY / 3)}px)`,
    };

    const bgStyle = {
        backgroundSize: `${100 + scrollY / 10}%`,
    };


    // const n = 4;
    const data = {
        festcoord: [
            {
                name: 'Shubhankar Ray', image: '/team/shubhankar.jpeg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201cb59_shubhankar@iitp.ac.in'
            },
            {
                name: 'Chirag Gupta', image: '/team/chirag.png',
                instagram: 'https://www.instagram.com/chiraaag.004/',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201mc12_chirag@iitp.ac.in'
            }
        ],
        webnapp: [
            {
                name: 'Rudra Goyal', image: '/team/rudra.jpg',
                instagram: 'https://www.instagram.com/solo.rudra?igsh=Z21wenl6NzAzbWJz',
                linkedin: 'https://in.linkedin.com/in/rudra-goyal-b6036a285',
                email: '2201mm26_rudra@iitp.ac.in'
            },
            {
                name: 'Harshvardhan Singh', image: '/team/harshvardhan.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://www.linkedin.com/in/harshvardhan-singh-42b660211',
                email: '2201cs92_harshvardhan@iitp.ac.in'
            },
            {
                name: 'Swayam Jain', image: '/team/swayam.jpg',
                instagram: 'https://instagram.com/swayam_jain244',
                linkedin: 'https://www.linkedin.com/in/swayam-jain-157052259/',
                email: '2201ee72_swayam@iitp.ac.in'
            }
        ],
        spons: [
            {
                name: 'Aakash Shankar Prasad', image: '/team/aakash.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Kr Nalin Singh', image: '/team/nalin.jpeg',
                instagram: 'https://www.instagram.com/knalins/',
                linkedin: 'https://www.linkedin.com/in/knalins/',
                email: '2201mm17_kumar@iitp.ac.in'
            },
            {
                name: 'Manas Gupta', image: '/team/manas.jpg',
                instagram: 'https://www.instagram.com/_manas.gupta_?igsh=MXB5cWxyaDE5cGNsZQ==',
                linkedin: 'https://www.linkedin.com/in/manas-gupta21?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: '2201ph16_manas@iitp.ac.in'
            }
        ],
        TV: [

        ],
        events: [
            {
                name: 'Sriyash Bhaskaruni', image: '/team/sriyash.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Tanishq Sharma', image: '/team/tanishq.webp',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Luqman Motiwala', image: '/team/laqman.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Anurag Singh', image: '/team/Anurag1.png',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Divyam Walia', image: '/team/Profile.png',
                instagram: 'https://www.instagram.com/divyam_walia?igsh=MWN0cXF5ZGE5aWRwcg==',
                linkedin: 'https://www.linkedin.com/in/divyamwalia/',
                email: '2201ce16_divyam@iitp.ac.in'
            },
            {
                name: 'Mihir Bairathi', image: '/team/mihir.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201ee38_mihir@iitp.ac.in'
            }
        ],
        rsp: [
            {
                name: 'Sakshi Srivastava', image: '/team/sakshi_eee.jpg',
                instagram: 'https://www.instagram.com/isakshi_shrivastava?utm_source=qr&igsh=MWY1OXp1ZHljbnRwMA==',
                linkedin: 'https://www.linkedin.com/in/sakshi-shrivastava-05649925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: '2201ee81_sakshi@iitp.ac.in'
            },
            {
                name: 'Harsh Mittal', image: '/team/harshm.jpg',
                instagram: 'https://www.instagram.com/harshmittal2309?igsh=MWcxazQ5dWhjODVxOQ==',
                linkedin: 'https://www.linkedin.com/in/harsh-mittal-7490a7254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: '2201me31_harsh@iitp.ac.in'
            },
            {
                name: 'Yeshwanth', image: '/team/yeshwanth.jpeg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201mm27_sai@iitp.ac.in'
            },
            {
                name: 'Ayush Kumar', image: '/team/Ayush.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            }
        ],
        hospi: [
            {
                name: 'Nirjay Kumar', image: '/team/nirjay.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Devankar Raj', image: '/team/devankar.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Dolly Singh', image: '/team/dolly.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Sakshi Sinha', image: '/team/sakshi.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Abhishek Jaiswal', image: '/team/abhishek.png',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            }
        ],
        mpr: [
            {
                name: 'Harsh Raj', image: '/team/harsh.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201ee28_harsh@iitp.ac.in'
            },
            {
                name: 'Raunak', image: '/team/raunak.jpg',
                instagram: 'https://www.instagram.com/raunak_04_?igsh=OGQ5ZDc2ODk2ZA==',
                linkedin: 'https://www.linkedin.com/in/raunak-bansod-718b30259',
                email: '2201mm39_raunak@iitp.ac.in'
            },
            {
                name: 'Chanchal Tolani', image: '/team/chanchal.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Samyak Gupta', image: '/team/samyak.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Vihaan Agrawal', image: '/team/vihaan.jpg',
                instagram: 'https://www.instagram.com/vihaanagrwl?igsh=MnhoengxOWN3OXF0',
                linkedin: 'https://www.linkedin.com/in/vihaan-agrawal-354997253/',
                email: '2201ee98_vihaan@iitp.ac.in  '
            },
            {
                name: 'Sujal Pachori', image: '/team/sujal.jpg',
                instagram: 'https://www.instagram.com/sujalxpachori/profilecard/?igsh=MWU1NHRiZ2YyOWUweA==',
                linkedin: 'https://www.linkedin.com/in/sujal-pachori-a15b96261/',
                email: '2201ee70_sujal@iitp.ac.in'
            }
        ],
        cnd: [
            {
                name: 'Ansh Singh', image: '/team/ansh.jpeg',
                instagram: 'https://www.instagram.com/anshnvm',
                linkedin: 'https://in.linkedin.com/in/anshnvm',
                email: '2201me12_ansh@iitp.ac.in'
            },
            {
                name: 'Himani Yadav', image: '/team/himani1.jpg',
                instagram: 'https://www.instagram.com/nira_ushi/?show_story_unavailable=1',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201ai16_himani@iitp.ac.in'
            },
            {
                name: 'Pradhuman Nayak', image: '/team/pradhuman1.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Kunjal Singh', image: '/team/kunjal.jpeg',
                instagram: 'https://www.instagram.com/kuhiiiii__/',
                linkedin: 'www.linkedin.com/in/kunjalsingh',
                email: '2201mm18_kunjal@iitp.ac.in'
            },
            {
                name: 'Piyush Sanywal', image: '/team/piyush.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'user@example.com'
            },
            {
                name: 'Swastik Vishwakarma', image: '/team/swastik.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201me72_swastik@iitp.ac.in'
            }
        ],
        convenor: [
            {
                name: 'Abhilasha', image: '/team/abhilasha.jpg',
                instagram: 'https://www.instagram.com/abhilashhhaaaaa/',
                linkedin: 'https://www.linkedin.com/in/abhilashamishra13/',
                email: 'abhilasha_2101cb02@iitp.ac.in'
            },
            {
                name: 'Yashveer', image: '/team/yashveer.jpeg',
                instagram: 'https://instagram.com/yashveer_ahlawat',
                linkedin: 'https://www.linkedin.com/in/yashveer-148944257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                email: 'yashveer_2101ai35@iitp.ac.in'
            }
        ],
        mprAdvisory: [
            {
                name: 'Kumari Ankita', image: '/team/ankita.jpg',
                instagram: 'https://www.instagram.com/_kumari_ankita?igsh=MWZsZHBvYTIxa2V3Ng==',
                linkedin: 'https://www.linkedin.com/in/kumari-ankita-83579422a',
                email: 'ankita_2101cb33@iitp.ac.in'
            },
            {
                name: 'Gaurang Bansal', image: '/team/gaurang.jpg',
                instagram: 'https://www.instagram.com/gaurangbansal2612?igsh=aG1qY3FvN2sycThy',
                linkedin: 'https://www.linkedin.com/in/gaurang-bansal-921577230',
                email: 'gaurang_2101ee29@iitp.ac.in'
            },
            {
                name: 'Kanishk Singh Solanki', image: '/team/kanishk.jpg',
                instagram: 'https://www.instagram.com/username',
                linkedin: 'https://www.linkedin.com',
                email: 'kanishka_2101ph17@iitp.ac.in'
            }
        ],
        eventsAdvisory: [
            {
                name: 'Divyanshee verma', image: '/team/divyanshree.jpg',
                instagram: 'https://www.instagram.com/ivyansh7_ee?igsh=dzN1dG9oMWFhbDhv',
                linkedin: 'www.linkedin.com/in/divyanshee-verma-215802228',
                email: 'divyanshee_2101cb26@iitp.ac.in'
            },
            {
                name: 'Nikita Srivastava', image: '/team/nikita1.jpg',
                instagram: 'https://instagram.com/nikitaasrivastava ',
                linkedin: 'https://www.linkedin.com/in/nikita-srivastava-404bba22a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: 'nikita_2101ce38@iitp.ac.in'
            },
            {
                name: 'Yash Verma', image: '/team/yash.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: '2201ce16_divyam@iitp.ac.in'
            },
            {
                name: 'Shivendra Pratap Singh', image: '/team/shivendra.jpg',
                instagram: 'https://www.instagram.com/x_ulansis?igsh=YWsybjVmaW9zbmVi',
                linkedin: 'https://www.linkedin.com/in/shivendra-pratap-singh-9a392',
                email: '2201ce16_divyam@iitp.ac.in'
            }
        ],
        rspAdvisory: [
            {
                name: 'Gaurav Gupta', image: '/team/Profile.png',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://linkedin.com/in/username',
                email: 'Gaurav_2101ce21@iitp.ac.in'
            },
            ,
            {
                name: 'Khushi Pathak', image: '/team/khushi.jpg',
                instagram: 'https://www.instagram.com/___.darksun._?igsh=bnM4ODBzYTkwaWZt',
                linkedin: 'https://www.linkedin.com/in/khushi-pathak-201041236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: 'khushi_2101me34@iitp.ac.in'
            }
        ],
        hospiAdvisory: [
            {
                name: 'Aditi Kumari', image: '/team/aditi.jpg',
                instagram: 'https://instagram.com/aditi_kumari5907',
                linkedin: 'https://www.linkedin.com/in/aditi-kumari-12b554230',
                email: 'aditi_2101cb05@iitp.ac.in'
            },
            {
                name: 'Devendra Pratap Singh', image: '/team/devendra.jpeg',
                instagram: 'https://www.instagram.com/devendrapratap137/',
                linkedin: 'https://www.linkedin.com/in/devendra1307/',
                email: 'devendra_2101ai13@iitp.ac.in'
            },
            {
                name: 'Aruj Gautam', image: '/team/aruj.jpg',
                instagram: 'https://www.instagram.com/usernmame',
                linkedin: 'https://www.linkedin.com/in/arujgautam/',
                email: 'aruj_2101ee15@iitp.ac.in'
            }
        ],
        TVAdvisory: [
            {
                name: 'Vankudothu Surya Prakash', image: '/team/surya.jpg',
                instagram: 'https://instagram.com/v_s_p_n',
                linkedin: 'https://www.linkedin.com/in/surya-prakash-vankudothu-845484227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: 'vankudothu_2101mc46@iitp.ac.in'
            },
        ],
        webnappAdvisory: [
            {
                name: 'Aritra Bhaduri', image: '/team/aritra.jpg',
                instagram: 'https://instagram.com/username',
                linkedin: 'https://www.linkedin.com/in/aritrabhaduri/',
                email: 'aritra_2101ai40@iitp.ac.in'
            },
            {
                name: 'Anurag Deo', image: '/team/anuragdeo.png',
                instagram: 'https://www.instagram.com/anurag_deo_03/',
                linkedin: 'https://www.linkedin.com/in/anurag-deo-8b30b422b',
                email: 'anurag_2101ai04@iitp.ac.in'
            },
            {
                name: 'Arvind Meena', image: '/team/arvind.jpg',
                instagram: 'https://www.instagram.com/arvind_meena2005/',
                linkedin: 'https://www.linkedin.com/in/arvindri2005',
                email: 'arvind_2101ee16@iitp.ac.in'
            }
        ],
        sponsAdvisory: [
            {
                name: 'Aviral Srivastava', image: '/team/aviral.jpg',
                instagram: 'https://www.instagram.com/aviral_2393?igsh=MXg2ZnRhYWl2Yzl6eQ==',
                linkedin: 'https://www.linkedin.com/in/aviral-srivastava23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: 'aviral_2101ee88@iitp.ac.in'
            },
            {
                name: 'Ritvik Kadiri', image: '/team/ritvik.JPG',
                instagram: 'https://www.instagram.com/username',
                linkedin: 'https://www.linkedin.com/in/venkata-sai-ritvik-kadiri-178a5022a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                email: 'kadiri_2101mc24@iitp.ac.in'
            },
            {
                name: 'Suryansh Bansal', image: '/team/suryansh.jpg',
                instagram: 'https://www.instagram.com/username',
                linkedin: 'https://www.linkedin.com/in/suryansh-bansal-09507b241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                email: 'suryansh_2101cb58@iitp.ac.in'
            }
        ],
        PnDAdvisory: [
            {
                name: 'Dhrutisundar Sahoo', image: '/team/dhrutisundar.jpg',
                instagram: 'https://www.instagram.com/__infinite.d.__/',
                linkedin: 'https://linkedin.com/in/dhrutisundar-sahoo/',
                email: 'dhrutisundar_2101ee26@iitp.ac.in'
            },
            {
                name: 'Diptadip Malik', image: '/team/diptadip.jpg',
                instagram: 'https://www.instagram.com/_._d1pt0_._?igsh=MW9kNXYxZnAycmIwNQ==',
                linkedin: 'https://www.linkedin.com/in/dipto21',
                email: 'user@example.com'
            },
            {
                name: 'Varesh', image: '/team/varesh.jpg',
                instagram: 'javascript:void(0)',
                linkedin: 'https://linkedin.com/in/vareshmukhekar',
                email: ' varesh_2101mm37@iitp.ac.in'
            },
            {
                name: 'Arkadeep Acharya', image: '/team/arkadeep.jpg',
                instagram: 'https://www.instagram.com/arkadeep.acharya_03?igsh=b3p6c3UxYXlrOTJi',
                linkedin: 'https://www.linkedin.com/in/arkadeep-acharya-404b41226/',
                email: ' arkadeep_2101ai41@iitp.ac.in'
            },
            {
                name: 'Vikramaditya', image: '/team/vikramaditya.jpeg',
                instagram: 'https://www.instagram.com/lord_raven_73?igsh=ZHh0MXJweWFhdGlr&utm_source=qr',
                linkedin: 'https://www.linkedin.com/in/vikramaditya-k-76a93a247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                email: ' kondepudi_2101cb31@iitp.ac.in'
            }
        ],
    }


    return (
        <div className={styles.parentContainer}>

            <Head>
                <title>Team - Anwesha 2024</title>
                <meta name="description" content="Team-Anwesha 2024" />
                <link rel="icon" href="./logo_no_bg.svg" />
            </Head>


            <div className={styles.fullPageTitle} style={bgStyle}>
                <div className={styles.titleOverlay} style={titleStyle}>
                    <p className={styles.subTitle} >
                        TEAM
                    </p>
                    <p
                        className={styles.mainTitle}
                    >
                        <span className={styles.firstLetter}>A</span>NWESHA
                        <span className={styles.lastNumber}>'25</span>
                    </p>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.coordinators}>
                    {/* {[...Array(n)].map((e, i) =>  */}
                    <CoordCard data={data.festcoord} title={<><span>Fest</span><br /><span>Coordinator</span></>} />
                    <hr className={styles.teamHeadingBar} />
                    <CoordCard data={data.spons} title={<><span>Spons</span><br /><span>Committee</span></>} />
                    <CoordCard data={data.mpr} title={<><span>MPR</span><br /><span>Committee</span></>} />
                    <CoordCard data={data.webnapp} title={<><span>Web &</span><br /><span>App</span></>} />
                    <CoordCard data={data.events} title={<><span>Events</span><br /><span>Committee</span></>} />
                    <CoordCard data={data.rsp} title={<><span>RSP</span><br /><span>Committee</span></>} />
                    <CoordCard data={data.hospi} title={<><span>Hospitality</span><br /><span>Committee</span></>} />
                    <CoordCard data={data.cnd} title={<><span>Production &</span><br /><span>Design</span></>} />

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
                    <CoordCard data={data.PnDAdvisory} title="Production & Design" />


                </div>
            </div>
        </div>
    )
}
