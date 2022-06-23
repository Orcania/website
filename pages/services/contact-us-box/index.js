import styles from './styles.module.scss';

const ContactUsBox = () => {
    const { contact_box } = styles;

    const validateName = e => {
        const name = e.target.value;
        const checkMark = document.getElementById('validate-name');
        const regex = /^[a-zA-Z ]+$/;

        if (name.match(regex)) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    const validateURL = e => {
        const url = e.target.value;
        const checkMark = document.getElementById('validate-url');

        // check if url is valid
        if (url.match(/^(http|https):\/\/[^ "]+$/)) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    const validateEmail = e => {
        const email = e.target.value;
        const checkMark = document.getElementById('validate-email');
        if (email.includes('@') && email.includes('.')) {
            checkMark.classList.add('has-text-contrast');
        } else {
            checkMark.classList.remove('has-text-contrast');
        }
    };

    return (
        <div className={`box ${contact_box} has-text-white`}>
            <div className="field py-2">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Your name" onChange={e => validateName(e)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    <span id="validate-name" className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field py-2">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="email" placeholder="Your email" onChange={e => validateEmail(e)} />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span id="validate-email" className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field py-2">
                <div className="control">
                    <textarea className="textarea has-fixed-size" placeholder="Tell us about your project" />
                </div>
            </div>
            {/* <div className="file has-name">
                <label className="file-label">
                    <input className="file-input" type="file" name="resume" onChange={e => getFileName(e)} />
                    <span className="file-cta">
                        <span className="file-icon">
                            <i className="fas fa-paperclip" />
                        </span>
                        <span className="file-label">Add attachment</span>
                    </span>
                    <span className="file-name">Your file</span>
                </label>
            </div> */}
            <div className="field py-2">
                <p className="control has-icons-left has-icons-right">
                    <input
                        className="input"
                        type="text"
                        placeholder="Enter the URL containing your files (Google Drive, Dropbox...)"
                        onChange={e => validateURL(e)}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-globe"></i>
                    </span>
                    <span id="validate-url" className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div className="field is-grouped pt-5">
                <div className="control">
                    <button className="button is-white">Send Request</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUsBox;
