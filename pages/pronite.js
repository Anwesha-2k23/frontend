import { useRouter } from 'next/router.js'
import { useContext, useEffect } from 'react'
import { proniteRegistration, proniteRegistrationiitp } from '../components/Event Registration/proniteRegistration'
import { AuthContext } from '../components/authContext'

const Pronite = () => {
    const userData = useContext(AuthContext)
    const host = process.env.NEXT_PUBLIC_HOST
    const router = useRouter()
    useEffect(() => {
        const handleRegistration = () => {
            router.push('/userLogin')
        }
        handleRegistration()
    }, [])
}

export default Pronite

