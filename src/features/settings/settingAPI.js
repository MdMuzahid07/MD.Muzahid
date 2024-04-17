// import axios from "../../utils/axios.config";

import toast from "react-hot-toast";
import axios from "../../utils/axios.config";
import { toastStyle } from "../../styles";


// heading title api start here =============================================>

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
            toast.success("Title saved", { id: "homepageheadingtitle saved", style: toastStyle });
        }
    } catch (error) {
        console.log(error, "error message from fetchHomepageHeadingTitle update by id API");
    }
};

// heading title api start here =============================================///>


// social platform adding api start here ===================================>

const fetchAllPlatforms = async () => {
    try {
        const data = await axios.get("/api/v1/social-platforms");
        return data.data.data;
    } catch (error) {
        console.log(error, "fetchAllPlatforms");
    }
};

const addAPlatform = async (data) => {
    try {
        await axios.post("/api/v1/social-platforms", data);
    } catch (error) {
        console.log(error, "addAPlatforms");
    }
};

const updateAPlatform = async (id, data) => {
    try {
        const res = await axios.patch(`/api/v1/social-platforms/${id}`, data);
        if (res?.data?.success) {
            toast.success("Title saved", { id: "Platform Updated", style: toastStyle });
        }
    } catch (error) {
        console.log(error, "updateAPlatform");
    }
};

const deleteAPlatform = async (id) => {
    try {
        const res = await axios.delete(`/api/v1/social-platforms/${id}`);
        if (res?.data?.success) {
            toast.success("Deleted", { id: "Delete", style: toastStyle });
        }
    } catch (error) {
        console.log(error, "deleteAPlatform");
    }
}
// social platform adding api end here ===================================///>



export { fetchHomepageHeadingTitle, addHomepageHeadingTitle, updateHomepageHeadingTitle, fetchAllPlatforms, addAPlatform, updateAPlatform, deleteAPlatform };


