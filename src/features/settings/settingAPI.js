// import axios from "../../utils/axios.config";

import toast from "react-hot-toast";
import axios from "../../utils/axios.config";

const fetchHomepageHeadingTitle = async () => {
    try {
        const data = await axios.get("/api/v1/homepage-heading-title");
        return data.data.data;
    } catch (error) {
        console.log(error, "error message from fetchHomepageHeadingTitle API");
    }
};

const addHomepageHeadingTitle = async (data) => {
    try {
        await axios.post("/api/v1/homepage-heading-title", data);
    } catch (error) {
        console.log(error, "error message from fetchHomepageHeadingTitle API");
    }
};

const updateHomepageHeadingTitle = async (id, data) => {
    try {
        const res = await axios.patch(`/api/v1/homepage-heading-title/${id}`, data);
        if (res?.data?.success) {
            toast.success("Title saved", { id: "homepageheadingtitle saved" });
        }
    } catch (error) {
        console.log(error, "error message from fetchHomepageHeadingTitle update by id API");
    }
};


export { fetchHomepageHeadingTitle, addHomepageHeadingTitle, updateHomepageHeadingTitle };


