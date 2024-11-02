// 라이브러리
import { useState, useEffect } from "react";
import axios from "axios";
// 서비스
import { DeepscanApi } from "@/services/demoService";
// 컴포넌트
// 아이콘
import { ArrowUpRight, FilePieChart } from "lucide-react";
// 이미지
import Upload from "@/assets/images/uploadIcon.png";
// 스타일
import "./style.css";

const DeepscanPage = () => {
    const apiBaseURL = DeepscanApi;
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [isPopup, setisPopup] = useState(false);
    const [process, setProcess] = useState(0);
    const [progress, setProgress] = useState(-1);
    const [result, setResult] = useState({ query: "", similarity: [] });
    useEffect(() => {
        console.log(file);
        if (file && file.size > 10 * 1024 * 1024) {
            alert("10MB 이하의 파일만 지원됩니다.");
            setFile(null);
        }
        if (
            file &&
            !["image/jpeg", "image/png", "image/jpg"].includes(file.type)
        ) {
            alert("jpg, jpeg, png 파일만 지원됩니다.");
            setFile(null);
        }
    }, [file]);

    // 구현할 InputDragDrop에서 파일이 선택될 때 상태를 업데이트 한다.
    const handleFileSelect = (file) => {
        setFile(file);
    };

    // 파일 업로드를 처리하는 로직
    const handleUpload = async () => {
        setisPopup(true);
        setProcess(1);
        const uploadUrl = apiBaseURL + "/inference";
        const formData = new FormData();
        formData.append("upload_image", file);

        // 파일 업로드 요청
        const response = await axios.post(uploadUrl, formData);
        setResult(response.data);
        console.log(response.data);
        setProcess(2);
    };

    // 드래그 중인 요소가 목표 지점 진입할때
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(true);
    };

    // 드래그 중인 요소가 목표 지점을 벗어날때
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);
    };

    // 드래그 중인 요소가 목표 지점에 위치할때
    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    // 드래그 중인 요소가 목표 지점에서 드롭될때
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragOver(false);

        // 드래그되는 데이터 정보와 메서드를 제공하는 dataTransfer 객체 사용
        if (e.dataTransfer) {
            const file = e.dataTransfer.files[0];
            handleFileSelect(file);
        }
    };

    const handleChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        handleFileSelect(file);
        e.target.value = "";
    };

    const initDemo = () => {
        setFile(null);
        setisPopup(false);
        setProcess(0);
        setResult({ query: "", similarity: [] });
    };
    return (
        <div id="DeepscanPage" className="page">
            <div className="pageInfo">
                <div className="pageName">데모</div>
                <div className="pageSlogan">
                    <p>딥러닝 기반 이미지 검색 모델</p>
                    <p className="description">
                        (Deep Learning based Image Search Model)
                    </p>
                </div>
                <a
                    className="linkBtn"
                    href="https://github.com/DGU-ITRC/PLASS_Deepscan"
                    target="_blank"
                >
                    딥러닝 기반 이미지 검색 모델 저장소
                    <ArrowUpRight size={20} />
                </a>
            </div>
            <div className="article">
                <div className="section">
                    <span>
                        이 데모 페이지에서는 최신 인공지능 기술을 활용하여
                        딥러닝 기반 이미지 검색 모델을 소개합니다. 우리의 모델은
                        사용자가 제공하는 이미지 데이터를 실시간으로 분석하여,
                        관련 이미지와 정보를 신속하게 찾아내는 데 기여하고자
                        합니다.
                    </span>
                    <span>
                        이 인공지능 모델은 대량의 이미지 데이터를 학습하여
                        특징을 인식하고, 유사한 이미지를 효과적으로 검색하는
                        능력을 갖추고 있습니다. 모델은 다양한 출처의 이미지,
                        예를 들어 사진, 일러스트, 스캔한 문서 등을 처리할 수
                        있으며, 사용자의 요구에 맞는 이미지를 정확하게
                        식별합니다. 예를 들어, 특정 물체, 풍경, 또는 특정
                        스타일의 이미지를 빠르게 찾아낼 수 있습니다.
                    </span>
                    <span>
                        이 시스템은 전자상거래, 디자인, 교육, 의료 등 여러
                        분야에서 활용될 수 있습니다. 예를 들어, 쇼핑
                        웹사이트에서의 상품 추천, 디자인 프로젝트에서의 영감
                        검색, 또는 의료 이미지 분석에 이르기까지 다양한 응용이
                        가능합니다.
                    </span>
                    <span>
                        여러분은 이 페이지에서 직접 이미지를 업로드하고, 모델의
                        성능을 체험해 보실 수 있습니다. 업로드한 이미지는 모델에
                        의해 분석되어, 관련된 이미지 검색 결과를 실시간으로
                        제공합니다. 이 과정을 통해 인공지능의 뛰어난 능력을
                        체험하고, 실제 상황에서 어떻게 활용될 수 있는지를
                        이해하는 데 도움이 될 것입니다.
                    </span>
                </div>
                <div className="section">
                    <div className="dropzoneWrap">
                        <label
                            htmlFor="fileUpload"
                            className={
                                dragOver ? "dropzone active" : "dropzone"
                            }
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                        >
                            <img src={Upload} alt="" srcset="" />
                            <button
                                className={file ? "btn btn-primary" : "btn"}
                                onClick={() => {
                                    file
                                        ? handleUpload()
                                        : document
                                              .getElementById("fileUpload")
                                              .click();
                                }}
                            >
                                {file ? "이미지 검색" : "이미지 선택"}
                            </button>
                            <div className="descriptionWrap">
                                {file ? (
                                    <>
                                        <span>선택된 이미지: {file.name}</span>
                                        <span>
                                            이미지을 변경하려면 클릭하거나
                                            파일을 드래그하세요.
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            이미지을 업로드하려면 클릭하거나
                                            파일을 드래그하세요.
                                        </span>
                                        <span>
                                            (최대 10MB, jpg, jpeg, png 파일만
                                            지원)
                                        </span>
                                    </>
                                )}
                            </div>
                        </label>
                        <input
                            type="file"
                            name="fileUpload"
                            id="fileUpload"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="section">
                    <span className="terms">
                        사용자가 업로드하시는 이미지는 단순한 데모 체험을 넘어,
                        저희 딥러닝 기반 이미지 검색 모델의 분석 능력을
                        향상시키는 중요한 역할을 합니다. 이러한 이미지는 모델이
                        다양한 이미지 패턴을 학습하는 데 활용되어, 더 높은
                        정확도로 관련 이미지를 검색할 수 있는 능력을 갖추게
                        됩니다. 저희는 사용자 여러분께서 제공해 주신 이미지를
                        분석하여, 실제 상황에서 발생할 수 있는 다양한 이미지
                        유형을 보다 정확하게 파악하고, 모델의 알고리즘을
                        지속적으로 개선할 것입니다. 이러한 과정은 인공지능
                        모델의 신뢰성을 높이고, 실제 응용에서의 효과성을
                        극대화하는 데 기여하게 됩니다. 여러분의 소중한 데이터
                        제공은 연구 및 개발에 큰 도움이 되며, 보다 효과적이고
                        효율적인 이미지 검색 시스템을 구축하는 데 중요한 역할을
                        할 것입니다. 귀하의 협조에 깊이 감사드립니다.
                    </span>
                </div>
            </div>
            {isPopup && (
                <div className="popupWrap">
                    <div className="popup">
                        <div className="popupHeader">
                            <FilePieChart size={16} />
                            <h1>검색 결과</h1>
                        </div>
                        <div className="searchResult">
                            <div className="resultWrap queryWrap">
                                <img
                                    src={apiBaseURL + "/" + result.query}
                                    alt=""
                                />
                                <p>검색한 이미지</p>
                            </div>
                            {result.similarity.map((item, index) => (
                                <div className="resultWrap">
                                    <img
                                        src={apiBaseURL + "/" + item.path}
                                        alt=""
                                    />
                                    <p>유사도: {item.score.toFixed(2)}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {process === 2 && (
                        <button className="btn" onClick={initDemo}>
                            닫기
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default DeepscanPage;
