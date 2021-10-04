import axios from 'axios';

export const fetchMfList = () => {
    return axios.get('https://api.mfapi.in/mf')
        .then(res => res.data)
        .catch(err => console.error(err))
};


export const fetchMfDetails = (schemeCode) => {
    return axios.get(`https://api.mfapi.in/mf/${schemeCode}`)
        .then(res => res.data)
        .catch(err => console.error(err))
};