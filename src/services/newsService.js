import axios from "axios";

const API = "http://localhost:3000/api";

const getNewNews = async (page) => {
    try {
        console.log(API + "/news/new?page=" + page);

        const response = await axios.get(API + "/news/new?page=" + page);
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return { err: err };
    }
};

const getHotNews = async () => {
    try {
        const response = await axios.get(API + "/news/hot");
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return { err: err };
    }
};

export { getNewNews, getHotNews };
