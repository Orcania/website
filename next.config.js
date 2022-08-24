module.exports = {
    reactStrictMode: false,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'https://zerotwo.art',
        // MINT_ENDPOINT: 'https://icoserver.orcania.io',
        MINT_ENDPOINT: 'http://193.176.87.163:8080',
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

    async rewrites() {
        return [
            {
                source: '/referral-program',
                destination: process.env.NODE_ENV === 'production' ? '/404' : '/referral-program',
            },
        ];
    },
};
