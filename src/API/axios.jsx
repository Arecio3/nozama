import axios from 'axios';

const instance = axios.create({
    // API (cloud function) URL
    baseURL: 'http://localhost:5001/nozama-53fd6/us-central1/api' 
});

export default instance