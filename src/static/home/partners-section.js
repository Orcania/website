const templatePartnerSection = [
    {
        link: 'https://www.polygon.technology/',
        logo: 'media/partners/polygon.svg',
        alt: 'Polygon',
    },
    {
        link: 'https://www.harmony.one/',
        logo: 'media/partners/harmony.svg',
        alt: 'Harmony',
    },
    {
        link: 'https://boba.network/',
        logo: 'media/partners/boba.svg',
        alt: 'Boba',
    },
];

const templatePartnerSecondDiv = [
    {
        link: 'https://www.theredapefamily.com/home',
        logo: 'media/partners/traf.svg',
        alt: 'The Red Ape Family',
    },
    {
        link: 'https://www.meconcash.com/index_en.html',
        logo: 'media/partners/meconcash.png',
        alt: 'Meconcash',
    },
    {
        link: 'https://www.chaoticdjs.com/',
        logo: 'media/partners/chaotic_djs.png',
        alt: 'Chaoctic DJs',
    },
    // {
    //     link: '',
    //     logo: 'media/partners/boba-logo.png',
    //     alt: 'Boba',
    // },
    // {
    //     link: 'https://cryptoland.io/',
    //     logo: 'media/partners/crypto-coin.png',
    //     alt: 'CryptoLand',
    // },
];

let partnerSection = [];
let partnerSectionSecondDivision = [];

for (let i = 0; i < 10; i++) {
    partnerSection = [...partnerSection, ...templatePartnerSection];
}

for (let i = 0; i < 10; i++) {
    partnerSectionSecondDivision = [...partnerSectionSecondDivision, ...templatePartnerSecondDiv];
}

export { partnerSection, partnerSectionSecondDivision };
