const ocamint = require('./src/static/abis/ocamint.json');
const oca = require('./src/static/abis/oca.json');
// const oca_referral_mint = require('./src/static/abis/oca_mint_referral.json');
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
        BOBA: {
            chainId: 288,
            url: 'https://mainnet.boba.network/',
        },
    },
    smartContracts: [
        { key: 'OCAMINT', abi: ocamint },
        { key: 'TRAF', abi: erc721 },
        { key: 'OCA', abi: oca },

        // { key: 'OCA_REFERRAL_MINT', abi: oca_referral_mint },
        // { key: 'DEX_FETCH', abi: dex_fetch, address: '' },
        // { key: 'ERC20', abi: erc20, address: '' },
        // { key: 'ERC20EXTENDED', abi: erc20extended, address: '' },
        // { key: 'WONE', abi: WONE, address: '' },
    ],
    addressBook: {
        OCAMINT: {
            1: '0xb90A6769414cB32234915e25a38b842287067532',
            56: '0xb90A6769414cB32234915e25a38b842287067532',
            288: '0xb90A6769414cB32234915e25a38b842287067532',
        },
        OCA: {
            1: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
            56: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
            288: '0x3f8C3b9F543910F611585E3821B00af0617580A7',
        },

        // OCA_REFERRAL_MINT: {
        //     1: '0x4E61b3C4aCD2C0Aac19cdf28c8D0e4036a2e5338',
        //     56: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        //     288: '0xB965a6429dfeE72CD0d5EBd00a7D0820bFCca94C',
        // },

        TRAF: {
            1: '0x81f296145C5555d7b4B426D97E4e2260c017F5d0',
        },
    },
};
