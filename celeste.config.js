const ocamint = require('./src/static/abis/ocamint.json');
const erc721 = require('./src/static/abis/erc721.json');

module.exports = {
    rpcs: {
        ETH: {
            chainId: 1,
            url: 'https://speedy-nodes-nyc.moralis.io/3379a8269aa940b8ced12344/eth/mainnet',
        },
        BSC: {
            chainId: 56,
            url: 'https://bsc-dataseed.binance.org/',
        },
        POL: {
            chainId: 137,
            url: 'https://polygon-rpc.com/',
        },
        HNY: {
            chainId: 1666600000,
            url: 'https://api.harmony.one',
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
            1: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            56: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            137: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
            1666600000: '0x4c4BAB8b80785272d0089D76E85828f9a70FdbC2',
        },
        OCA: {
            1: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            56: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            137: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
            1666600000: '0x8AeB42F7b4204C956c51907C89639E3446a787Ea',
        },
        TRAF: {
            1: '0x81f296145C5555d7b4B426D97E4e2260c017F5d0',
        },
    },
};
