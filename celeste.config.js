const ocamint = require('./src/static/abis/ocamint.json');
const oca = require('./src/static/abis/oca.json');
// const oca_referral_mint = require('./src/static/abis/oca_mint_referral.json');
const erc721 = require('./src/static/abis/erc721.json');

module.exports = {
    isMultichain: false,
    rpcs: {
        // ETH: {
        //     chainId: 1,
        //     url: 'https://mainnet.infura.io/v3/fa471aa86d124cde87836175143616f6',
        // },
        // BSC: {
        //     chainId: 56,
        //     url: 'https://bsc-dataseed.binance.org/',
        // },
        BOBAT: {
            chainId: '28',
            url: 'https://rinkeby.boba.network/',
        },
        // BSC: {
        //     chainId: '97',
        //     url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        // },
    },
    smartContracts: [
        {
            key: 'OCA',
            abi: oca,
            address: '0x0B047EDd7DB1D2764116bA3396d537b5a5c9973C',
        },
        {
            key: 'OCAMINT',
            abi: ocamint,
            address: '0xdA623E9bC9bD69089d1e94a1d980846465f2A2BD',
        },
        { key: 'TRAF', abi: erc721 },

        // { key: 'OCA_REFERRAL_MINT', abi: oca_referral_mint },
        // { key: 'DEX_FETCH', abi: dex_fetch, address: '' },
        // { key: 'ERC20', abi: erc20, address: '' },
        // { key: 'ERC20EXTENDED', abi: erc20extended, address: '' },
        // { key: 'WONE', abi: WONE, address: '' },
    ],
    addressBook: {
        ZERO: '0x0000000000000000000000000000000000000000',

        OCA_28: '0x0B047EDd7DB1D2764116bA3396d537b5a5c9973C',

        OCAMINT_28: '0xdA623E9bC9bD69089d1e94a1d980846465f2A2BD',

        NFT_28: '0x236a2F17ee9286549db91832aAb167c3c4113ca5',
        // OCA_REFERRAL_MINT: {
        //     1: '0x4E61b3C4aCD2C0Aac19cdf28c8D0e4036a2e5338',
        //     56: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        //     288: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        // },
    },
};
