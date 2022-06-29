const servicesData = [
    {
        id: 1,
        title: 'Smart Contracts Development',
        subtitle: 'We can help you build a smart contract that will be secure and easy to use.',
        icon: 'fa-solid fa-file-contract',
    },
    {
        id: 2,
        title: 'Blockchain Development',
        subtitle: 'We can help you build a blockchain that will be secure and easy to use.',
        icon: 'fa-brands fa-hive',
    },
    {
        id: 3,
        title: 'Server Development',
        subtitle: 'We can help you build a server that will be secure and easy to use.',
        icon: 'fa-solid fa-server',
    },
    {
        id: 4,
        title: 'DAPP Development',
        subtitle: 'We can help you build a DAPP that will be secure and easy to use.',
        icon: 'fa-solid fa-dice',
    },
    {
        id: 5,
        title: 'Bots Development',
        subtitle: 'We can help you build a bot that will be secure and easy to use.',
        icon: 'fa-solid fa-robot',
    },
];

const sliderFirstColumn = [
    {
        id: 1,
        link: 'https://ethereum.org/',
        logo: 'media/supported-chains/ethereum-eth-logo.svg',
        alt: 'Ethereum',
    },
    {
        id: 2,
        link: 'https://www.binance.com/',
        logo: 'media/partners/binance.svg',
        alt: 'Binance',
    },
    {
        id: 3,
        link: 'https://www.avax.network/',
        logo: 'media/partners/avalanche.svg',
        alt: 'Avalanche',
    },
    {
        id: 4,
        link: 'https://www.polygon.technology/',
        logo: 'media/partners/polygon.svg',
        alt: 'Polygon',
    },
    {
        id: 5,
        link: 'https://www.optimism.io/',
        logo: 'media/partners/optimism.svg',
        alt: 'Optimism',
    },
];

const sliderSecondColumn = [
    {
        id: 1,
        link: 'https://www.vechain.org/',
        logo: 'media/partners/vechain.svg',
        alt: 'VeChain',
    },
    {
        id: 2,
        link: 'https://klaytn.foundation/',
        logo: '',
        alt: 'Klaytn',
    },
    {
        id: 3,
        link: 'https://fantom.foundation/',
        logo: 'media/partners/fantom.svg',
        alt: 'Fantom',
    },
    {
        id: 4,
        link: 'https://celo.org/',
        logo: 'media/partners/celo.svg',
        alt: 'Celo',
    },
    {
        id: 5,
        link: 'https://xinfin.org/',
        logo: 'media/partners/xinfin.svg',
        alt: 'Xinfin',
    },
];

const sliderThirdColumn = [
    {
        id: 1,
        link: 'https://www.harmony.one/',
        logo: 'media/partners/harmony.svg',
        alt: 'Harmony',
    },
    {
        id: 2,
        link: 'https://gnosis.io/',
        logo: 'media/partners/gnosis.svg',
        alt: 'Gnosis',
    },
    {
        id: 3,
        link: 'https://moonbeam.network/',
        logo: 'media/partners/moonbeam.svg',
        alt: 'Moonbeam',
    },
    {
        id: 4,
        link: 'https://moonbeam.network/networks/moonriver/',
        logo: 'media/partners/moonriver.svg',
        alt: 'MoonRiver',
    },
    {
        id: 5,
        link: 'https://velas.com/',
        logo: 'media/partners/velas.svg',
        alt: 'Velas',
    },
    {
        id: 6,
        link: 'https://boba.network/',
        logo: 'media/partners/boba.svg',
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
