const ContactUsBox = () => {
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
        <>
            <div className="columns">
                <div className="column" data-aos="fade-right">
                    <div className="field">
                        <label className="label has-text-white">Your name</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="text"
                                placeholder="John Doe"
                                onChange={e => validateName(e)}
                            />
                            <span id="validate-name" className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column" data-aos="fade-left">
                    <div className="field">
                        <label className="label has-text-white">Your email</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                onChange={e => validateEmail(e)}
                            />
                            <span id="validate-email" className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column" data-aos="fade-right">
                    <div className="field">
                        <label className="label has-text-white">Project type</label>
                        <div className="control has-icons-left">
                            <div className="select is-white is-fullwidth">
                                <select className="has-background-light-purple-o-5 has-text-white is-borderless">
                                    <option>NFT Project</option>
                                    <option>DeFi Project</option>
                                    <option>GameFi Project</option>
                                    <option>Services Project</option>
                                    <option>Entertainment Project</option>
                                    <option>Basic Website</option>
                                    <option>App Design</option>
                                    <option>Others</option>
                                </select>
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-rectangle-history-circle-user" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column" data-aos="fade-left">
                    <div className="field">
                        <label className="label has-text-white">URL</label>
                        <div className="control has-icons-left">
                            <input
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="text"
                                placeholder="drive.google.com/aH2z568qaw47"
                                onChange={e => validateURL(e)}
                            />
                            <span id="validate-url" className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-link"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column" data-aos="fade">
                    <div className="field">
                        <label className="label has-text-white">About</label>
                        <div className="control">
                            <textarea
                                className="textarea has-background-light-purple-o-5 has-text-white is-borderless"
                                placeholder="Tell us about your project"
                                rows="5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-narrow" data-aos="fade-up">
                    <button
                        className="button has-border-radius-10 is-fullwidth px-6 has-background-light-purple-o-2 has-text-white has-border-1-light-purple-o-10"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContactUsBox;
