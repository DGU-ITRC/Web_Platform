// 라이브러리
import { useState } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
} from "recharts";
// 서비스
// 컴포넌트
// 아이콘
import { Server } from "lucide-react";
// 스타일
import "./style.css";

const data = [
    { time: "00:00", online: 2, offline: 4 },
    { time: "01:00", online: 3, offline: 3 },
    { time: "02:00", online: 1, offline: 5 },
    { time: "03:00", online: 4, offline: 2 },
    { time: "04:00", online: 5, offline: 1 },
    { time: "05:00", online: 2, offline: 4 },
    { time: "06:00", online: 3, offline: 3 },
    { time: "07:00", online: 1, offline: 5 },
    { time: "08:00", online: 4, offline: 2 },
    { time: "09:00", online: 5, offline: 1 },
    { time: "10:00", online: 2, offline: 4 },
    { time: "11:00", online: 3, offline: 3 },
    { time: "12:00", online: 1, offline: 5 },
    { time: "13:00", online: 4, offline: 2 },
    { time: "14:00", online: 5, offline: 1 },
    { time: "15:00", online: 2, offline: 4 },
    { time: "16:00", online: 3, offline: 3 },
    { time: "17:00", online: 3, offline: 3 },
    { time: "18:00", online: 4, offline: 2 },
    { time: "19:00", online: 5, offline: 1 },
    { time: "20:00", online: 4, offline: 2 },
    { time: "21:00", online: 4, offline: 2 },
    { time: "22:00", online: 5, offline: 1 },
    { time: "23:00", online: 6, offline: 0 },
];

const ServerPage = () => {
    const serverList = [
        {
            name: "이상행위 탐지 모델 API",
            id: "AbnormalApi",
        },
        {
            name: "질의응답 모델 API",
            id: "QnaApi",
        },
        {
            name: "딥러닝 기반 사진 검색 API",
            id: "DeepscanApi",
        },
        {
            name: "낙상 탐지 API",
            id: "FalldownApi",
        },
    ];
    const [selectedId, setSelectedId] = useState(serverList[0].id);
    const selectHandler = (e) => {
        setSelectedId(e.target.id);
    };
    return (
        <div id="ServerPage" className="page">
            <div className="article">
                <div className="section">
                    <h1>서버 상태</h1>
                    <span>서버 상태를 확인할 수 있는 페이지입니다.</span>
                </div>
                <div className="section">
                    <div className="tabWrap">
                        {serverList.map((server) => (
                            <div
                                id={server.id}
                                className={
                                    selectedId === server.id
                                        ? "tab active"
                                        : "tab"
                                }
                                onClick={selectHandler}
                            >
                                <Server size={16} />
                                {server.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section">
                    <div className="realtime">
                        <h3>실시간 서버 상태</h3>
                    </div>
                    <h3>통계</h3>
                    <div className="day">
                        <p>24시간</p>
                        <BarChart width={1280} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" />
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="online" stackId="a" fill="#ff7a00" />
                            <Bar
                                dataKey="offline"
                                stackId="a"
                                fill="#ff7b0066"
                            />
                        </BarChart>
                    </div>
                    <div className="week">
                        <p>일주일</p>
                        <BarChart width={1280} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" />
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="online" stackId="a" fill="#ff7a00" />
                            <Bar
                                dataKey="offline"
                                stackId="a"
                                fill="#ff7b0066"
                            />
                        </BarChart>
                    </div>
                    <div className="month">
                        <p>한달</p>
                        <BarChart width={1280} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <Tooltip />
                            <Legend align="right" verticalAlign="top" />
                            <ReferenceLine y={0} stroke="#000" />
                            <Bar dataKey="online" stackId="a" fill="#ff7a00" />
                            <Bar
                                dataKey="offline"
                                stackId="a"
                                fill="#ff7b0066"
                            />
                        </BarChart>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServerPage;
