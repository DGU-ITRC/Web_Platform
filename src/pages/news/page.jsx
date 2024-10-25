// 라이브러리
import { useState, useRef, useEffect } from "react";
// 서비스
import {
    getNewNews,
    getHotNews,
    updateViewCount,
} from "@/services/newsService";
// 컴포넌트
import Banner from "@/components/banner/component";
// 이미지
import BannerBg from "@/assets/images/newsLetterBanner.png";
import NewsPlaceholder from "@/assets/images/newsPlaceholder.png";
// 아이콘
import { LucideArrowLeft, LucideArrowRight, ArrowUpRight } from "lucide-react";
// 스타일
import "./style.css";
import { Plus } from "lucide-react";

const NewsPage = () => {
    const [hotNews, setHotNews] = useState([]);
    const [newNews, setNewNews] = useState([]);
    const [newsPage, setNewsPage] = useState(1);
    const loadMoreNews = () => {
        if (newNews[newNews.length - 1].id == 1) {
            window.alert("불러올 기사가 없습니다.");
        } else {
            getNewNews(newsPage + 1).then((res) => {
                setNewNews([...newNews, ...res]);
                setNewsPage(newsPage + 1);
            });
        }
    };
    const updateCount = (id, url) => {
        updateViewCount(id);
        window.open(url);
    };
    useEffect(() => {
        getHotNews().then((res) => {
            setHotNews(res);
        });
        getNewNews(1).then((res) => {
            setNewNews(res);
        });
    }, []);
    return (
        <div id="NewsPage" className="page">
            <div className="pageInfo">
                <div className="pageName">뉴스</div>
                <div className="pageSlogan">
                    <p>노인 복지 관련 새로운 소식과</p>
                    <p>인사이트를 만나보세요.</p>
                </div>
            </div>
            <div className="article hot">
                <NewsSlider
                    data={hotNews}
                    onClick={updateCount}
                    key={hotNews.length}
                />
            </div>
            <div className="article new">
                <h1>최신 기사</h1>
                <div className="newsGrid">
                    {newNews.map((news, index) => (
                        <NewsItem
                            data={news}
                            onClick={updateCount}
                            key={index}
                        />
                    ))}
                </div>
                <button className="btn iconBtn" onClick={loadMoreNews}>
                    <Plus size={20} />
                    더보기
                </button>
            </div>
            <Banner
                slogan="동국대 ITRC에서 제공하는 뉴스레터를 받아보세요."
                description="노인 복지 관련 최신 뉴스를 이메일로 전해드립니다."
                funcname="구독하기"
                background={BannerBg}
            />
        </div>
    );
};

const NewsItem = ({ data = {}, onClick = () => {} }) => {
    return (
        <div
            className="newsItem"
            onClick={() => {
                onClick(data.id, data.url);
            }}
        >
            <div className="imgWrap">
                {data.thumb ? (
                    <img src={data.thumb} alt="" />
                ) : (
                    <>
                        <img src={NewsPlaceholder} alt="" />
                        <h6>{data.title}</h6>
                    </>
                )}

                <div className="dimmed">
                    <span>새 창에서 기사 보기</span>
                    <ArrowUpRight size={20} />
                </div>
            </div>
            <div className="textWrap">
                <h3 className="title">{data.title}</h3>
                <p className="content">{data.content}</p>
                <span className="info">{data.timeGap}</span>
            </div>
        </div>
    );
};

const NewsSlider = ({ data = [], onClick = () => {} }) => {
    const sliderRef = useRef();
    const [curSlide, setCurSlide] = useState(0);
    const [maxSlide, setMaxSlide] = useState(data.length);
    const slideHandler = (method) => {
        if (method === "prev") {
            if (curSlide <= 0) {
                setCurSlide(maxSlide - 1);
            } else {
                setCurSlide(curSlide - 1);
            }
        } else if (method === "next") {
            if (curSlide >= maxSlide - 1) {
                setCurSlide(0);
            } else {
                setCurSlide(curSlide + 1);
            }
        }
    };
    useEffect(() => {
        const handleResize = () => {
            const slideWidth = sliderRef.current.clientWidth;
            sliderRef.current.style.transform = `translateX(-${
                curSlide * slideWidth
            }px)`;
        };

        window.addEventListener("resize", handleResize);

        const slideWidth = sliderRef.current.clientWidth;
        sliderRef.current.style.transform = `translateX(-${
            curSlide * slideWidth
        }px)`;
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [curSlide]);
    return (
        <div id="NewsSlider">
            <div className="newsSlider">
                <div className="newsSlideWrap" ref={sliderRef}>
                    {data.map((news, index) => (
                        <div
                            className="newsSlide"
                            key={index}
                            onClick={() => {
                                onClick(news.id, news.url);
                            }}
                        >
                            <div className="imgWrap">
                                <img
                                    src={
                                        news.thumb
                                            ? news.thumb
                                            : NewsPlaceholder
                                    }
                                    alt=""
                                />
                                <div className="dimmed">
                                    <span>새 창에서 기사 보기</span>
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <div className="textWrap">
                                <span className="badge">
                                    {news.count}회 조회됨
                                </span>
                                <h1>{news.title}</h1>
                                <p>{news.content}</p>
                                <span>{news.timeGap}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="slideController prev"
                onClick={() => {
                    slideHandler("prev");
                }}
            >
                <LucideArrowLeft size={24} />
            </button>
            <button
                className="slideController next"
                onClick={() => {
                    slideHandler("next");
                }}
            >
                <LucideArrowRight size={24} />
            </button>
        </div>
    );
};

export default NewsPage;
