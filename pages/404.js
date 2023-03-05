import Image from 'next/image'
import React from 'react'

const Custom404 = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/404.png")',
                height: '100vh',
                width: '100vw',
                backgroundPosition: 'center',
                backgroundRepeat: 'repat-x',
                display: 'flex',
                justifyContent: 'center',
                backgroundSize: 'contain'
            }}
        >
            <div style={{color:'white', fontWeight:'700', fontSize:'62px', position:'absolute', top: '360px' }}>404</div>
            <br />
            <div style={{color:'white', fontWeight:'700', fontSize:'62px', position:'absolute', top: '420px' }}>Page not found</div>
        </div>
    )
}

export default Custom404
