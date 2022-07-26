const ocamint = require('./src/static/abis/ocamint.json');
const oca_referral_mint = require('./src/static/abis/oca_mint_referral.json');
const erc721 = require('./src/static/abis/erc721.json');

module.exports = {
    rpcs: {
        ETH: {
            chainId: 1,
            url: 'https://mainnet.infura.io/v3/fa471aa86d124cde87836175143616f6',
        },
        BSC: {
            chainId: 56,
            url: 'https://bsc-dataseed.binance.org/',
        },
    },
    smartContracts: [
        { key: 'OCAMINT', abi: ocamint },
        { key: 'TRAF', abi: erc721 },
        { key: 'OCA_REFERRAL_MINT', abi: oca_referral_mint },

        // { key: 'DEX_FETCH', abi: dex_fetch, address: '' },
        // { key: 'ERC20', abi: erc20, address: '' },
        // { key: 'ERC20EXTENDED', abi: erc20extended, address: '' },
        // { key: 'WONE', abi: WONE, address: '' },
    ],
    addressBook: {
        OCAMINT: {
            1: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            56: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            // 137: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            // 1666600000: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
        },
        OCA: {
            1: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            56: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            // 137: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            // 1666600000: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
        },
        OCA_REFERRAL_MINT: {
            1: '0x4E61b3C4aCD2C0Aac19cdf28c8D0e4036a2e5338',
            56: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
            // 137: '0x6200D0C05B287785c7193a31dDcfDB15c8e4BDd9',
            // 1666600000: '0x2455Fca2834ee8dbeb7186A10A79305ED8395733',
        },
        TRAF: {
            1: '0x81f296145C5555d7b4B426D97E4e2260c017F5d0',
        },
    },
};
