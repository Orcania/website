/* eslint-disable import/no-mutable-exports */
const templatePartnerSection = [
    {
        id: 1,
        link: 'https://www.polygon.technology/',
        logo: 'media/partners/polygon.svg',
        alt: 'Polygon',
    },
    { id: 2, link: 'https://www.harmony.one/', logo: 'media/partners/harmony.svg', alt: 'Harmony' },
    { id: 3, link: 'https://boba.network/', logo: 'media/partners/boba.svg', alt: 'Boba' },
];

const templatePartnerSecondDiv = [
    { id: 1, link: 'https://www.theredapefamily.com/home', logo: 'media/partners/traf.svg', alt: 'The Red Ape Family' },
    { id: 2, link: 'https://www.meconcash.com/index_en.html', logo: 'media/partners/meconcash.png', alt: 'Meconcash' },
    { id: 3, link: 'https://www.chaoticdjs.com/', logo: 'media/partners/chaotic_djs.png', alt: 'Chaoctic DJs' },

    { id: 4, link: 'https://cryptoland.io/', logo: 'media/partners/crypto-coin.png', alt: 'CryptoLand' },
    {
        id: 5,
        link: 'https://www.royalfalcon.club/',
        logo: 'media/partners/rfc.png',
        alt: 'The Space',
    },
];

let partnerSection = [];
let partnerSectionSecondDivision = [];

for (let i = 0; i < 10; i += 1) {
    partnerSection = [...partnerSection, ...templatePartnerSection];
}

for (let i = 0; i < 10; i += 1) {
    partnerSectionSecondDivision = [...partnerSectionSecondDivision, ...templatePartnerSecondDiv];
}

export { partnerSection, partnerSectionSecondDivision };
