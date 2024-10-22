import axios from "axios";

// export const API_BASE_URL= 'https://mernecommercebacend-1.onrender.com';

export const API_BASE_URL= 'http://localhost:8001'

const jwt=localStorage.getItem("jwt");

export const api= axios.create({
    baseURL:API_BASE_URL,
    headers:{
        Authorization:`Bearer ${jwt}`
    }
})