import axios from "axios";

const instance = axios.create({
    // baseURL: "https://md-muzahid-server.vercel.app/"
    baseURL: "http://localhost:5000/"
});

export default instance;