const ocamint = require('./src/static/abis/ocamint.json');
const erc721 = require('./src/static/abis/erc721.json');

module.exports = {
    rpcs: {
        HNY: {
            chainId: 1666700000,
            url: 'https://api.s0.b.hmny.io',
        },
        BSC: {
            chainId: 97,
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        },
    },
    smartContracts: [
        { key: 'OCAMINT', abi: ocamint },
        { key: 'TRAF', abi: erc721 },

        // { key: 'DEX_FETCH', abi: dex_fetch, address: '' },
        // { key: 'ERC20', abi: erc20, address: '' },
        // { key: 'ERC20EXTENDED', abi: erc20extended, address: '' },
        // { key: 'WONE', abi: WONE, address: '' },
    ],
    addressBook: {
        OCAMINT: {
            1666700000: '0xb3a36988BD53206194b3a44F838BeFA51b03369c',
            97: '0x29A00aA0e282059e744DaD12cAA5290cb0D7755d',
        },
        TRAF: {
            1666700000: '0x3374fa0dACB5158CD7d89e56a3f56413c1f4e662',
            97: '0x05dCd27BA7345085237e15719A1B4B1DD312F580',
        },
    },
};
