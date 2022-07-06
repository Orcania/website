/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const tokenomicsData = [
    {
        title: 'Initial Coin Offering',
        body: () => (
            <p>
                85% of OCA is allocated to Initial Coin Offering for the community and investors.
                <br />
                Users on Ethereum, BSC, Polygon, and Harmony are capable of buying OCA for the price of 0.1$ at{' '}
                <Link href="/ico">
                    <a className="is-underlined has-text-primary">ICO</a>
                </Link>
                .
                <br />
                Funds raised from ICO will be allocated to provide liquidity on the Orcania DEX upon its launch.
            </p>
        ),
        percentage: 85,
    },
    {
        title: 'Protocol Development Allocation',
        body: () => (
            <p>
                This allocation will be used to fund the growth and development of the Orcania projects.
                <br />
                It will be used to cover salaries of Orcania team members working on Orcania projects, and cover
                external expenses of certain projects&apos; needs such as servers.
                <br />
                Furthermore the Orcania team will utilize this allocation along side funds of its own to supply&apos;s
                release, and hold events and competitions to encourage ecosystem growth and engagement.
            </p>
        ),
        percentage: 15,
    },
];

export default tokenomicsData;
