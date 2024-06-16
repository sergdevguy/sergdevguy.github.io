/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
