import axios from "axios";

const API = "http://43.202.202:3000/api";

const calcTimeGap = (time) => {
    let result = "";
    const now = new Date();
    const target = new Date(time);
    const gap = now - target;
    const gapHour = gap / 1000 / 60 / 60;
    if (gapHour < 1) {
        const gapMinute = gap / 1000 / 60;
        if (gapMinute < 1) {
            result = "방금 전";
        } else {
            result = Math.ceil(gap / 1000 / 60) + "분 전";
        }
    } else {
        result = Math.ceil(gapHour) + "시간 전";
    }
    return result;
};

const getNewNews = async (page) => {
    try {
        const response = await axios.get(API + "/news/new?page=" + page);
        for (let i = 0; i < response.data.length; i++) {
            response.data[i].timeGap = calcTimeGap(response.data[i].created);
        }
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return [
            {
                id: 0,
                thumb: null,
                title: "서버 오류",
                content: "서버에서 데이터를 받아오는 중 오류가 발생했습니다.",
                count: 0,
                created: 0,
                url: "/",
                media: null,
            },
        ];
    }
};

const getHotNews = async () => {
    try {
        const response = await axios.get(API + "/news/hot");
        for (let i = 0; i < response.data.length; i++) {
            response.data[i].timeGap = calcTimeGap(response.data[i].created);
        }
        return response.data;
    } catch (err) {
        console.error("요청 중 오류 발생", err);
        return [
            {
                id: 0,
                thumb: null,
                title: "서버 오류",
                content: "서버에서 데이터를 받아오는 중 오류가 발생했습니다.",
                count: 0,
                created: 0,
                url: "/",
                media: null,
            },
        ];
    }
};

const updateViewCount = async (id) => {
    try {
        await axios.put(API + "/news/count/" + id);
    } catch (err) {
        console.error("요청 중 오류 발생", err);
    }
};

export { getNewNews, getHotNews, updateViewCount };
