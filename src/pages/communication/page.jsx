// 라이브러리
// 서비스
// 컴포넌트
// 아이콘
// 스타일
import "./style.css";

const CommunicationPage = () => {
    return (
        <div id="CommunicationPage" className="page">
            <div className="pageInfo">
                <div className="pageName">소통</div>
                <div className="pageSlogan">
                    <p>동국대학교 연구진과</p>
                    <p>소통해보세요.</p>
                </div>
            </div>
            <div className="newsContainer"></div>
        </div>
    );
};
export default CommunicationPage;
