import styles from './styles.module.scss';

const TiltedSquareBox = ({ title, subtitle, icon }) => {
    const { tilted_box, box_content } = styles;

    return (
        <div className={`box ${tilted_box}`}>
            <div className={`${box_content} has-text-centered is-size-7-mobile`}>
                <i className={`${icon} has-text-black is-size-4`} />
                <h1 className="title has-text-black is-size-4 pt-4">{title}</h1>
                <p className="subtitle has-text-black is-size-6 pt-4">{subtitle}</p>
            </div>
        </div>
    );
};

export default TiltedSquareBox;
