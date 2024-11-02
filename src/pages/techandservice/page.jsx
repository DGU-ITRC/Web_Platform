// 라이브러리
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import Banner from "@/components/banner/component";
// 이미지
import BannerBg from "@/assets/images/apiBanner.png";
import AbnormalModel from "@/assets/images/architecture/abnormalModel.png";
import QnaModel from "@/assets/images/architecture/qnaModel.png";
import DeepscanModel from "@/assets/images/architecture/deepscanModel.png";
import SelfharmModle from "@/assets/images/architecture/selfharmModel.png";
import FalldownModel1 from "@/assets/images/architecture/falldownModel1.png";
import FalldownModel2 from "@/assets/images/architecture/falldownModel2.png";
// 아이콘
import { Github, Play, ArrowUpRight } from "lucide-react";
// 스타일
import "./style.css";

const TechAndServicePage = () => {
    return (
        <div id="TechAndServicePage" className="page">
            <div className="pageInfo">
                <div className="pageName">기술과 서비스</div>
                <div className="pageSlogan">
                    <p>동국대학교 연구진들이 개발한</p>
                    <p>인공지능 모델을 소개합니다.</p>
                </div>
                <a
                    className="linkBtn"
                    href="https://github.com/DGU-ITRC"
                    target="_blank"
                >
                    동국대학교 ITRC 플랫폼 저장소
                    <ArrowUpRight size={20} />
                </a>
            </div>
            <div className="article">
                <div className="section">
                    <SectionHeader
                        title="이상행위 탐지 모델"
                        repository="https://github.com/DGU-ITRC/PLASS_Abnormal"
                        demo="/demo/abnormal"
                    />
                    <table>
                        <tr>
                            <th>소개</th>
                            <td>
                                <ul>
                                    <li>
                                        주거지역 내에서 이상행동을 탐지하여
                                        범죄를 사전에 예방하는 데 중점을 둔
                                        이상행위 탐지 모델로 거주지역의 치안을
                                        강화하기 위한 능동적인 서비스를
                                        제공한다.
                                    </li>
                                    <li>
                                        이를 통해 주민들은 안전한 환경에서
                                        생활할 수 있으며, 범죄 발생 가능성을
                                        최소화하는 데 도움을 받을 수 있다.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>사용 라이브러리 및 패키지</th>
                            <td>
                                keras, matplotlib, numpy, opencv, tensorflow,
                                pandas, scikit-learn, Pillow, imageio, joblib,
                                pickle, imutils
                            </td>
                        </tr>
                        <tr>
                            <th>모델 아키텍처</th>
                            <td>
                                <ol>
                                    <li>
                                        입력: 영상 및 스켈레톤 데이터을
                                        전달한다.
                                    </li>
                                    <li>
                                        프레임단위로 이미지 저장:동영상 데이터를
                                        입력으로 받아 프레임단위로 이미지로
                                        저장한다.
                                    </li>
                                    <li>
                                        모델별 이상행동 예측: 저장한 이미지를
                                        C3D, CNN-RNN을 통하여 이상행동을
                                        예측하여 해당 이상행동의 라벨값으로
                                        반환한다.
                                    </li>
                                    <li>
                                        모델별 예측 결과 입력: C3D의 예측
                                        결과값과 CNN_RINN의 예측 결과값그리고
                                        실제 값을 입력으로 받는다
                                    </li>
                                    <li>
                                        최종 예측 결과 제공: C3D, CNN_RNN의 예측
                                        결과값 및 실제 값을 입력으로 받음으로써
                                        최종적으로 해당 데이터(영상,JSON)의
                                        최종적으로 예측한 이상행동 결과 값을
                                        반환한다.
                                    </li>
                                </ol>
                                <div className="architectureWrap col1">
                                    <img src={AbnormalModel} alt="" srcset="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="section">
                    <SectionHeader
                        title="질의응답 모델"
                        repository="https://github.com"
                        demo="/"
                    />
                    <table>
                        <tr>
                            <th>소개</th>
                            <td>
                                DistilBert를 활용한 RobustOA 모델로 자동
                                질의응답 시스템, 가상비서 시스템, 검색 엔진
                                등에서 활용할 수 있으며 긴 문장에서 질문을
                                통하여 원하는 내용을 손쉽게 확인할 수 있다.
                            </td>
                        </tr>
                        <tr>
                            <th>사용 라이브러리 및 패키지</th>
                            <td>
                                pytorch, numpy, tqdm, transformers, tensorboard,
                                tensorflow, tensorboardX
                            </td>
                        </tr>
                        <tr>
                            <th>모델 아키텍처</th>
                            <td>
                                <ol>
                                    <li>
                                        전체 문장 입력: 확인하고자 하는 전체
                                        문장을 입력한다.
                                    </li>
                                    <li>
                                        질의 내용 입력: 전체 문장에서 확인하고자
                                        하는 질의 내용을 입력한다
                                    </li>
                                    <li>
                                        토큰화: 입력한 전체 문장과 질의 내용을
                                        전처리하여 토큰화하고, 단어나 문장의
                                        임베딩을 생성한다
                                    </li>
                                    <li>
                                        문맥 파악: 입력한 전체 문장과 질의
                                        내용을 transformer를 사용하여 문맥을
                                        파악한다.
                                    </li>
                                    <li>
                                        답변 생성: 이전 단계에서 추출된 정보와
                                        분석 결과를 기반으로 답변을 생성한다.
                                    </li>
                                </ol>
                                <div className="architectureWrap col1">
                                    <img src={QnaModel} alt="" srcset="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="section">
                    <SectionHeader
                        title="딥러닝 기반 이미지 검색 모델"
                        repository="https://github.com/DGU-ITRC/PLASS_Deepscan"
                        demo="/demo/deepscan"
                    />
                    <table>
                        <tr>
                            <th>소개</th>
                            <td>
                                <ul>
                                    <li>
                                        이미지 분석 기반 검색 엔진은 컴퓨터 비전
                                        및 이미지 인식 기술을 사용하여 검색
                                        결과를 생성하는 기술이며, 이미지의
                                        시각적 특징과 패턴을 분석하고 이를
                                        기반으로 유사한 이미지를 찾거나 관련
                                        정보를 추출한다.
                                    </li>
                                    <li>
                                        사용자가 이미지를 제공하면 해당 이미지의
                                        시각적 특징을 추출하고 이를 이미지
                                        데이터베이스와 비교하여, 유사한 이미지를
                                        찾거나 관련 정보를 제공한다.
                                    </li>
                                    <li>
                                        이미지 분석 기반 검색 기술은 다양한 응용
                                        분야에서 사용되고 있다. 예를 들어,
                                        온라인 쇼핑 사이트에서는 사용자가 원하는
                                        제품의 이미지를 제공하면 해당 제품과
                                        유사한 제품을 추천하거나, 관련된 제품
                                        정보를 제공하여 쇼핑 경험을 개선할 수
                                        있다.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>사용 라이브러리 및 패키지</th>
                            <td>YOLOv5, Tesseract OCR</td>
                        </tr>
                        <tr>
                            <th>모델 아키텍처</th>

                            <td>
                                OCR 기술과 YOLO를 결합하여 이미지 검색을
                                수행하는 방법이다.
                                <ol>
                                    <li>
                                        이미지 입력: 검색하려는 이미지를
                                        전달한다.
                                    </li>
                                    <li>
                                        OCR 적용: 입력된 이미지에 OCR 기술을
                                        적용하여 이미지에서 텍스트를 추출한다.
                                    </li>
                                    <li>
                                        텍스트 검색: 추출된 텍스트를 기반으로
                                        검색 엔진 또는 데이터베이스를 사용하여
                                        관련된 정보를 찾는다.
                                    </li>
                                    <li>
                                        YOLO를 사용한 객체 감지: OCR로 추출된
                                        텍스트 외에도 이미지에서 객체를 감지하기
                                        위해 YOLO를 적용해서 YOLO는 이미지 내에
                                        있는 객체들을 감지하고, 객체의 위치와
                                        클래스를 예측하는 경계 상자를 생성
                                    </li>
                                    <li>
                                        객체 정보와 텍스트 결합: OCR로 추출된
                                        텍스트와 YOLO로 예측된 객체의 위치와
                                        클래스 정보를 결합한다. 이를 통해
                                        텍스트와 객체 정보를 연결하여 텍스트와
                                        객체 간의 관련성을 파악할 수 있다.
                                    </li>
                                    <li>
                                        이미지 검색 결과 제공: 최종적으로 검색
                                        시스템은 텍스트와 객체 정보를 결합한
                                        기반으로 이미지 검색 결과를 제공한다.
                                    </li>
                                </ol>
                                <div className="architectureWrap col1">
                                    <img src={DeepscanModel} alt="" srcset="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="section">
                    <SectionHeader
                        title="자살자해 행동 탐지 모델"
                        repository="https://github.com/DGU-ITRC/PLASS_Selfharm"
                        demo="/demo/selfharm"
                    />
                    <table>
                        <tr>
                            <th>소개</th>
                            <td>
                                <ul>
                                    <li>
                                        이 모델은 테스트베드에서 구축된
                                        데이터셋을 기반으로 하여, 자살 및 자해
                                        행동을 정밀하게 탐지하고 분석하는 데
                                        중점을 둡니다. 다양한 상황에서의 행동을
                                        시뮬레이션하여 수집된 데이터는 모델의
                                        학습에 활용됩니다.
                                    </li>
                                    <li>
                                        모델은 RGB 영상 분석을 통해 이미지에서
                                        사람의 행동을 탐지합니다. 이 과정에서
                                        스켈레톤을 추출하고, 해당 스켈레톤
                                        데이터를 기반으로 PoseC3D 모델을
                                        활용하여 행동을 추론합니다. 이러한 접근
                                        방식은 자살 및 자해 행동의 조기 탐지에
                                        기여하며, 개인의 안전을 확보하는 데
                                        중요한 역할을 합니다.
                                    </li>
                                    <li>
                                        최종적으로, 모델은 위험한 행동이 발생할
                                        경우 신속하게 경고할 수 있는 시스템을
                                        구축할 수 있도록 설계되었습니다. 이
                                        시스템은 다양한 환경에서 자살 및 자해
                                        행동을 효과적으로 감지하고, 사회적
                                        안전망을 강화하는 데 기여할 것입니다.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>사용 라이브러리 및 패키지</th>
                            <td>
                                torch, mmcv, numpy, pandas, opencv-python,
                                decord, av, tensorboardX, onnx, onnxruntime,
                                scipy, poseC3D
                            </td>
                        </tr>
                        <tr>
                            <th>모델 아키텍처</th>
                            <td>
                                {/* <ol>
                                    <li></li>
                                </ol>
                                 */}
                                <div className="architectureWrap col1">
                                    <img src={SelfharmModle} alt="" srcset="" />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="section">
                    <SectionHeader
                        title="낙상 탐지 모델"
                        repository="https://github.com/DGU-ITRC/CSDC_Falldown"
                        demo="/demo/falldown"
                    />
                    <table>
                        <tr>
                            <th>소개</th>
                            <td>
                                <ul>
                                    <li>
                                        가상 환경에서 다양한 활동을
                                        시뮬레이션하여 생성된 데이터를 기반으로
                                        한다. 이 모델은 사람의 낙상 행동을
                                        정밀하게 탐지하고 분석하는 데 중점을
                                        둔다. 먼저, 가상 환경에서 설정 가능한
                                        매개변수를 통해 다양한 액터와 활동을
                                        설정할 수 있다. 예를 들어, 마네킹 모델을
                                        사용하여 다양한 높이와 방향에서 낙상
                                        동작을 시뮬레이션할 수 있다. 모델은 RGB
                                        영상 분석을 통해 이미지에서 사람의
                                        행동을 탐지하고, ST-GCN(공간-시간 그래프
                                        컨볼루션 네트워크)을 활용하여 2D 포즈
                                        추정을 수행한다. 이 과정에서 CNN 백본을
                                        사용하여 관심 영역을 탐지하고,
                                        최종적으로 이상 행동을 탐지하는 결과를
                                        도출한다. 이를 통해 낙상 발생 시
                                        신속하게 경고할 수 있는 시스템을 구축할
                                        수 있다.
                                    </li>
                                    <li>
                                        모델은 RGB 영상 분석을 통해 이미지에서
                                        사람의 행동을 탐지하고, ST-GCN(공간-시간
                                        그래프 컨볼루션 네트워크)을 활용하여 2D
                                        포즈 추정을 수행한다. 이 과정에서 CNN
                                        백본을 사용하여 관심 영역을 탐지하고,
                                        최종적으로 이상 행동을 탐지하는 결과를
                                        도출한다. 이를 통해 낙상 발생 시
                                        신속하게 경고할 수 있는 시스템을 구축할
                                        수 있다.
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>사용 라이브러리 및 패키지</th>
                            <td>YOLOv5, Tesseract OCR</td>
                        </tr>
                        <tr>
                            <th>모델 아키텍처</th>
                            <td>
                                <ol>
                                    <li></li>
                                </ol>
                                <div className="architectureWrap col2">
                                    <img
                                        src={FalldownModel1}
                                        alt=""
                                        srcset=""
                                    />
                                    <img
                                        src={FalldownModel2}
                                        alt=""
                                        srcset=""
                                    />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Banner
                slogan="동국대 ITRC에서 개발된 인공지능을 API로 사용해보세요."
                description="설문폼에 정보를 입력하시면 5일 이내에 입력하신 연락처로 결과가 전송됩니다."
                funcname="신청하기"
                func={() => {
                    window.open("https://forms.gle/iiRQ4Fqri7NttybT9");
                }}
                background={BannerBg}
            />
        </div>
    );
};

const SectionHeader = ({ title = "", repository = "", demo = "" }) => {
    const navigate = useNavigate();
    return (
        <div className="sectionHeaderWrap">
            <h1>{title}</h1>
            <div className="linkWrap">
                {repository !== "" && (
                    <button
                        className="btn iconOnlyBtn"
                        onClick={() => {
                            window.open(repository);
                        }}
                    >
                        <Github size={20} />
                    </button>
                )}
                {demo !== "" && (
                    <button
                        className="btn iconBtn"
                        onClick={() => {
                            navigate(demo);
                        }}
                    >
                        <Play size={20} />
                        데모
                    </button>
                )}
            </div>
        </div>
    );
};
export default TechAndServicePage;
