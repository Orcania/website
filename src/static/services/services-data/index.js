const servicesData = [
    {
        id: 1,
        title: 'NFT Development',
        subtitle:
            'Full stack development of your NFT project with the latest most advanced technology in the crypto space.',
        icon: 'fa-solid fa-hexagon-vertical-nft',
    },
    {
        id: 2,
        title: 'DeFi Development',
        subtitle:
            'Full stack development of your DeFi project with the latest most advanced technology in the crypto space.',
        icon: 'fa-solid fa-coins',
    },
    {
        id: 3,
        title: 'Server Development',
        subtitle: 'Development: Development of full purpose servers to serve any task on the blockchain and out of it.',
        icon: 'fa-solid fa-server',
    },
    {
        id: 4,
        title: 'Bots Development',
        subtitle:
            'Development of various purpose bots that operate on the blockchain and off of it (arbitrage, NFT sniping, auto distribution, etc...).',
        icon: 'fa-solid fa-robot',
    },
    {
        id: 5,
        title: 'Project Management',
        subtitle: 'Full development management, hosting and maintenance care for your projects.',
        icon: 'fa-solid fa-list-check',
    },
];

const sliderFirstColumn = [
    {
        id: 1,
        link: 'https://ethereum.org/',
        logo: '/media/supported-chains/ethereum-eth-logo.png',
        alt: 'Ethereum',
    },
    {
        id: 2,
        link: 'https://www.binance.com/',
        logo: '/media/supported-chains/binance.png',
        alt: 'Binance',
    },
    {
        id: 3,
        link: 'https://www.avax.network/',
        logo: '/media/supported-chains/avalanche.png',
        alt: 'Avalanche',
    },
    {
        id: 4,
        link: 'https://www.polygon.technology/',
        logo: '/media/partners/polygon.svg',
        alt: 'Polygon',
    },
    {
        id: 5,
        link: 'https://www.optimism.io/',
        logo: '/media/supported-chains/optimism.png',
        alt: 'Optimism',
    },
];

const sliderSecondColumn = [
    {
        id: 1,
        link: 'https://www.vechain.org/',
        logo: '/media/supported-chains/vechain.png',
        alt: 'VeChain',
    },
    {
        id: 2,
        link: 'https://klaytn.foundation/',
        logo: '/media/supported-chains/klaytn.png',
        alt: 'Klaytn',
    },
    {
        id: 3,
        link: 'https://fantom.foundation/',
        logo: '/media/supported-chains/fantom.png',
        alt: 'Fantom',
    },
    {
        id: 4,
        link: 'https://celo.org/',
        logo: '/media/supported-chains/celo.png',
        alt: 'Celo',
    },
    {
        id: 5,
        link: 'https://xinfin.org/',
        logo: '/media/supported-chains/xinfin.png',
        alt: 'Xinfin',
    },
];

const sliderThirdColumn = [
    {
        id: 1,
        link: 'https://www.harmony.one/',
        logo: '/media/partners/harmony.svg',
        alt: 'Harmony',
    },
    {
        id: 2,
        link: 'https://gnosis.io/',
        logo: '/media/supported-chains/gnosis.png',
        alt: 'Gnosis',
    },
    {
        id: 3,
        link: 'https://moonbeam.network/',
        logo: '/media/supported-chains/moonbeam.png',
        alt: 'Moonbeam',
    },
    {
        id: 4,
        link: 'https://moonbeam.network/networks/moonriver/',
        logo: '/media/supported-chains/moonriver.png',
        alt: 'MoonRiver',
    },
    {
        id: 5,
        link: 'https://velas.com/',
        logo: '/media/supported-chains/velas.png',
        alt: 'Velas',
    },
    {
        id: 6,
        link: 'https://boba.network/',
        logo: '/media/partners/boba.svg',
        alt: 'Boba',
    },
];

let copyOfFirstColumn = [];
let copyOfSecondColumn = [];
let copyOfThirdColumn = [];

for (let i = 0; i < 10; i += 1) {
    copyOfFirstColumn = [...copyOfFirstColumn, ...sliderFirstColumn];
}

for (let i = 0; i < 10; i += 1) {
    copyOfSecondColumn = [...copyOfSecondColumn, ...sliderSecondColumn];
}

for (let i = 0; i < 10; i += 1) {
    copyOfThirdColumn = [...copyOfThirdColumn, ...sliderThirdColumn];
}

export { servicesData, sliderFirstColumn, sliderSecondColumn, sliderThirdColumn };
