module.exports = {
    reactStrictMode: false,
    env: {
        FONT_AWESOME_KEY: '8d70729523',
        ENDPOINT: 'https://zerotwo.art',
        MINT_ENDPOINT: 'icoserver.orcania.io',
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
