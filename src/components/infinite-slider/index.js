const InfiniteSlider = props => {
    const { firstColumn, secondColumn, children, title, backgroundColor } = props;
    return (
        <section className={`has-background-${backgroundColor}`}>
            <div className="head pt-6">
                <h1 className="title has-lina-text contrast is-3 has-text-contrast has-text-centered mb-6">{title}</h1>
            </div>
            <div className="hero-body pb-6 px-0" style={{ overflow: 'hidden' }}>
                <div id="infinite" className="highway-slider">
                    <div className="highway-barrier">
                        <ul className="highway-lane">
                            {firstColumn.map((item, index) => (
                                <li className="highway-car ml" key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="box has-background-dark is-shadowless"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={item.logo} alt={item.alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div id="infinite" className="highway-slider">
                    <div className="highway-barrier">
                        <ul className="highway-lane phase2">
                            {secondColumn.map((item, index) => (
                                <li className="highway-car ml" key={index}>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        className="box has-background-dark is-shadowless"
                                        rel="noopener noreferrer"
                                    >
                                        <img src={item.logo} alt={item.alt} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
        </section>
    );
};
export default InfiniteSlider;
