// 라이브러리
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
// 컴포넌트
// 스타일
import "./style.css";

const SubLayout = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [useLocation()]);
    return (
        <div id="SubLayout">
            <div id="HeaderContainer"></div>
            <div id="ContentContainer">
                <Outlet />
            </div>
        </div>
    );
};

export default SubLayout;
