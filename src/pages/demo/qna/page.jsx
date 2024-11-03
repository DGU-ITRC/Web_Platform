// 라이브러리
import { useState, useEffect } from "react";
import axios from "axios";
// 서비스
import { QnaApi } from "@/services/demoService";
// 컴포넌트
// 아이콘
import { ArrowUpRight, FilePieChart } from "lucide-react";
// 이미지
import Upload from "@/assets/images/uploadIcon.png";
// 스타일
import "./style.css";

const QnaPage = () => {
    const apiBaseURL = QnaApi;
    const [context, setContext] = useState("");
    const [question, setQuestion] = useState("");
    const [isPopup, setisPopup] = useState(false);
    const [process, setProcess] = useState(0);
    const [result, setResult] = useState({
        context: "",
        question: "",
        start_idx: 0,
        end_idx: 0,
        answer: "",
    });

    const handlePredict = async () => {
        setisPopup(true);
        setProcess(1);
        const predictUrl = apiBaseURL + "/predict";
        const formData = new FormData();
        formData.append("context", context);
        formData.append("question", question);
        const response = await axios.post(predictUrl, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log(response.data);

        setProcess(2);
        setResult(response.data);
    };

    const initDemo = () => {
        setContext("");
        setQuestion("");
        setisPopup(false);
        setProcess(0);
    };
    return (
        <div id="QnaPage" className="page">
            <div className="pageInfo">
                <div className="pageName">데모</div>
                <div className="pageSlogan">
                    <p>질의응답 모델</p>
                    <p className="description">(Question and Answer Model)</p>
                </div>
                <a
                    className="linkBtn"
                    href="https://github.com/DGU-ITRC/PLASS_QNA"
                    target="_blank"
                >
                    질의응답 저장소
                    <ArrowUpRight size={20} />
                </a>
            </div>
            <div className="article">
                <div className="section">
                    <span>
                        이 데모 페이지에서는 최신 인공지능 기술을 활용한
                        질의응답 모델을 소개합니다. 우리의 모델은 사용자가
                        제기하는 질문에 대해 신속하고 정확한 답변을 제공하여
                        정보 검색의 효율성을 높이고, 다양한 분야에서의
                        의사소통을 개선하는 데 기여하고자 합니다.
                    </span>
                    <span>
                        인공지능 모델은 대량의 데이터를 학습하여 자연어 처리
                        능력을 갖추고 있으며, 질문의 맥락을 이해하고 적절한
                        정보를 추출하는 능력을 지니고 있습니다. 모델은 텍스트,
                        이미지, 데이터베이스 등 다양한 출처에서 정보를 처리할 수
                        있으며, 사용자의 질문에 대한 답변을 정확하게 생성합니다.
                        예를 들어, 특정 주제에 대한 설명, 문제 해결을 위한 단계,
                        또는 관련된 데이터를 제공하는 등의 기능을 수행합니다.
                    </span>
                    <span>
                        이 시스템은 교육, 고객 지원, 연구 및 개발 등 여러
                        분야에서 활용될 수 있습니다. 예를 들어, 학생들의 학습
                        지원, 기업의 고객 문의 응대, 또는 연구자들의 정보 검색
                        등에 이르기까지 다양한 응용이 가능합니다.
                    </span>
                    <span>
                        여러분은 이 페이지에서 직접 질문을 입력하고, 모델의
                        성능을 체험해 보실 수 있습니다. 입력한 질문은 모델에
                        의해 분석되어, 실시간으로 제공되는 답변을 통해
                        인공지능의 뛰어난 능력을 경험할 수 있습니다. 이 과정을
                        통해 실제 상황에서 어떻게 활용될 수 있는지를 이해하는 데
                        도움이 될 것입니다.
                    </span>
                </div>
                <div className="section">
                    <div className="inputWrap">
                        <textarea
                            name=""
                            id=""
                            placeholder="전체 문장을 입력하세요."
                            defaultValue={context}
                            onChange={(e) => setContext(e.target.value)}
                        />
                        <input
                            type="text"
                            className="question"
                            placeholder="질문을 입력하세요."
                            defaultValue={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                        <button onClick={handlePredict}>질문하기</button>
                    </div>
                </div>
                <div className="section">
                    <span className="terms">
                        사용자가 입력하시는 질문은 단순한 데모 체험을 넘어, 저희
                        질의응답 모델의 분석 능력을 향상시키고 성능 개선에
                        중요한 기여를 합니다. 입력된 질문과 관련된 데이터는
                        모델이 다양한 주제와 상황에서의 정보 검색 패턴을
                        학습하는 데 활용되며, 이를 통해 더 높은 정확도로 사용자
                        질문에 대한 답변을 제공할 수 있는 능력을 갖추게 됩니다.
                        저희는 사용자 여러분께서 제공해 주신 질문을 분석하여,
                        실제 상황에서 발생할 수 있는 다양한 정보 요구를 보다
                        정확하게 파악하고, 모델의 알고리즘을 지속적으로 개선할
                        것입니다. 이러한 과정은 인공지능 모델의 신뢰성을 높이고,
                        실제 응용에서의 효과성을 극대화하는 데 기여하게 됩니다.
                        여러분의 소중한 데이터 제공은 연구 및 개발에 큰 도움이
                        되며, 보다 효과적이고 효율적인 정보 검색 시스템을
                        구축하는 데 중요한 역할을 할 것입니다. 귀하의 협조에
                        깊이 감사드립니다. 입력된 데이터는 보안 및 개인정보 보호
                        정책에 따라 안전하게 관리되며, 분석 후에는 적절한
                        방식으로 처리됩니다. 이 약관에 동의하신다면, 질의응답
                        모델의 발전에 함께 참여해 주시기 바랍니다.
                    </span>
                </div>
            </div>
            {isPopup && (
                <div className="popupWrap">
                    <div className="popup progressPopup">
                        <div className="popupHeader">
                            <FilePieChart size={16} />
                            <h1>인공지능이 예측한 답변</h1>
                        </div>
                        <div className="answerWrap">{result.answer}</div>
                        <div className="descriptionWrap">
                            인공지능이 예측한 답변은 잘못되거나 부정확할 수
                            있습니다.
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

export default QnaPage;
