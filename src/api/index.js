import axios from 'axios';

const { ENDPOINT, MINT_ENDPOINT } = process.env;

const api = {
    get: {
        items: () => [{ id: 1 }, { id: 2 }, { id: 3 }],
        getAllContacts: () => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/contacts`,
            });
        },
        partnerHolder: ({ user, chainSymbol }) => {
            return axios({
                method: 'get',
                url: `${MINT_ENDPOINT}/partnerHolder/?user=${user}&blockchain=${chainSymbol}`,
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
                        name,
                        email,
                        projectType,
                        about,
                        url,
                    },
                },
            });
        },
    },
    put: {},
    delete: {},
};

export default api;
