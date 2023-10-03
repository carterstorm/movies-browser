import axios from "axios";

export const getApiData = async (link) => {
    try {
        const response = await axios.get(link);
        return response.data;
    } catch (error) {
        console.error(error);
    };
};