// 라이브러리
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { Logo } from "@/assets/svg/localIcon";
import { Sun, Moon, Globe } from "lucide-react";
// 스타일
import "./style.css";

const Header = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(
        document.querySelector("body").classList.contains("dark")
            ? "dark"
            : "light"
    );
    const themeHandler = () => {
        if (theme === "light") {
            setTheme("dark");
            document.querySelector("body").classList.add("dark");
        } else {
            setTheme("light");
            document.querySelector("body").classList.remove("dark");
        }
    };
    return (
        <div id="Header">
            <div
                className="logoWrap"
                onClick={() => {
                    navigate("/");
                }}
            >
                <Logo color={theme === "dark" ? "white" : "black"} />
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
                    {theme === "light" ? (
                        <Sun size={24} />
                    ) : (
                        <Moon size={24} color="white" />
                    )}
                </button>
                <button className="funcItem languageItem">
                    <Globe
                        size={20}
                        color={theme === "light" ? "black" : "white"}
                    />
                </button>
            </div>
        </div>
    );
};

export default Header;
