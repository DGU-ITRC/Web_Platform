// 라이브러리
import { useState, useEffect } from "react";
import axios from "axios";
// 서비스
import { FalldownApi } from "@/services/demoService";
// 컴포넌트
// 아이콘
import { ArrowUpRight, FilePieChart } from "lucide-react";
// 이미지
import Upload from "@/assets/images/uploadIcon.png";
// 스타일
import "./style.css";

const FalldonwPage = () => {
    const apiBaseURL = FalldownApi;
    const [file, setFile] = useState(null);
    const [dragOver, setDragOver] = useState(false);
    const [isPopup, setisPopup] = useState(false);
    const [process, setProcess] = useState(0);
    const [progress, setProgress] = useState(-1);
    const [result, setResult] = useState([]);
    const [log, setLog] = useState([]);
    useEffect(() => {
        console.log(file);
        if (file && file.size > 10 * 1024 * 1024) {
            alert("10MB 이하의 파일만 지원됩니다.");
            setFile(null);
        }
        if (file && file.type !== "video/mp4") {
            alert("mp4 파일만 지원됩니다.");
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
        const uploadUrl = apiBaseURL + "/upload";
        const formData = new FormData();
        formData.append("video", file);

        // 파일 업로드 요청
        const response = await axios.post(uploadUrl, formData);
        const filename = response.data;
        await handleProgress(filename);
    };

    const handleProgress = async (filename) => {
        const target = document.getElementById("terminal");
        const inferenceUrl = apiBaseURL + `/inference?video=${filename}`;

        // EventSource를 사용해 진행 상황 수신
        const eventSource = new EventSource(inferenceUrl);

        eventSource.onmessage = (event) => {
            target.scrollTop = 100000;
            const data = JSON.parse(event.data);
            if (data.message) {
                setLog((prevLog) => [...prevLog, data.message]);
                if (data.message.startsWith("falldown_frames")) {
                    const frames = data.message.split(": ")[1];
                    const parsedFrames = frames
                        .slice(1, -1)
                        .split(", ")
                        .map((frame) => frame.slice(1, -1));
                    setResult(parsedFrames);
                }
            } else if (data.progress) {
                if (data.progress >= 100) {
                    setProgress(-1);
                } else {
                    setProgress(data.progress);
                }
            } else {
                console.log(data);
            }
        };

        eventSource.onerror = (error) => {
            eventSource.close();
            setProcess(2);
            target.scrollTop = 100000;
        };
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
        setLog([]);
        setResult([]);
    };

    useEffect(() => {
        if (process === 2) {
            const target = document.getElementById("terminal");
            target.scrollTop = 100000;
        }
    }, [process]);
    return (
        <div id="FalldonwPage" className="page">
            <div className="pageInfo">
                <div className="pageName">데모</div>
                <div className="pageSlogan">
                    <p>낙상 감지 모델</p>
                    <p className="description">(Falldown Detection Model)</p>
                </div>
                <a
                    className="linkBtn"
                    href="https://github.com/DGU-ITRC/CSDC_Falldown"
                    target="_blank"
                >
                    낙상 감지 모델 저장소
                    <ArrowUpRight size={20} />
                </a>
            </div>
            <div className="article">
                <div className="section">
                    <span>
                        이 데모 페이지에서는 최신 인공지능 기술을 기반으로 한
                        낙상 감지 모델을 소개합니다. 우리의 모델은 다양한
                        환경에서 발생할 수 있는 낙상을 실시간으로 분석하여
                        사람들의 안전을 확보하는 데 기여하고자 합니다.
                    </span>
                    <span>
                        인공지능 모델은 대량의 데이터를 학습하여 낙상의 징후를
                        인식하고, 이를 통해 위험한 상황을 조기에 감지하는 능력을
                        갖추고 있습니다. CCTV 영상, 스마트폰 촬영 영상 등 다양한
                        출처의 비디오 데이터를 처리하며, 낙상의 유형과 상황을
                        정확하게 식별합니다. 예를 들어, 갑작스러운 균형 상실,
                        비정상적인 자세 변화, 또는 특정 환경에서의 위험한 행동
                        등을 감지할 수 있습니다.
                    </span>
                    <span>
                        시스템은 의료, 노인 돌봄, 공공 안전 등 여러 분야에서
                        활용될 수 있습니다. 예를 들어, 병원에서 환자의 낙상
                        예방, 노인을 위한 안전 모니터링, 또는 산업 현장에서의
                        작업자 안전 관리 등 다양한 응용이 가능합니다.
                    </span>
                    <span>
                        여러분은 이 페이지에서 직접 비디오를 업로드하여 모델의
                        성능을 체험해 보실 수 있습니다. 업로드한 비디오는 모델에
                        의해 분석되어, 감지된 낙상에 대한 결과를 실시간으로
                        제공합니다. 이 과정을 통해 인공지능의 혁신적인 능력을
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
                                {file ? "동영상 분석" : "동영상 선택"}
                            </button>
                            <div className="descriptionWrap">
                                {file ? (
                                    <>
                                        <span>선택된 동영상: {file.name}</span>
                                        <span>
                                            동영상을 변경하려면 클릭하거나
                                            파일을 드래그하세요.
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            동영상을 업로드하려면 클릭하거나
                                            파일을 드래그하세요.
                                        </span>
                                        <span>
                                            (최대 10MB, mp4 파일만 지원)
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
                        사용자가 업로드하시는 동영상은 단순한 데모 체험을 넘어,
                        저희 낙상 감지 모델의 분석 능력을 향상시키는 중요한
                        역할을 합니다. 업로드된 데이터는 모델이 다양한 환경에서
                        낙상 패턴을 학습하는 데 활용되며, 이를 통해 더 높은
                        정확도로 낙상을 식별할 수 있는 능력을 갖추게 됩니다.
                        저희는 사용자 여러분께서 제공해 주신 동영상을 분석하여,
                        실제 상황에서 발생할 수 있는 다양한 낙상의 유형을 보다
                        정확하게 파악하고, 모델의 알고리즘을 지속적으로 개선할
                        것입니다. 이러한 과정은 인공지능 모델의 신뢰성을 높이고,
                        실제 응용에서의 효과성을 극대화하는 데 기여하게 됩니다.
                        여러분의 소중한 데이터 제공은 연구 및 개발에 큰 도움이
                        되며, 보다 안전하고 효율적인 시스템을 구축하는 데 중요한
                        역할을 합니다. 귀하의 협조에 깊이 감사드립니다.
                    </span>
                </div>
            </div>
            {isPopup && (
                <div className="popupWrap">
                    <div className="popup progressPopup">
                        <div className="popupHeader">
                            <FilePieChart size={16} />
                            <h1>분석</h1>
                        </div>
                        <div id="terminal" className="popupContent">
                            {log.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>
                        {progress !== -1 && (
                            <progress value={progress} max="100"></progress>
                        )}
                        {result.length > 0 && (
                            <div className="gallaryWrap">
                                <h1>낙상이 감지된 장면</h1>
                                <div className="gallary">
                                    {result.map((image, index) => (
                                        <img
                                            src={apiBaseURL + "/" + image}
                                            alt=""
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
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

export default FalldonwPage;
