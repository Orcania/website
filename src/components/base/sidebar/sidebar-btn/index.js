/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './sidebar-btn.scss';

const SidebarBtn = props => {
    const { to, onClick, icon, name } = props;
    return (
        <a
            role="button"
            className="button has-text-left is-expanded is-fullwidth sidebar-btn my-3 is-medium"
            to={to || '/temp'}
            onClick={onClick}
        >
            <span className="icon is-size-5 has-text-centered">{icon}</span>
            {name != null ? <span>&nbsp;{name}</span> : null}
        </a>
    );
};

export default SidebarBtn;
