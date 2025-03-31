import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const host = process.env.NEXT_PUBLIC_HOST

const AuthContext = React.createContext()

const { Provider } = AuthContext

const PrivateRoute = ({ children }) => {
    const router = useRouter()
    const authContext = React.useContext(AuthContext)

    useEffect(() => {
        // Redirect to login if the user is unauthenticated and trying to access protected routes
        if (
            !authContext.isAuth &&
            [
                '/event-registration',
                '/event-registrations',
                '/profile',
            ].includes(router.pathname)
        ) {
            router.push('/userLogin')
        }
        // Redirect logged-in users away from the login page
        if (
            authContext.isAuth &&
            (router.pathname === '/userLogin' ||
                router.pathname === '/userRegister')
        ) {
            router.push('/profile')
        }
    }, [authContext.isAuth, router.pathname]) // Dependency array ensures this effect runs on changes to auth status or path

    return children
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    // Function to fetch user data and update the state
    const getUser = async () => {
        try {
            const response = await fetch(`${host}/user/editprofile`, {
                method: 'GET',
                credentials: 'include',
                redirect: 'follow',
            })
            const result = await response.json()

            // Check for specific unauthenticated messages
            if (
                result.message ===
                'You are unauthenticated. Please log in first.' ||
                result.message ===
                'Your token is expired. Please generate a new one.' ||
                result.message === 'Your token is expired. Please log in again.'
            ) {
                setUser(null) // Mark the user as unauthenticated

                // Show error message if accessing restricted routes
                if (
                    [
                        '/profile',
                        '/event-registration',
                        '/event-registrations',
                    ].includes(router.pathname)
                ) {
                    toast.error(result.message, {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    })
                }
            } else {
                setUser(result) // Successfully authenticated, set the user data
            }
        } catch (error) {
            console.error('Error fetching user data:', error)
        }
    }

    // Fetch user data on component mount
    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
            <Provider
                value={{
                    state: { user },
                    setUser,
                    isAuth: user !== null, // Ensure isAuth is correctly tied to user state
                    getUser,
                }}
            >
                {children}
            </Provider>
        </>
    )
}

export { AuthContext, AuthProvider, PrivateRoute }
