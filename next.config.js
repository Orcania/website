module.exports = {
    reactStrictMode: false,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'https://zerotwo.art',
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
