import axios from "axios";

const instance = axios.create({
    baseURL: "https://md-muzahid-server.vercel.app/"
});

export default instance;