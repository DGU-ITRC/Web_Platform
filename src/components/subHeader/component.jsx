// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { ArrowLeft } from "lucide-react";
// 스타일
import "./style.css";

const SubHeader = () => {
    const navigate = useNavigate();
    return (
        <div id="SubHeader">
            <div
                className="logoWrap"
                onClick={() => {
                    navigate("/");
                }}
            >
                <Logo color={theme === "darkMode" ? "white" : "black"} />
            </div>
            <ul className="navWrap">
                <li
                    className="navItem"
                    onClick={() => {
                        navigate("/introduction");
                    }}
                >
                    <p>소개</p>
                    <span className="underline"></span>
                </li>
                <li
                    className="navItem"
                    onClick={() => {
                        navigate("/story");
                    }}
                >
                    <p>이야기</p>
                    <span className="underline"></span>
                </li>
                <li
                    className="navItem"
                    onClick={() => {
                        navigate("/techandservice");
                    }}
                >
                    <p>기술과 서비스</p>
                    <span className="underline"></span>
                </li>
                <li
                    className="navItem"
                    onClick={() => {
                        navigate("/news");
                    }}
                >
                    <p>뉴스</p>
                    <span className="underline"></span>
                </li>
                <li
                    className="navItem"
                    onClick={() => {
                        navigate("/communication");
                    }}
                >
                    <p>소통</p>
                    <span className="underline"></span>
                </li>
            </ul>
            <div className="funcWrap">
                <button className="funcItem themeItem" onClick={themeHandler}>
                    {theme === "lightMode" ? (
                        <Sun size={24} />
                    ) : (
                        <Moon size={24} color="white" />
                    )}
                </button>
                <button className="funcItem languageItem">
                    <Globe
                        size={20}
                        color={theme === "lightMode" ? "black" : "white"}
                    />
                </button>
            </div>
        </div>
    );
};

export default SubHeader;
