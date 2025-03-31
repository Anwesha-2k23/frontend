import Image from 'next/image';
import React from 'react';

const Custom404 = () => {
    return (
        <div
            style={{
                backgroundImage: 'url("/404.png")',
                height: '100%',
                position: 'relative',
                width: '100%',
                backgroundPosition: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Error Image */}
            <div
                style={{
                    backgroundImage: 'url("/error404.png")',
                    height: '100vh',
                    width: '75vw',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundSize: 'contain',
                    mixBlendMode: 'color-dodge',
                }}
            ></div>

            {/* Return Home Button */}
            <a
                href="/"
                style={{
                    backgroundImage: 'url("/redbutton.png")',
                    backgroundSize: 'contain', 
                    color: '#FF0000',
                    zIndex: '1',
                    padding: '10px 20px',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontFamily: '"SF Ironsides", sans-serif',
                    textTransform: 'uppercase',
                    fontSize: 'clamp(32px, 4vw, 34px)', // Responsive font size
                    fontWeight: 'bold',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    position: 'absolute',
                    bottom: 'clamp(50px, 10vh, 100px)', // Responsive positioning
                    textAlign: 'center',
                    minWidth: 'min(180px, 80vw)', 
                }}
            >
                Home Page
            </a>
            <style jsx global>{`
                @import url('https://fonts.cdnfonts.com/css/sf-ironsides');
            `}</style>
        </div>
    );
};

export default Custom404;
