/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            'images.unsplash.com',
            'user-images.githubusercontent.com',
            'avatars.githubusercontent.com',
            'www.internationalmusicfestival.com',
            'drive.google.com',
            'i.ibb.co',
            'kvibbihar.com'
        ],
    },
}

module.exports = nextConfig
