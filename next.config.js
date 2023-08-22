/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["cdn.sanity.io"], // Add 'cdn.sanity.io' to the list of allowed domains
    },
};

module.exports = nextConfig;
