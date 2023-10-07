/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"], // Add 'cdn.sanity.io' to the list of allowed domains
    },
};

module.exports = nextConfig;
