// 라이브러리
// 이미지
// 스타일
import "./style.css";

const Banner = ({
    slogan = "문구를 입력하세요.",
    description = "설명을 입력하세요.",
    funcname = "버튼 텍스트",
    func = () => {},
    background = null,
}) => {
    return (
        <div
            id="Banner"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "100%",
                backgroundPosition: "center",
            }}
        >
            <div className="dimmed"></div>
            <h1 className="slogan">{slogan}</h1>
            <p className="description">{description}</p>
            <button className="btn funcBtn" onClick={func}>
                {funcname}
            </button>
        </div>
    );
};

export default Banner;
