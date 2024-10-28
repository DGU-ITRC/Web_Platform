// 라이브러리
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
// 컴포넌트
import DemoHeader from "@/components/demoHeader/component";
// 스타일
import "./style.css";

const DemoLayout = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [useLocation()]);
    return (
        <div id="DemoLayout">
            <div id="HeaderContainer">
                <DemoHeader />
            </div>
            <div id="ContentContainer">
                <Outlet />
            </div>
            <div className="FooterContainer"></div>
        </div>
    );
};

export default DemoLayout;
