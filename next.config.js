const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/members',
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;
