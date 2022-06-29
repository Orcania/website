/* eslint-disable jsx-a11y/label-has-associated-control */
import api from 'src/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Store as ReactNotificationsStore } from 'react-notifications-component';
import { successNotification, errorNotification } from 'src/static/notifications';

const ContactUsBox = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            projectType: '',
            url: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Email is invalid').required('Email is required'),
            projectType: Yup.string()
                .oneOf(
                    [
                        'NFT Project',
                        'DeFi Project',
                        'GameFi Project',
                        'Services Project',
                        'Entertainment Project',
                        'Basic Website',
                        'App Design',
                        'Others',
                    ],
                    'Invalid project type'
                )
                .required('Project type is required'),
            url: Yup.string().url('URL is invalid'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: async values => {
            try {
                await api.post
                    .postMail({
                        name: values.name,
                        email: values.email,
                        projectType: values.projectType,
                        about: values.message,
                        url: values.url,
                    })
                    .then(() => {
                        formik.setFieldValue('name', '');
                        formik.setFieldValue('email', '');
                        formik.setFieldValue('projectType', '');
                        formik.setFieldValue('url', '');
                        formik.setFieldValue('message', '');
                        ReactNotificationsStore.addNotification(
                            successNotification('Received', 'Thank you for your message! We will reply when possible.')
                        );
                    });
            } catch (error) {
                ReactNotificationsStore.addNotification(
                    errorNotification('Error', 'Something went wrong. Please try again later.')
                );
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="columns">
                <div className="column" data-aos="fade-right">
                    <div className="field">
                        <label className="label has-text-white">Your name *</label>
                        <div className="control has-icons-left">
                            <input
                                id="name"
                                name="name"
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="text"
                                placeholder="John Doe"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <p className="help is-danger">{formik.errors.name}</p>
                            ) : null}
                            <span className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="column" data-aos="fade-left">
                    <div className="field">
                        <label className="label has-text-white">Your email *</label>
                        <div className="control has-icons-left">
                            <input
                                id="email"
                                name="email"
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="email"
                                placeholder="johndoe@email.com"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <p className="help is-danger">{formik.errors.email}</p>
                            ) : null}
                            <span className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column" data-aos="fade-right">
                    <div className="field">
                        <label className="label has-text-white">Project type *</label>
                        <div className="control has-icons-left">
                            <div className="select is-white is-fullwidth">
                                <select
                                    name="projectType"
                                    id="projectType"
                                    className="has-background-light-purple-o-5 has-text-white is-borderless"
                                    onChange={formik.handleChange}
                                    value={formik.values.projectType}
                                >
                                    <option value="" disabled>
                                        Select project type
                                    </option>
                                    <option value="NFT Project">NFT Project</option>
                                    <option value="DeFi Project">DeFi Project</option>
                                    <option value="GameFi Project">GameFi Project</option>
                                    <option value="Services Project">Services Project</option>
                                    <option value="Entertainment Project">Entertainment Project</option>
                                    <option value="Basic Website">Basic Website</option>
                                    <option value="App Design">App Design</option>
                                    <option value="Others">Others</option>
                                </select>
                                {formik.touched.projectType && formik.errors.projectType ? (
                                    <p className="help is-danger">{formik.errors.projectType}</p>
                                ) : null}
                                <span className="icon is-small is-left">
                                    <i className="fa-solid fa-rectangle-history-circle-user" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column" data-aos="fade-left">
                    <div className="field">
                        <label className="label has-text-white">URL (Further explanation in a document)</label>
                        <div className="control has-icons-left">
                            <input
                                id="url"
                                name="url"
                                className="input has-background-light-purple-o-5 has-text-white is-borderless"
                                type="text"
                                placeholder="https://drive.google.com/aH2z568qaw47"
                                onChange={formik.handleChange}
                                value={formik.values.url}
                            />
                            {formik.touched.url && formik.errors.url ? (
                                <p className="help is-danger">{formik.errors.url}</p>
                            ) : null}
                            <span className="icon has-text-light-purple is-small is-left">
                                <i className="fas fa-link" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column" data-aos="fade">
                    <div className="field">
                        <label className="label has-text-white">About *</label>
                        <div className="control">
                            <textarea
                                id="message"
                                name="message"
                                className="textarea has-background-light-purple-o-5 has-text-white is-borderless"
                                placeholder="Tell us about your project"
                                rows="5"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                            {formik.touched.message && formik.errors.message ? (
                                <p className="help is-danger">{formik.errors.message}</p>
                            ) : null}
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
        </form>
    );
};

export default ContactUsBox;
