import styles from './styles.module.scss';

const { tilted_box, box_content, text } = styles;
const TiltedSquareBox = ({ title, subtitle, icon }) => {
    return (
        <div className={` ${tilted_box}`}>
            <div className={`${box_content} has-text-centered is-size-7-mobile`}>
                <i className={`${icon} has-text-white is-size-4`} />
                <h1 className="title has-text-white is-size-4 pt-4">{title}</h1>
                <p className={`subtitle has-text-white is-size-6 pt-4 ${text}`} style={{ width: '120%' }}>
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default TiltedSquareBox;
