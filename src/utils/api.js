import axios from 'axios';

export const fetchMfList = () => {
    return axios.get('https://api.mfapi.in/mf')
        .then(res => res)
        .catch(err => console.error(err))
};


export const fetchMfDetails = (schemeCode) => {
    return axios.get(`https://api.mfapi.in/mf/${schemeCode}`)
        .then(res => res)
        .catch(err => console.error(err))
};