import Image from 'next/image'
import React from 'react'
import styles from '../styles/oursponsors.module.css'

const oursponsors = () => {
    // const n = 4;
    const data = {
        coordinators: [
            { name: 'Bihar Urban Infrastructure Development Corporation Limited', image: 'https://drive.google.com/uc?export=view&id=130g30785sNwC_dDr6hURI-HOGG5TQ4ZZ', link: 'http://www.buidco.in/' },
            { name: 'Bihar Art Culture and Youth Department', image: 'https://drive.google.com/uc?export=view&id=1nYe6yUwWQZU6pSxS7tDNPhhI7Wz8EMex', link: '' },
            { name: 'Bihar Tourism', image: 'https://drive.google.com/uc?export=view&id=1pRqsKrhyTbhOpnxnNOKNTVwQxW4krm-L', link: 'https://tourism.bihar.gov.in/' },
            { name: 'Bihar Rajya Pul Nirman Nigam', image: 'https://drive.google.com/uc?export=view&id=1sD17yO4Zwm449d9ilTh9cPRoTeUd4tpy', link: 'https://brpnnl.bihar.gov.in/' },
            { name: 'Bihar State Electronics Development Corporation', image: 'https://drive.google.com/uc?export=view&id=1QZLHYPSJsMLQUKssih7HPqU5DwMGkcnc', link: 'https://bsedc.bihar.gov.in/' },
            { name: 'Bihar State Building Construction Corporation Limited', image: 'https://drive.google.com/uc?export=view&id=12rzaQ86RQfHFE_T0XGc-c8uRi_sQILRZ', link: 'https://bsbccl.bihar.gov.in/New_V/Default.aspx' },
            { name: 'Union Bank of India', image: 'https://drive.google.com/uc?export=view&id=1l4ePbFEg3oRMScjzzYJpGkrtBhjuQIMf', link: 'https://www.unionbankofindia.co.in/' },
            { name: 'State Bank of India', image: 'https://drive.google.com/uc?export=view&id=1ZaIoqpx07hc7rkyEBbw1bq_pITZnubsO', link: 'https://sbi.co.in/' },
            { name: 'Coca Cola', image: 'https://drive.google.com/uc?export=view&id=1AX0r088eZ8-2YDHAGjgesfHIRc6SGZnw', link: 'https://cokestudio.coke2home.com/bharat' },
            { name: 'Bihar State Aids Control Society', image: 'https://drive.google.com/uc?export=view&id=1p8hOVd0EQLZXMak9LRnmRAdH_xHnMVTd', link: '' },
            { name: 'Indian Oil Corporation', image: 'https://drive.google.com/uc?export=view&id=1S8D9eehYFohjFcOB4acJxmBgc2q8ZQNk', link: 'https://iocl.com/' },
            { name: 'HDFC', image: 'https://drive.google.com/uc?export=view&id=1cPLTNv-8TJDEZDW8F_zYaowHbEWAIor6', link: 'https://www.hdfcbank.com/' },
            { name: 'Ruban Memorial', image: 'https://drive.google.com/uc?export=view&id=1NWKWJtXsIjpzx5zLHGwSIYhDwWW9iY8W', link: 'https://rubanpatliputrahospital.com/' },
            { name: 'Paras HMRI', image: 'https://drive.google.com/uc?export=view&id=1GURsSfaKltukA9EGBD6EVUIyx3QhKk8l', link: 'https://www.parashospitals.com/india/paras-hospitals-patna/centres-of-excellence/orthopaedics' },
            { name: 'We Excel ', image: 'https://drive.google.com/uc?export=view&id=12C9Gaz0ZJ8SWFzTOiqJxztWYKkceRTVS', link: 'https://weexcel.in/' },
            { name: 'La Pintura', image: '/sponsors/lapintura.jpeg', link: 'https://www.instagram.com/lapinturastudio/?hl=en' },
            { name: 'EduVitae Services', image: 'https://drive.google.com/uc?export=view&id=1SFVfSdzoyyRc2_OEG2ZYX-6R29nZCmPC', link: 'https://eduvitae.co.in/' },
            { name: 'Forum IAS', image: 'https://drive.google.com/uc?export=view&id=15Qtv-gOK4CnYHTdnONlURFNnQPv9H5l0', link: 'https://forumias.com/ias-coaching-in-patna/' },
            { name: 'Testbook', image: '/sponsors/testbook.png', link: 'https://testbook.com/' },
            { name: 'Ultratech Cement', image: 'https://drive.google.com/uc?export=view&id=1Tqa82L1TG-NJ0khVFnMChIo1PNdWzqp4', link: 'https://www.ultratechcement.com/' },
            { name: 'Decathalon', image: 'https://drive.google.com/uc?export=view&id=155A3E2w-Xp6M_J16GI3kYn_Kqyf1VM1K', link: 'https://www.decathlon.in/' },
            { name: 'Bihar Khadi', image: 'http://kvibbihar.com/images/khadi_logo.png', link: 'http://www.biharkhadi.com/' },
            { name: 'Bizeal "The Dream Bakers"', image: '/sponsors/bizeal.png', link: 'https://www.bizeal.com/' },
            { name: 'Talentwala', image: 'https://drive.google.com/uc?export=view&id=1VnxW_CraRRFX5afz5krpZ0H7mRut69Oz', link: '' },
            { name: 'Basic', image: 'https://drive.google.com/uc?export=view&id=1BhFpl6SlDGnMriHJhsO0MttgV6ZoINEa', link: '' },
            { name: 'Bulkinza', image: 'https://bulkinza.com/wp-content/uploads/2022/10/cropped-cropped-cropped-png-logo-18.png', link: 'https://bulkinza.com/' },
            { name: 'Sudha', image: 'https://drive.google.com/uc?export=view&id=1g26UGW2z-m4qkJKeF4Ug06dWHcwR8Vlr', link: 'https://www.patnadairy.org/' },
            { name: 'FujiFilm Instax', image: 'https://drive.google.com/uc?export=view&id=1G3NIuTFl_Rl-tSy-etc05p6yt5kusNPO', link: 'https://fujifilmxindia.com/' },
            { name: 'Pizza Hut', image: 'https://drive.google.com/uc?export=view&id=1WNL6lJ17emyTNqqv8-NXB8IHIHHMNLB1', link: 'https://www.pizzahut.co.in/' },
            { name: 'The Comunity Events', image: 'https://scontent.fpat1-1.fna.fbcdn.net/v/t39.30808-6/299511904_434321178716617_6383655103419683984_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xhKjzVW6KnQAX_0oD-Y&_nc_ht=scontent.fpat1-1.fna&oh=00_AfB3kkEsA1WaJ2qjyTCF5e6rYeScPMEhb-qZMYpfZgBcJw&oe=6422A03D', link: 'https://www.facebook.com/thecommunityevents/' },
            { name: 'Coffee For You', image: '/sponsors/coffeeforyou.png', link: '' },

        ],
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <h2 className={styles.teamHeader}> Past Sponsors</h2>
                <hr className={styles.teamHeadingBar} />
                <div className={styles.coordinators}>
                    {/* <h2 className={styles.teamSubHeading}>Coordinators</h2> */}
                    {/* <hr className={styles.teamSubHeadingBar} /> */}
                    <div className={styles.picContainer}>
                        {/* {[...Array(n)].map((e, i) =>  */}
                        {data.coordinators.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                                <div className={styles.teamCard}>
                                    <img
                                        className={styles.memberImage}
                                        height={220}
                                        width={220}
                                        src={`${item.image}`}
                                        alt={item.name}
                                    />
                                    <div className={styles.teamMemberDetails}>
                                        <div className={styles.memberName}>
                                            <strong>{item.name}</strong>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default oursponsors
