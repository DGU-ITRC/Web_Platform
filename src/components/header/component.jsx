// 라이브러리
import { useEffect, useState } from "react";
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
        document.querySelector("body").classList.contains("darkMode")
            ? "darkMode"
            : "lightMode"
    );
    const themeHandler = () => {
        if (theme === "lightMode") {
            setTheme("darkMode");
            document.querySelector("body").classList.add("darkMode");
        } else {
            setTheme("lightMode");
            document.querySelector("body").classList.remove("darkMode");
        }
    };
    useEffect(() => {
        const savedTheme = document.cookie
            .split("; ")
            .find((row) => row.startsWith("theme="))
            ?.split("=")[1];

        if (savedTheme) {
            setTheme(savedTheme);
            document.querySelector("body").classList.add(savedTheme);
        }
    }, []);
    useEffect(() => {
        document.cookie = `theme=${theme}; path=/;`;
    }, [theme]);
    return (
        <div id="Header">
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

export default Header;
