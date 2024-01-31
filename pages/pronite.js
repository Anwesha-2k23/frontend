import { useRouter } from 'next/router.js'
import { useEffect } from 'react';

const Pronite = () => {
    const router = useRouter();
    useEffect(() => {
        const handleRegistration = () => {
            router.push('/registration');
        };
        handleRegistration();
    }, []);
}

export default Pronite;