/* eslint-disable prefer-destructuring */
import axios from 'axios';

const ENDPOINT = process.env.ENDPOINT;
const MINT_ENDPOINT = process.env.MINT_ENDPOINT;

const api = {
    get: {
        items: () => [{ id: 1 }, { id: 2 }, { id: 3 }],
        getAllContacts: () => {
            return axios({
                method: 'get',
                url: `${ENDPOINT}/contacts`,
            });
        },
        partnerHolder: ({ user, chainId }) => {
            return axios({
                method: 'get',
                url: `${MINT_ENDPOINT}/partnerHolder/?user=${user}&blockchain=${chainId}`,
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
