import Image from 'next/image';

const Table = () => {
    return (
        <div className="container" style={{ display: 'grid', placeItems: 'center' }}>
            <div className="box has-background-box is-shadowless">
                <table className="table is-bordered has-background-transparent has-text-white is-size-5">
                    <thead>
                        <tr>
                            <th style={{ borderTop: '0px', borderLeft: '0px' }} />
                            <th style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                                <div className="is-flex is-align-items-center">
                                    <div className="columns is-flex">
                                        <div className="column is-narrow">
                                            <span className="is-flex is-align-items-center has-text-white">
                                                <figure className="image is-32x32">
                                                    <Image layout="fill" src="/media/logos/uniswap-logo.png" />
                                                </figure>
                                                <h1 className="title is-4 has-text-white">Uniswap </h1>
                                            </span>
                                        </div>
                                        <div className="column is-narrow">
                                            <span className="is-flex is-align-items-center has-text-white">
                                                <figure className="image is-32x32">
                                                    <Image layout="fill" src="/media/logos/pancakeswap-logo.png" />
                                                </figure>
                                                <h1 className="title is-4 has-text-white">PancakeSwap</h1>
                                            </span>
                                        </div>
                                        <div className="column is-narrow">
                                            <span className="is-flex is-align-items-center has-text-white">
                                                <figure className="image is-32x32">
                                                    <Image layout="fill" src="/media/logos/honeyswap-logo.png" />
                                                </figure>
                                                <h1 className="title is-4 has-text-white">HoneySwap</h1>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <th>
                                <span className="is-flex is-align-items-center">
                                    <figure className="image is-64x64">
                                        <Image layout="fill" src="/media/logos/oca-light.png" />
                                    </figure>
                                    <h1 className="title is-3 has-text-contrast"> Orcania DEX </h1>
                                </span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fas fa-coins" />
                                </span>
                                <span> DEX Fees</span>
                            </th>
                            <td className="ct-td-content">0.3 % - 1.5 %</td>
                            <td className="has-text-contrast has-background-semi">0.1% - 0.2%</td>
                        </tr>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fas fa-gas-pump" />
                                </span>
                                <span> GAS Usage</span>
                            </th>
                            <td className="ct-td-content">300K - 1.5Mn</td>
                            <td className="has-text-contrast has-background-semi">49K - 98K</td>
                        </tr>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fa-solid fa-droplet" />
                                </span>
                                <span> Liquidity</span>
                            </th>
                            <td className="ct-td-content">User sustaining</td>
                            <td className="has-text-contrast has-background-semi">User sustaining & Self sustaining</td>
                        </tr>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fa-solid fa-hand-holding-droplet" />
                                </span>
                                <span> Liquidity Need</span>
                            </th>
                            <td className="ct-td-content">
                                High liquidity need for each pair to prevent multiple pair hops which result in higher
                                swap fees and gas fees
                            </td>
                            <td className="has-text-contrast has-background-semi">
                                Low need for liquidity, focused on one pair, with no need for multiple pair hops to
                                finish the swap
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fas fa-exchange-alt" />
                                </span>
                                <span> Trading</span>
                            </th>
                            <td className="ct-td-content">Bounded to provided pairs</td>
                            <td className="has-text-contrast has-background-semi">
                                Unbounded to all cryptos on the DEX
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right has-text-white">
                                <span className="icon is-small">
                                    <i className="fas fa-tools" />
                                </span>
                                <span> Trading Tools</span>
                            </th>
                            <td className="ct-td-content">None</td>
                            <td className="has-text-contrast has-background-semi">Advanced management tools</td>
                        </tr>
                        {/* <tr>
                            <th className="has-text-right">Arbitrage</th>
                            <td>Bounded to provided pairs</td>
                            <td className="has-text-contrast has-background-semi">
                                {' '}
                                Unbounded to all cryptos on the DEX{' '}
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Refferal System</th>
                            <td>None</td>
                            <td className="has-text-contrast has-background-semi">
                                {' '}
                                A 5% gain and cashback referral system
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
