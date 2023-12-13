import axios from "axios";

const instance = axios.create({
    baseURL: "https://myportfolio-pwa-server-version2.vercel.app/"
});

export default instance;