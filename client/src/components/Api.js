
import axios from 'axios';
import { baseURL } from '../Constants';

const postRequest = (payload, setter) => {

    axios.post(baseURL + '/data/submitForm', payload)
        .then(res => setter(res.data))
        .catch(function (error) { console.log(error) });
}

const getRequest = (setter) => {

    axios.get(baseURL + '/data/getAllData')
        .then(res => {
            setter(res.data)
        })
        .catch(error => console.log(error));
}

export { postRequest, getRequest };