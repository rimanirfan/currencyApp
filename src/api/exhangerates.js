import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.exchangeratesapi.io',
    params: {
        base: 'USD'
    }
});