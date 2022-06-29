import axios from 'axios';
const { ENDPOINT } = process.env;

const api = {
    get: {
        items: () => [{ id: 1 }, { id: 2 }, { id: 3 }],
        getAllContacts: () => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/contacts`,
            });
        },
    },
    post: {
        postMail: ({ name, email, projectType, about, url }) => {
            return axios({
                method: 'post',
                url: `${ENDPOINT}/contacts/apply`,
                data: {
                    contact: {
                        name: name,
                        email: email,
                        projectType: projectType,
                        about: about,
                        url: url,
                    },
                },
            });
        },
    },
    put: {},
    delete: {},
};

export default api;
