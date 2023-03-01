import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const host = process.env.NEXT_PUBLIC_HOST

const AuthContext = React.createContext()

const { Provider } = AuthContext

const PrivateRoute = ({ children }) => {
    const router = useRouter()
    const authContext = React.useContext(AuthContext)

    useEffect(() => {
        if (
            authContext.state.user === null &&
            ['/profile', '/event-registration'].includes(router.pathname)
        ) {
            router.push('/userLogin')
        } else if (
            authContext.state.user !== null &&
            ['/userLogin', '/userRegister'].includes(router.pathname)
        ) {
            router.push('/profile')
        }
    })

    return children
}

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    function getUser() {
        fetch(`${host}/user/editprofile`, {
            method: 'GET',
            credentials: 'include',
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((result) => {
                if (
                    result.message ===
                        'you are unauthenticated , Please Log in First' ||
                    result.message ===
                        'Your token is expired please generate new one' ||
                    result.message ===
                        'Your token is expired please login again'
                ) {
                    setUser(null)
                } else {
                    setUser(result)
                }
                console.log(result)
            })
            .catch((error) => console.log('error', error))
    }
    useEffect(() => {
        getUser()
    }, [])
    return (
        <Provider
            value={{
                state: { user: user },
                setUser: setUser,
                isAuth: user !== null,
                getUser: getUser,
            }}
        >
            {children}
        </Provider>
    )
}

export { AuthContext, AuthProvider, PrivateRoute }
