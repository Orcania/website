/* eslint-disable @next/next/no-img-element */

const TeamCard = props => {
    const { name, charge, imgsrc, chargeIcon, socialmedia } = props;

    return (
        <div className="card" style={{ borderRadius: '0.25rem !important', overflow: 'hidden' }}>
            <div className="card-imagee has-background-primary2dark-v" style={{ position: 'relative' }}>
                <figure className="image is-square " style={{ transform: 'scale(0.7)' }}>
                    <img
                        className="is-rounded has-border-5-primary-o-10"
                        src={imgsrc || 'media/pages/home/memberAny.png'}
                        alt=""
                    />
                </figure>
                <div className="charge-div ">
                    <span className="icon has-text-white is-size-5">{chargeIcon}</span>
                    <div className="charge-text p-1">
                        <h2 className="subtitle has-text-centered has-text-dark is-5">{charge}</h2>
                    </div>
                </div>
            </div>
            <div className="card-content has-background-dark">
                <div className="content">
                    <h1 className="title has-text-white has-text-centered is-4">{name}</h1>
                    <div className="has-text-centered is-size-5">{socialmedia}</div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;
