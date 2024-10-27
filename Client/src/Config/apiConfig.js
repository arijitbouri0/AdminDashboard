import axios from "axios";


export const API_BASE_URL= 'https://admin-dashboard-jade-pi-27.vercel.app/'

const jwt=localStorage.getItem("jwt");

export const api= axios.create({
    baseURL:API_BASE_URL,
    headers:{
        Authorization:`Bearer ${jwt}`
    }
})
