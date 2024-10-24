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
            <button className="navBtn" onClick={() => navigate("/")}>
                <ArrowLeft size="16" />
                <p>메인화면으로 돌아가기</p>
            </button>
        </div>
    );
};

export default SubHeader;
