import axios from 'axios';

const instance = axios.create({
    // API (cloud function) URL
    baseURL: 'https://us-central1-nozama-53fd6.cloudfunctions.net/api' 
});

export default instance
// Debug
// http://localhost:5001/nozama-53fd6/us-central1/api

// Project Console
// https://console.firebase.google.com/project/nozama-53fd6/overview