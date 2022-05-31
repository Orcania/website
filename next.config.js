module.exports = {
    reactStrictMode: true,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: false,
            },
            {
                source: '/mint',
                destination: '/ico',
                permanent: false,
            },
        ];
    },
};
