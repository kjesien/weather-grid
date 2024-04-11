/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "openweathermap.org",
                port: "",
                pathname: "/img/wn/*.png",
            },
        ],
    },
};

export default nextConfig;
