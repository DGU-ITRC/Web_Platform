// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 데이터
import { useState } from "react";
import { storyData } from "./data.js";
// 스타일
import "./style.css";

const StoryPage = () => {
    const [data, setData] = useState(storyData);
    return (
        <div id="StoryPage" className="page">
            <div className="pageInfo">
                <div className="pageName">이야기</div>
                <div className="pageSlogan">
                    <p>동국대학교 ITRC 프로젝트의</p>
                    <p>스토리를 소개합니다.</p>
                </div>
            </div>
            <div className="historyContainer">
                <div className="line"></div>
                <div className="historyWrap">
                    {data.map((story, index) => (
                        <StoryItem
                            side={index % 2 === 0 ? "left" : "right"}
                            year={story.year}
                            month={story.month}
                            title={story.title}
                            images={story.images}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const StoryItem = ({ side, year, month, title, images = [] }) => {
    return (
        <div className={`storyItem ${side}`}>
            <div className="storyWrap">
                <span className="connector"></span>
                <div className="dateWrap">
                    {year}.{month}.
                </div>
                <div className="contentWrap">
                    <h1>{title}</h1>
                    <div className="imageWrap">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt="" />
                        ))}
                    </div>
                </div>
            </div>
            <span className="pointer">
                <span className="dot"></span>
            </span>
        </div>
    );
};
export default StoryPage;
