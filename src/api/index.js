import axios from 'axios';
const { ENDPOINT } = process.env;

const api = {
    get: {
        items: () => [{ id: 1 }, { id: 2 }, { id: 3 }],
    },
    post: {
        postMail: ({ email }) => {
            return axios({
                method: 'post',
                url: `${ENDPOINT}/api/mail?email=${email}`,
            });
        },
    },
    put: {},
    delete: {},
};

export default api;
