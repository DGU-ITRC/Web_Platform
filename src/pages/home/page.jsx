// 라이브러리
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// 서비스
// 컴포넌트
import Block from "@/components/block/component";
// 아이콘
import AvailableBg from "@/assets/images/availableBg.png";
import StudyingBg from "@/assets/images/studyingBg.png";
import TodayBg from "@/assets/images/todayBg.png";
import CumulativeBg from "@/assets/images/cumulativeBg.png";
import IntroductionBg from "@/assets/images/introductionBg.png";
import CommunicationBg from "@/assets/images/communicationBg.png";
import RepositoryBg from "@/assets/images/repositoryBg.png";
import ApiBg from "@/assets/images/apiBg.png";
import ServerBg from "@/assets/images/serverBg.png";
import { Arrow, Plus, Send, DguLogo } from "@/assets/svg/localIcon";
// 이미지
import DguColorBg from "@/assets/images/dguColorBg.png";
import DguDimBg from "@/assets/images/dguDimBg.png";
import PlassLogo from "@/assets/images/plassLogo.png";
import HriLogo from "@/assets/images/hriLogo.png";
import CsdcLogo from "@/assets/images/csdcLogo.png";

// 스타일
import "./style.css";

const HomePage = () => {
    const [theme, setTheme] = useState(
        document.querySelector("body").classList.contains("dark")
            ? "dark"
            : "light"
    );
    const navigate = useNavigate();
    return (
        <div id="HomePage" className="page">
            <div className="heroSection">
                <div className="artWallWrap card">{/* <Block /> */}</div>
                <div className="summaryWrap">
                    <div className="summaryItem light available ">
                        <img
                            className="icon"
                            src={AvailableBg}
                            alt=""
                            srcset=""
                        />
                        <SummaryValue text="10" />
                        <SummaryName text="사용가능한 기술" />
                        <SummaryLinkBtn>
                            <Plus />
                        </SummaryLinkBtn>
                    </div>
                    <div className="summaryItem light studying ">
                        <img
                            className="icon"
                            src={StudyingBg}
                            alt=""
                            srcset=""
                        />
                        <SummaryValue text="2" />
                        <SummaryName text="연구중인 기술" />
                        <SummaryLinkBtn>
                            <Plus />
                        </SummaryLinkBtn>
                    </div>
                    <div className="summaryItem light today ">
                        <img className="icon" src={TodayBg} alt="" srcset="" />
                        <SummaryValue text="10" />
                        <SummaryName text="금일 방문자" />
                    </div>
                    <div className="summaryItem light cumulative ">
                        <img
                            className="icon"
                            src={CumulativeBg}
                            alt=""
                            srcset=""
                        />
                        <SummaryValue text="10K" />
                        <SummaryName text="누적 방문자" />
                    </div>
                </div>
            </div>
            <div className="bentoWrap">
                <div
                    className="bentoItem light introduction "
                    onClick={() => {
                        navigate("/introduction");
                    }}
                >
                    <img
                        className="icon"
                        src={IntroductionBg}
                        alt=""
                        srcset=""
                    />
                    <BentoTitle text="ITRC-KSRC" />
                    <BentoName text="프로젝트 소개" />
                    <BentoLinkBtn>
                        <Arrow />
                    </BentoLinkBtn>
                </div>
                <div
                    className="bentoItem light notice"
                    onClick={() => {
                        navigate("/story");
                    }}
                >
                    <BentoName text="프로젝트 이야기" />
                    <BentoLinkBtn>
                        <Plus />
                    </BentoLinkBtn>
                </div>
                <div className="bentoItem map"></div>
                <div
                    className="bentoItem light communication"
                    onClick={() => {
                        navigate("/communication");
                    }}
                >
                    <img
                        className="icon"
                        src={CommunicationBg}
                        alt=""
                        srcset=""
                    />
                    <BentoName text="소통" />
                    <BentoLinkBtn>
                        <Arrow />
                    </BentoLinkBtn>
                </div>
                <div
                    className="bentoItem light news"
                    onClick={() => {
                        navigate("/news");
                    }}
                >
                    <News />
                    <BentoName text="뉴스" />
                    <BentoLinkBtn>
                        <Plus />
                    </BentoLinkBtn>
                </div>
                <div
                    className="bentoItem dark repository"
                    onClick={() => {
                        // TBD : navigate to github repository
                        navigate("/");
                    }}
                >
                    <img className="icon" src={RepositoryBg} alt="" srcset="" />
                    <BentoName text="저장소" />
                    <BentoLinkBtn theme="light">
                        <Plus color="black" />
                    </BentoLinkBtn>
                </div>
                <div
                    className="bentoItem light model"
                    onClick={() => {
                        // TBD : navigate to model page
                        navigate("/");
                    }}
                >
                    <div
                        id="BlockArea"
                        style={{ width: "100%", height: "100%" }}
                    ></div>
                    <BentoName text="인공지능 모델" />
                    <BentoLinkBtn>
                        <Arrow />
                    </BentoLinkBtn>
                </div>
                <div
                    className="bentoItem light api"
                    onClick={() => {
                        // TBD : navigate to api page
                        navigate("/");
                    }}
                >
                    <img className="icon" src={ApiBg} alt="" srcset="" />
                    <BentoName text="API" />
                    <BentoLinkBtn>
                        <Arrow />
                    </BentoLinkBtn>
                </div>
                <TimeBento />
                <div className="bentoItem lab">
                    <LabSlider />
                    <BentoName text="참여 연구실" />
                </div>
                <div
                    className="bentoItem dark server"
                    onClick={() => {
                        // TBD : navigate to server state page
                        navigate("/");
                    }}
                >
                    <img className="icon" src={ServerBg} alt="" srcset="" />
                    <BentoName text="서버" />
                    <BentoLinkBtn theme="light">
                        <Arrow color="black" />
                    </BentoLinkBtn>
                </div>
            </div>
            <div className="contactWrap">
                <div className="artWall">
                    <img src={DguColorBg} alt="" />
                    <img src={DguDimBg} alt="" />
                </div>
                <div className="artWall">
                    <img src={DguDimBg} alt="" />
                    <img src={DguColorBg} alt="" />
                </div>
                <form className="contactFormWrap">
                    <div className="inputForm">
                        <div className="row">
                            <ContactInput
                                id="name"
                                name="이름"
                                type="text"
                                required
                            />
                        </div>
                        <div className="row">
                            <ContactInput
                                id="phone"
                                name="전화번호"
                                type="tel"
                                required
                            />
                            <ContactInput
                                id="email"
                                name="이메일"
                                type="email"
                            />
                        </div>
                        <div className="row">
                            <ContactInput
                                id="subject"
                                name="제목"
                                type="text"
                                required
                            />
                        </div>
                        <div className="row">
                            <ContactInput
                                id="message"
                                name="내용"
                                type="text"
                                required
                            />
                        </div>
                    </div>
                    <button className="submitBtn">
                        <p>의견 보내기</p>
                        <div className="sendWrap">
                            <div className="iconArray">
                                <Send color="black" />
                                <Send color="black" />
                            </div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

const SummaryName = ({ text }) => {
    return <p className="summaryName">{text}</p>;
};

const SummaryValue = ({ text }) => {
    return <p className="summaryValue">{text}</p>;
};

const SummaryLinkBtn = ({ theme = "dark", children }) => {
    return <button className={"summaryLinkBtn " + theme}>{children}</button>;
};

const BentoTitle = ({ text }) => {
    return <p className="bentoTitle">{text}</p>;
};

const BentoName = ({ text }) => {
    return <p className="bentoName">{text}</p>;
};

const BentoLinkBtn = ({ theme = "dark", children }) => {
    return <button className={"bentoLinkBtn " + theme}>{children}</button>;
};

const ContactInput = ({ id, name, type, placeholder, required }) => {
    return (
        <div className="contactInput">
            <p>
                {name}
                {required ? "*" : ""}
            </p>
            {id === "message" ? (
                <textarea
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};

const TimeBento = () => {
    const [day, setDay] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const days = ["일", "월", "화", "수", "목", "금", "토"];
            const day = days[now.getDay()];
            const date = now.getDate();
            const time =
                now.getHours().toString().padStart(2, "0") +
                ":" +
                now.getMinutes().toString().padStart(2, "0");

            setDay(day);
            setDate(date);
            setTime(time);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="bentoItem time">
            <div className="row">
                <div className="dateWrap">
                    <p className="timeDay">{day}</p>
                    <p className="timeDate">{date}</p>
                </div>
                <div className="logoWrap">
                    <DguLogo />
                </div>
            </div>
            <div className="row">
                <div className="timeWrap">
                    <p className="timeTime">{time}</p>
                </div>
            </div>
        </div>
    );
};

const LabSlider = () => {
    return (
        <div className="labSlider">
            <a
                href="https://sites.google.com/dgu.ac.kr/plass/home"
                target="_blank"
            >
                <img src={PlassLogo} alt="" />
            </a>
            <a href="http://hri.dongguk.edu/" target="_blank">
                <img src={HriLogo} alt="" />
            </a>
            <a href="https://sites.google.com/dgu.ac.kr/csdc/" target="_blank">
                <img src={CsdcLogo} alt="" />
            </a>
        </div>
    );
};

const News = () => {
    return (
        <div className="newsWrap">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <div className="updateInfo">
                최종 갱신 : 2024년 12월 12일 00시 00분
            </div>
        </div>
    );
};

const NewsItem = ({
    title = "뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목뉴스 제목",
    publisher = "출판사",
    created = "1시간전",
}) => {
    const [timeGap, setTimeGap] = useState("");
    return (
        <div className="newsItem">
            <div className="newsTitle">{title}</div>
            <div className="newsInfo">{publisher + " · " + timeGap}</div>
        </div>
    );
};

export default HomePage;
