const ocamint = require('./src/static/abis/ocamint.json');
const oca = require('./src/static/abis/oca.json');
// const oca_referral_mint = require('./src/static/abis/oca_mint_referral.json');
// const erc721 = require('./src/static/abis/erc721.json');

module.exports = {
    isMultichain: true,
    rpcs: {
        ETH: {
            chainId: '1',
            url: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        },
        // BSC: {
        //     chainId: '56',
        //     url: 'https://bsc-dataseed.binance.org/',
        // },
        // BOBA: {
        //     chainId: '288',
        //     url: 'https://mainnet.boba.network/',
        // },
        // BOBAT: {
        //     chainId: '28',
        //     url: 'https://rinkeby.boba.network/',
        // },
        // BSC: {
        //     chainId: '97',
        //     url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        // },
    },
    smartContracts: [
        {
            key: 'OCA',
            abi: oca,
            address: {
                1: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
                56: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
                288: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
            },
        },
        {
            key: 'OCAMINT',
            abi: ocamint,
            address: {
                1: '0x4eE5C1C4eE1e221043266F52C604Dc1bF466851A',
                56: '0x46621939a05Db52F651e9cD1449178b984AC04Db',
                288: '0xc45BDE84B9Ac11BaE0F569E451EE7cD2501aC683',
            },
        },
        // { key: 'TRAF', abi: erc721 },
        // { key: 'OCA_REFERRAL_MINT', abi: oca_referral_mint },
        // { key: 'DEX_FETCH', abi: dex_fetch, address: '' },
        // { key: 'ERC20', abi: erc20, address: '' },
        // { key: 'ERC20EXTENDED', abi: erc20extended, address: '' },
        // { key: 'WONE', abi: WONE, address: '' },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',
        OCA_1: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
        OCA_56: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
        OCA_288: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
        OCAMINT_1: '0x4eE5C1C4eE1e221043266F52C604Dc1bF466851A',
        OCAMINT_56: '0x46621939a05Db52F651e9cD1449178b984AC04Db',
        OCAMINT_288: '0xc45BDE84B9Ac11BaE0F569E451EE7cD2501aC683',
        // OCA_REFERRAL_MINT: {
        //     1: '0x4E61b3C4aCD2C0Aac19cdf28c8D0e4036a2e5338',
        //     56: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        //     288: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        // },
    },
};
