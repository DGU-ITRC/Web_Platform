// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
// 아이콘
import { ArrowLeft } from "lucide-react";
// 스타일
import "./style.css";

const DemoHeader = () => {
    const navigate = useNavigate();
    return (
        <div id="DemoHeader">
            <button
                className="navBtn"
                onClick={() => navigate("/techandservice")}
            >
                <ArrowLeft size="16" />
                <p>기술과 서비스로 돌아가기</p>
            </button>
        </div>
    );
};

export default DemoHeader;
