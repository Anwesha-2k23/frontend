import Image from 'next/image'
import React from 'react'
import { useEffect, useState, useRef } from 'react'
import styles from '../styles/oursponsors.module.css'
import { Josefin_Sans } from '@next/font/google'

const josefinSans = Josefin_Sans({
    weight: ['400', '700', '500', '600'],
    subsets: ['latin'],
})

const oursponsors = () => {
    const [year, setYear] = useState('spons25')

    const [isOpen, setIsOpen] = useState(false) // State to manage visibility
    const dropdownRef = useRef(null)
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev) // Toggle dropdown visibility
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false) // Close dropdown
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])
    const data = {
        spons23: [
            {
                name: 'Bihar Art Culture and Youth Department',
                image: 'https://drive.google.com/uc?export=view&id=1nYe6yUwWQZU6pSxS7tDNPhhI7Wz8EMex',
                link: '',
            },
            {
                name: 'Bihar Tourism',
                image: 'https://drive.google.com/uc?export=view&id=1pRqsKrhyTbhOpnxnNOKNTVwQxW4krm-L',
                link: 'https://tourism.bihar.gov.in/',
            },
            {
                name: 'Bihar Rajya Pul Nirman Nigam',
                image: 'https://drive.google.com/uc?export=view&id=1sD17yO4Zwm449d9ilTh9cPRoTeUd4tpy',
                link: 'https://brpnnl.bihar.gov.in/',
            },
            {
                name: 'Bihar State Electronics Development Corporation',
                image: 'https://drive.google.com/uc?export=view&id=1QZLHYPSJsMLQUKssih7HPqU5DwMGkcnc',
                link: 'https://bsedc.bihar.gov.in/',
            },
            {
                name: 'Bihar State Building Construction Corporation Limited',
                image: 'https://drive.google.com/uc?export=view&id=12rzaQ86RQfHFE_T0XGc-c8uRi_sQILRZ',
                link: 'https://bsbccl.bihar.gov.in/New_V/Default.aspx',
            },
            {
                name: 'Union Bank of India',
                image: 'https://drive.google.com/uc?export=view&id=1l4ePbFEg3oRMScjzzYJpGkrtBhjuQIMf',
                link: 'https://www.unionbankofindia.co.in/',
            },
            {
                name: 'State Bank of India',
                image: 'https://drive.google.com/uc?export=view&id=1ZaIoqpx07hc7rkyEBbw1bq_pITZnubsO',
                link: 'https://sbi.co.in/',
            },
            {
                name: 'Coca Cola',
                image: 'https://drive.google.com/uc?export=view&id=1AX0r088eZ8-2YDHAGjgesfHIRc6SGZnw',
                link: 'https://cokestudio.coke2home.com/bharat',
            },
            {
                name: 'Bihar State Aids Control Society',
                image: 'https://drive.google.com/uc?export=view&id=1p8hOVd0EQLZXMak9LRnmRAdH_xHnMVTd',
                link: '',
            },
            {
                name: 'Indian Oil Corporation',
                image: 'https://drive.google.com/uc?export=view&id=1S8D9eehYFohjFcOB4acJxmBgc2q8ZQNk',
                link: 'https://iocl.com/',
            },
            {
                name: 'HDFC',
                image: 'https://drive.google.com/uc?export=view&id=1cPLTNv-8TJDEZDW8F_zYaowHbEWAIor6',
                link: 'https://www.hdfcbank.com/',
            },
            {
                name: 'Ruban Memorial',
                image: 'https://drive.google.com/uc?export=view&id=1NWKWJtXsIjpzx5zLHGwSIYhDwWW9iY8W',
                link: 'https://rubanpatliputrahospital.com/',
            },
            {
                name: 'Paras HMRI',
                image: 'https://drive.google.com/uc?export=view&id=1GURsSfaKltukA9EGBD6EVUIyx3QhKk8l',
                link: 'https://www.parashospitals.com/india/paras-hospitals-patna/centres-of-excellence/orthopaedics',
            },
            {
                name: 'We Excel ',
                image: 'https://drive.google.com/uc?export=view&id=12C9Gaz0ZJ8SWFzTOiqJxztWYKkceRTVS',
                link: 'https://weexcel.in/',
            },
            {
                name: 'La Pintura',
                image: '/sponsors/2023/lapintura.jpeg',
                link: 'https://www.instagram.com/lapinturastudio/?hl=en',
            },
            {
                name: 'EduVitae Services',
                image: 'https://drive.google.com/uc?export=view&id=1SFVfSdzoyyRc2_OEG2ZYX-6R29nZCmPC',
                link: 'https://eduvitae.co.in/',
            },
            {
                name: 'Forum IAS',
                image: 'https://drive.google.com/uc?export=view&id=15Qtv-gOK4CnYHTdnONlURFNnQPv9H5l0',
                link: 'https://forumias.com/ias-coaching-in-patna/',
            },
            {
                name: 'Testbook',
                image: '/sponsors/2023/testbook.png',
                link: 'https://testbook.com/',
            },
            {
                name: 'Ultratech Cement',
                image: 'https://drive.google.com/uc?export=view&id=1Tqa82L1TG-NJ0khVFnMChIo1PNdWzqp4',
                link: 'https://www.ultratechcement.com/',
            },
            {
                name: 'Decathalon',
                image: 'https://drive.google.com/uc?export=view&id=155A3E2w-Xp6M_J16GI3kYn_Kqyf1VM1K',
                link: 'https://www.decathlon.in/',
            },
            {
                name: 'Bihar Khadi',
                image: 'http://kvibbihar.com/images/khadi_logo.png',
                link: 'http://www.biharkhadi.com/',
            },
            {
                name: 'Bizeal "The Dream Bakers"',
                image: '/sponsors/2023/bizeal.png',
                link: 'https://www.bizeal.com/',
            },
            {
                name: 'Basic',
                image: 'https://drive.google.com/uc?export=view&id=1BhFpl6SlDGnMriHJhsO0MttgV6ZoINEa',
                link: '',
            },
            {
                name: 'Bulkinza',
                image: '/sponsors/2023/bulkinza.png',
                link: 'https://bulkinza.com/',
            },
            {
                name: 'Sudha',
                image: 'https://drive.google.com/uc?export=view&id=1g26UGW2z-m4qkJKeF4Ug06dWHcwR8Vlr',
                link: 'https://www.patnadairy.org/',
            },
            {
                name: 'FujiFilm Instax',
                image: 'https://drive.google.com/uc?export=view&id=1G3NIuTFl_Rl-tSy-etc05p6yt5kusNPO',
                link: 'https://fujifilmxindia.com/',
            },
            {
                name: 'Pizza Hut',
                image: 'https://drive.google.com/uc?export=view&id=1WNL6lJ17emyTNqqv8-NXB8IHIHHMNLB1',
                link: 'https://www.pizzahut.co.in/',
            },
            {
                name: 'The Comunity Events',
                image: '/sponsors/2023/thecommunityevents.jpg',
                link: 'https://www.facebook.com/thecommunityevents/',
            },
            {
                name: 'Coffee For You',
                image: '/sponsors/2023/coffeeforyou.png',
                link: '',
            },
        ],
        spons24: [
            {
                partner: 'Clothing & Apparel Partner',
                sponsors: [
                    {
                        // name: 'Allen Cooper',
                        image: 'https://drive.google.com/uc?export=view&id=1sk_dXvHZCLN5QGH8x5ae4vjunza7kdwo',
                        link: 'https://www.allencooperindia.com/',
                    },
                ],
            },
            {
                partner: 'Strategic Partner',
                sponsors: [
                    {
                        // name: 'Bihar Tourism',
                        image: 'https://drive.google.com/uc?export=view&id=1sO3UC-XMYPAggeQ_P3loZCSxjbXKiTzk',
                        link: 'https://tourism.bihar.gov.in',
                    },
                    {
                        // name: 'Bihar Rajya Pul Nirman Nigam',
                        image: 'https://drive.google.com/uc?export=view&id=1sD17yO4Zwm449d9ilTh9cPRoTeUd4tpy',
                        link: 'https://brpnnl.bihar.gov.in',
                    },
                    {
                        // name: 'Bihar Council on Science and Technology',
                        image: 'https://drive.google.com/uc?export=view&id=1UBiVYAM7HGv-tjMiyTofA7_ZCWS959MG',
                        link: 'https://bcstnsdnmd.co.in/home/',
                    },
                    {
                        // name: 'NHAI',
                        image: 'https://drive.google.com/uc?export=view&id=1lvnREbJ84WauvAhwBCrtO7P11HO-HUz9',
                        link: 'https://nhai.gov.in/',
                    },
                    {
                        // name: 'NTPC',
                        image: 'https://drive.google.com/uc?export=view&id=13oaVnvbhSXcAZTTajdcwXVJ-4YjGtRBu',
                        link: 'https://www.ntpc.co.in/',
                    },
                    {
                        // name: 'Startup Bihar',
                        image: 'https://drive.google.com/uc?export=view&id=1Vbu1tCEMNPzoeOqpydOcOSxHlPzVz3up',
                        link: 'https://startup.bihar.gov.in/',
                    },
                ],
            },
            {
                partner: 'Food Partner',
                sponsors: [
                    {
                        // name: 'Biryani',
                        image: 'https://drive.google.com/uc?export=view&id=1NzTZh6D-THmqConUzrZ2tvC3PaJU3Ets',
                        link: 'https://biryanibykilo.com',
                    },
                    {
                        // name: 'Dominos',
                        image: 'https://drive.google.com/uc?export=view&id=1EKapSE6Q9xbDmycY0XecwCEHKjxUqZzO',
                        link: 'https://www.dominos.co.in/',
                    },
                    {
                        // name: 'Waffcha',
                        image: 'https://drive.google.com/uc?export=view&id=1mX_WeCIywRV838QPn8AywiEWTSXSzMbM',
                        link: 'https://www.waffcha.com/',
                    },
                    {
                        // name: 'Wat A Burger',
                        image: 'https://drive.google.com/uc?export=view&id=183hiDaFhULaFvHURLFMCWBPmT7RjMRWI',
                        link: 'https://www.wataburger.in/',
                    },
                ],
            },
            {
                partner: 'Audio Partner',
                sponsors: [
                    {
                        // name: 'Boult',
                        image: 'https://drive.google.com/uc?export=view&id=10JmGTjBV_wliW6EoE4ozwnErEHNWZlGe',
                        link: 'https://www.boultaudio.com/',
                    },
                ],
            },
            {
                partner: 'Banking Partner',
                sponsors: [
                    {
                        // name: 'State Bank of India',
                        image: 'https://drive.google.com/uc?export=view&id=1MLfxr5ipb_m3VUkNCiAB3sc00hxz5fi-',
                        link: 'https://www.sbi.co.in/',
                    },
                ],
            },
            {
                partner: 'Radio Partner',
                sponsors: [
                    {
                        // name: 'Red FM',
                        image: 'https://drive.google.com/uc?export=view&id=12n_N2f4FyomvBlLOELPnGhLjgPdzCfkb',
                        link: 'https://redfmindia.in',
                    },
                ],
            },
            {
                partner: 'Print Partner',
                sponsors: [
                    {
                        // name: 'Times of India',
                        image: 'https://drive.google.com/uc?export=view&id=1Ub5Ntbu30Kp-1dpYSeB0M_QtbjGsiVpI',
                        link: 'https://timesofindia.indiatimes.com/',
                    },
                ],
            },
            {
                partner: 'Event Partner',
                sponsors: [
                    {
                        // name: 'The Community Events',
                        image: 'https://drive.google.com/uc?export=view&id=1AA3qGrGqqTbmfo2DAWmkAWXs8KWTDC07',
                        link: 'https://www.facebook.com/thecommunityevents/',
                    },
                ],
            },
            {
                partner: 'Hydration Partner',
                sponsors: [
                    {
                        // name: 'Hydration',
                        image: 'https://drive.google.com/uc?export=view&id=1NXlcqgtvPwuaGzr0KxNWWaIGvNgUWDax',
                        link: '',
                    },
                ],
            },
            {
                partner: 'Key Partner',
                sponsors: [
                    {
                        // name: 'Bihar State Electronics Development Corporation',
                        image: 'https://drive.google.com/uc?export=view&id=1QZLHYPSJsMLQUKssih7HPqU5DwMGkcnc',
                        link: 'https://bsedc.bihar.gov.in/',
                    },
                ],
            },
        ],

        spons25: [
            {
                partner: 'Associate & Event Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1dXMeVRz2jbkW4oFGbCYeNr2ooNPbx9Ox',
                        link: 'https://www.arista.com',
                    },
                ],
            },
            {
                partner: 'Banking Partner',
                sponsors: [
                    {
                        // name: 'State Bank of India',
                        image: 'https://drive.google.com/uc?export=view&id=1MLfxr5ipb_m3VUkNCiAB3sc00hxz5fi-',
                        link: 'https://www.sbi.co.in',
                    },
                ],
            },
            {
                partner: 'Pronite & Fueling Partner',
                sponsors: [
                    {
                        // name: 'Indian Oil & XP95',
                        image: 'https://drive.google.com/uc?export=view&id=1S8D9eehYFohjFcOB4acJxmBgc2q8ZQNk',
                        link: 'https://www.iocl.com',
                    },
                ],
            },
            {
                partner: 'Cultural Partner',
                sponsors: [
                    {
                        // name: 'Spic Macay',
                        image: 'https://drive.google.com/uc?export=view&id=1a18oT-fdAI_A5oOjKEqAkJYqxsqHhFLf',
                        link: 'https://www.instagram.com/spicmacayofficial/?hl=en',
                    },
                ],
            },
            {
                partner: 'Strategic Partners',
                sponsors: [
                    {
                        // name: 'Software Technology Parks of India',
                        image: 'https://drive.google.com/uc?export=view&id=1tCIRaCaE8h8jSht2kXvrOI8Df_5CSD42',
                        link: 'https://stpi.in',
                    },
                    {
                        // name: 'Department of Industries',
                        image: 'https://drive.google.com/uc?export=view&id=1FOtkwzHkA74tK7uMzHYaxSbz8W-N40EN',
                        link: '',
                    },
                    {
                        // name: 'Startup Bihar',
                        image: 'https://drive.google.com/uc?export=view&id=1Vbu1tCEMNPzoeOqpydOcOSxHlPzVz3up',
                        link: 'https://startup.bihar.gov.in/',
                    },
                    {
                        // name: 'Bihar Tourism',
                        image: 'https://drive.google.com/uc?export=view&id=1pRqsKrhyTbhOpnxnNOKNTVwQxW4krm-L',
                        link: 'https://tourism.bihar.gov.in',
                    },
                    {
                        // name: 'Public Health Engineering Department, Bihar',
                        image: 'https://drive.google.com/uc?export=view&id=1oX-0boxmmSYbzBAVuPGMzUujaru3wm5D',
                        link: 'http://phed.bih.nic.in',
                    },
                    {
                        // name: 'Bihar State AIDS Control Society',
                        image: 'https://drive.google.com/uc?export=view&id=1yCcmexPef2xI3lQXo7wJAzliDEyUIxh-',
                        link: 'http://bsacs.in',
                    },
                    {
                        // name: 'Bihar State Building Construction Corporation Limited',
                        image: 'https://drive.google.com/uc?export=view&id=12rzaQ86RQfHFE_T0XGc-c8uRi_sQILRZ',
                        link: 'https://bsbccl.bihar.gov.in',
                    },
                    {
                        // name: 'Ceigall India Limited',
                        image: 'https://drive.google.com/uc?export=view&id=1CxQTY0H12QpCqC0YziCUZrpCFTnZkTsB',
                        link: 'https://ceigall.com',
                    },
                ],
            },
            {
                partner: 'Food Partners',
                sponsors: [
                    {
                        // name: 'KFC',
                        image: 'https://drive.google.com/uc?export=view&id=1wujyrcqa-j8QVYTJ8aA6NAP8mGQS2w5Z',
                        link: 'https://online.kfc.co.in/',
                    },
                    {
                        // name: 'Waffcha',
                        image: 'https://drive.google.com/uc?export=view&id=1mX_WeCIywRV838QPn8AywiEWTSXSzMbM',
                        link: 'https://www.waffcha.com/',
                    },
                ],
            },
            {
                partner: 'Knowledge Partner',
                sponsors: [
                    {
                        // name: 'Konnifel',
                        image: 'https://drive.google.com/uc?export=view&id=1PSx1RqfdGkvXoKL4e11PuG8X_ORouj4Z',
                        link: 'https://konnifel.com',
                    },
                ],
            },

            {
                partner: 'Media Partners',
                sponsors: [
                    {
                        name: 'Garda Patna',
                        image: 'https://drive.google.com/uc?export=view&id=1VIItQYV-XlG0gld1B_Z1aRPyOmgqQVhV',
                        link: 'https://www.instagram.com/gardapatna/',
                    },
                    {
                        // name: 'Asian Times',
                        image: 'https://drive.google.com/uc?export=view&id=1vYUNAIOyvqXlwoeamDbfaq0aKHN7e5hc',
                        link: 'https://asiantimes.in/',
                    },
                    {
                        // name: 'Explore Bihar',
                        image: 'https://drive.google.com/uc?export=view&id=1qqUiTYE_DT4W2KjzodLJak9EE1R7TfLe',
                        link: 'https://www.instagram.com/explore_bihar/?hl=en',
                    },
                    {
                        name: 'Patna Beats',
                        image: 'https://drive.google.com/uc?export=view&id=10oF_KynDEuXJTsiBOo-U1XBvMrAMMkeP',
                        link: 'https://www.patnabeats.com/lander',
                    },
                ],
            },
            {
                partner: 'Official Music Streaming Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1Bmf3E_gAowCSYOYTWcejKUkHd4xOHJaf',
                        link: 'https://www.jiosaavn.com',
                    },
                ],
            },
            {
                partner: 'Biking Partner',
                sponsors: [
                    {
                        // name: 'KTM',
                        image: 'https://drive.google.com/uc?export=view&id=1kJCVCocwlbbqFqnMQZYKroZJrC1E-7kU',
                        link: 'https://www.ktm.com',
                    },
                ],
            },
            {
                partner: 'Workshop Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1MwgAsHfhTbylFntL0pBjTU992YKzAShA',
                        link: 'https://tech-gyan.in/',
                    },
                ],
            },
            {
                partner: 'Photography Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1G3NIuTFl_Rl-tSy-etc05p6yt5kusNPO',
                        link: 'https://www.fujifilm.com/in/en/consumer/instax',
                    },
                ],
            },
            {
                partner: 'Education Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1mjlgk_6CMinLARP22Q72fTO3bzPXMP8X',
                        link: 'https://www.instagram.com/civilsphodo/',
                    },
                ],
            },

            {
                partner: 'Self Care Partner',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1Hw-atUyrcs5ZQXb3rp84nx3t55LYGmNe',
                        link: 'https://smartandhandsome.in/',
                    },
                ],
            },

            {
                partner: 'Event Sponsor',
                sponsors: [
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1rAyeAtwSJeSXSXaf3SHaSM2e0KFLUJxH',
                        link: 'https://finvasia.com',
                    },
                    {
                        // khadi bihar
                        image: 'https://drive.google.com/uc?export=view&id=1SVi0330iEG31s0sOTjcemIyfJwFG-mwu',
                        link: 'https://www.biharkhadi.com/',
                    },
                    {
                        image: 'https://drive.google.com/uc?export=view&id=179PmT23fZr1DF4yHGkw7JQxQVbqAn9hU',
                        link: 'https://www.plushforher.com/',
                    },
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1nclvMpEH7K9obHTvJKPoGVFFrJ8isq2b',
                        link: 'https://www.instagram.com/dop.aminestore/',
                    },
                    {
                        image: 'https://drive.google.com/uc?export=view&id=1KPRkyISX-Zyv6ILRi8gSYBgLoNC0F2VN',
                        link: 'https://www.instagram.com/priyankas_fashionvilla_/',
                    },
                ],
            },

            {
                partner: 'Key Sponsors',
                sponsors: [
                    {
                        // name: 'Sudha',
                        image: 'https://drive.google.com/uc?export=view&id=1g26UGW2z-m4qkJKeF4Ug06dWHcwR8Vlr',
                        link: 'http://www.sudha.coop',
                    },
                    {
                        // name: 'Red Bull',
                        image: 'https://drive.google.com/uc?export=view&id=1AWiAE20it80F2XaBcx2X6QPHlB932hgz',
                        link: 'https://www.redbull.com',
                    },
                ],
            },
        ],
        // spons25: [
        //     {
        //         // name: 'ARISTA Networks',
        //         image: 'https://drive.google.com/uc?export=view&id=1dXMeVRz2jbkW4oFGbCYeNr2ooNPbx9Ox',
        //         link: 'https://www.arista.com',
        //         partner: 'Associate & Event Partner',
        //     },
        //     {
        //         // name: 'State Bank of India',
        //         image: 'https://drive.google.com/uc?export=view&id=1MLfxr5ipb_m3VUkNCiAB3sc00hxz5fi-',
        //         link: 'https://www.sbi.co.in',
        //         partner: 'Banking Partner',
        //     },
        //     {
        //         // name: 'Indian Oil & XP95',
        //         image: 'https://drive.google.com/uc?export=view&id=1S8D9eehYFohjFcOB4acJxmBgc2q8ZQNk',
        //         link: 'https://www.iocl.com',
        //         partner: 'Pronite & Fueling Partner',
        //     },
        //     {
        //         // name: 'Spic Macay',
        //         image: 'https://drive.google.com/uc?export=view&id=1a18oT-fdAI_A5oOjKEqAkJYqxsqHhFLf',
        //         link: 'https://www.instagram.com/spicmacayofficial/?hl=en',
        //         partner: 'Cultural Partner',
        //     },
        //     {
        //         name: 'Software Technology Parks of India',
        //         image: 'https://drive.google.com/uc?export=view&id=1tCIRaCaE8h8jSht2kXvrOI8Df_5CSD42',
        //         link: 'https://stpi.in',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         // name: 'Department of Industries',
        //         image: 'https://drive.google.com/uc?export=view&id=1FOtkwzHkA74tK7uMzHYaxSbz8W-N40EN',
        //         link: '',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         // name: 'Startup Bihar',
        //         image: 'https://drive.google.com/uc?export=view&id=1Vbu1tCEMNPzoeOqpydOcOSxHlPzVz3up',
        //         link: 'https://startup.bihar.gov.in/',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         // name: 'Bihar Tourism',
        //         image: 'https://drive.google.com/uc?export=view&id=1pRqsKrhyTbhOpnxnNOKNTVwQxW4krm-L',
        //         link: 'https://tourism.bihar.gov.in',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         name: 'Public Health Engineering Department, Bihar',
        //         image: 'https://drive.google.com/uc?export=view&id=1oX-0boxmmSYbzBAVuPGMzUujaru3wm5D',
        //         link: 'http://phed.bih.nic.in',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         name: 'Bihar State AIDS Control Society',
        //         image: 'https://drive.google.com/uc?export=view&id=1yCcmexPef2xI3lQXo7wJAzliDEyUIxh-',
        //         link: 'http://bsacs.in',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         name: 'Bihar State Building Construction Corporation Limited',
        //         image: 'https://drive.google.com/uc?export=view&id=12rzaQ86RQfHFE_T0XGc-c8uRi_sQILRZ',
        //         link: 'https://bsbccl.bihar.gov.in',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         // name: 'Ceigall India Limited',
        //         image: 'https://drive.google.com/uc?export=view&id=1CxQTY0H12QpCqC0YziCUZrpCFTnZkTsB',
        //         link: 'https://ceigall.com',
        //         partner: 'Strategic Partner',
        //     },
        //     {
        //         // name: 'KFC',
        //         image: 'https://drive.google.com/uc?export=view&id=1wujyrcqa-j8QVYTJ8aA6NAP8mGQS2w5Z',
        //         link: 'https://online.kfc.co.in/',
        //         partner: 'Food Partner',
        //     },
        //     {
        //         // name: 'Waffcha',
        //         image: 'https://drive.google.com/uc?export=view&id=1mX_WeCIywRV838QPn8AywiEWTSXSzMbM',
        //         link: 'https://www.waffcha.com/',
        //         partner: 'Food Partner',
        //     },
        //     {
        //         // name: 'KTM',
        //         image: 'https://drive.google.com/uc?export=view&id=1kJCVCocwlbbqFqnMQZYKroZJrC1E-7kU',
        //         link: 'https://www.ktm.com',
        //         partner: 'Biking Partner',
        //     },
        //     {
        //         // name: 'Konnifel',
        //         image: 'https://drive.google.com/uc?export=view&id=1PSx1RqfdGkvXoKL4e11PuG8X_ORouj4Z',
        //         link: 'https://konnifel.com',
        //         partner: 'Knowledge Partner',
        //     },
        //     {
        //         // name: 'Civil Fodo',
        //         image: 'https://drive.google.com/uc?export=view&id=1mjlgk_6CMinLARP22Q72fTO3bzPXMP8X',
        //         link: 'https://www.instagram.com/civilsphodo/',
        //         partner: 'Education Partner',
        //     },
        //     {
        //         // name: 'JioSaavn',
        //         image: 'https://drive.google.com/uc?export=view&id=1Bmf3E_gAowCSYOYTWcejKUkHd4xOHJaf',
        //         link: 'https://www.jiosaavn.com',
        //         partner: 'Official Music Streaming Partner',
        //     },
        //     {
        //         // name: 'Finvasia',
        //         image: 'https://drive.google.com/uc?export=view&id=1rAyeAtwSJeSXSXaf3SHaSM2e0KFLUJxH',
        //         link: 'https://finvasia.com',
        //         partner: 'Event Sponsor',
        //     },
        //     {
        //         name: 'Garda Patna',
        //         image: 'https://drive.google.com/uc?export=view&id=1VIItQYV-XlG0gld1B_Z1aRPyOmgqQVhV',
        //         link: 'https://www.instagram.com/gardapatna/',
        //         partner: 'Media Partner',
        //     },
        //     {
        //         // name: 'Asian Times',
        //         image: 'https://drive.google.com/uc?export=view&id=1vYUNAIOyvqXlwoeamDbfaq0aKHN7e5hc',
        //         link: 'https://asiantimes.in/',
        //         partner: 'Media Partner',
        //     },
        //     {
        //         // name: 'Explore Bihar',
        //         image: 'https://drive.google.com/uc?export=view&id=1qqUiTYE_DT4W2KjzodLJak9EE1R7TfLe',
        //         link: 'https://www.instagram.com/explore_bihar/?hl=en',
        //         partner: 'Media Partner',
        //     },
        //     {
        //         name: 'Patna Beats',
        //         image: 'https://drive.google.com/uc?export=view&id=10oF_KynDEuXJTsiBOo-U1XBvMrAMMkeP',
        //         link: 'https://www.patnabeats.com/lander',
        //         partner: 'Media Partner',
        //     },
        //     {
        //         // name: 'Techgyaan',
        //         image: 'https://drive.google.com/uc?export=view&id=1MwgAsHfhTbylFntL0pBjTU992YKzAShA',
        //         link: 'https://tech-gyan.in/',
        //         partner: 'Workshop Partner',
        //     },
        //     {
        //         // name: 'Instax Fujifilm',
        //         image: 'https://drive.google.com/uc?export=view&id=1G3NIuTFl_Rl-tSy-etc05p6yt5kusNPO',
        //         link: 'https://www.fujifilm.com/in/en/consumer/instax',
        //         partner: 'Photography Partner',
        //     },
        //     {
        //         // name: 'Smart and Handsome',
        //         image: 'https://drive.google.com/uc?export=view&id=1Hw-atUyrcs5ZQXb3rp84nx3t55LYGmNe',
        //         link: 'https://smartandhandsome.in/',
        //         partner: 'Self Care Partner',
        //     },
        //     {
        //         // name: 'Sudha',
        //         image: 'https://drive.google.com/uc?export=view&id=1g26UGW2z-m4qkJKeF4Ug06dWHcwR8Vlr',
        //         link: 'http://www.sudha.coop',
        //         partner: 'Key Sponsor',
        //     },
        //     {
        //         // name: 'Red Bull',
        //         image: 'https://drive.google.com/uc?export=view&id=1AWiAE20it80F2XaBcx2X6QPHlB932hgz',
        //         link: 'https://www.redbull.com',
        //         partner: 'Key Sponsor',
        //     },
        // ],
    }
    return (
        <div className={styles.parentContainer}>
            <div className={styles.wave} style={{ paddingTop: '4vw' }}>
                <div className={styles.container}>
                    <h2
                        className={styles.teamHeader}
                        style={{
                            color: 'rgb(80, 255, 0)',
                        }}
                    >
                        {' '}
                        OUR SPONSORS
                    </h2>
                    <div className={styles.dropdownContainer} ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className={styles.dropdownButton}
                        >
                            Previous Years Sponsors
                            <span className={styles.arrow}>▼</span>
                        </button>
                        {isOpen && (
                            <div className={styles.dropdownContent}>
                                <a
                                    onClick={() => setYear('spons23')}
                                    className={
                                        year === 'spons23'
                                            ? styles.disabled
                                            : ''
                                    }
                                >
                                    2023-2024
                                </a>
                                <a
                                    onClick={() => setYear('spons24')}
                                    className={
                                        year === 'spons24'
                                            ? styles.disabled
                                            : ''
                                    }
                                >
                                    2024-2025
                                </a>
                                <a
                                    onClick={() => setYear('spons25')}
                                    className={
                                        year === 'spons25'
                                            ? styles.disabled
                                            : ''
                                    }
                                >
                                    2025-2026
                                </a>
                            </div>
                        )}
                    </div>
                    {/* <div className={styles.coordinators}>
                        <div className={styles.picContainer}>
                            {data[year]?.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <div className={styles.teamCard}>
                                        <div className={styles.teamImage}>
                                            {' '}
                                            <Image
                                                src={`${item.image}`}
                                                className={styles.memberImage}
                                                height={220}
                                                width={220}
                                                alt={item.name}
                                            />
                                        </div>
                                        <div
                                            className={styles.teamMemberDetails}
                                        >
                                            <div className={styles.memberName}>
                                                {item.name}
                                            </div>
                                            <div className={styles.partner}>
                                                {item.partner}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div> */}
                    <div className={styles.coordinators}>
                        <div className={styles.picContainer}>
                            {year === 'spons25' || year === 'spons24'
                                ? data[year]?.map((category, index) => (
                                      <div
                                          key={index}
                                          className={styles.partnerGroup}
                                      >
                                          <h3 className={styles.partnerHeading}>
                                              {category.partner}
                                          </h3>
                                          <div className={styles.sponsorGrid}>
                                              {category.sponsors.map(
                                                  (sponsor, i) => (
                                                      <a
                                                          key={i}
                                                          href={sponsor.link}
                                                          target="_blank"
                                                          rel="noreferrer"
                                                          style={{
                                                              color: 'black',
                                                              textDecoration:
                                                                  'none',
                                                          }}
                                                      >
                                                          <div
                                                              className={
                                                                  styles.teamCard
                                                              }
                                                          >
                                                              <div
                                                                  className={
                                                                      styles.teamImage
                                                                  }
                                                              >
                                                                  <Image
                                                                      src={
                                                                          sponsor.image
                                                                      }
                                                                      className={
                                                                          styles.memberImage
                                                                      }
                                                                      height={
                                                                          220
                                                                      }
                                                                      width={
                                                                          220
                                                                      }
                                                                      alt={
                                                                          sponsor.name
                                                                      }
                                                                  />
                                                              </div>
                                                              <div
                                                                  className={
                                                                      styles.teamMemberDetails
                                                                  }
                                                              >
                                                                  <div
                                                                      className={
                                                                          styles.memberName
                                                                      }
                                                                  >
                                                                      {
                                                                          sponsor.name
                                                                      }
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </a>
                                                  )
                                              )}
                                          </div>
                                      </div>
                                  ))
                                : data[year]?.map((sponsor, index) => (
                                      <a
                                          key={index}
                                          href={sponsor.link}
                                          target="_blank"
                                          rel="noreferrer"
                                          style={{
                                              color: 'black',
                                              textDecoration: 'none',
                                          }}
                                      >
                                          <div className={styles.teamCard}>
                                              <div className={styles.teamImage}>
                                                  <Image
                                                      src={sponsor.image}
                                                      className={
                                                          styles.memberImage
                                                      }
                                                      height={220}
                                                      width={220}
                                                      alt={sponsor.name}
                                                  />
                                              </div>
                                              <div
                                                  className={
                                                      styles.teamMemberDetails
                                                  }
                                              >
                                                  <div
                                                      className={
                                                          styles.memberName
                                                      }
                                                  >
                                                      {sponsor.name}
                                                  </div>
                                                  <div
                                                      className={styles.partner}
                                                  >
                                                      {sponsor.partner}
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default oursponsors
