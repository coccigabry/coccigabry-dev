/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
        ]
    }
};

export default nextConfig;
