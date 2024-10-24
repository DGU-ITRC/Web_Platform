// 라이브러리
import { useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";
// 서비스
// 컴포넌트
// 아이콘
import { Server } from "lucide-react";
// 스타일
import "./style.css";

const data = [
    { name: "00:00", online: 2, offline: 4 },
    { name: "01:00", online: 3, offline: 3 },
    { name: "02:00", online: 1, offline: 5 },
    { name: "03:00", online: 4, offline: 2 },
    { name: "04:00", online: 5, offline: 1 },
    { name: "05:00", online: 2, offline: 4 },
    { name: "06:00", online: 3, offline: 3 },
    { name: "07:00", online: 1, offline: 5 },
    { name: "08:00", online: 4, offline: 2 },
    { name: "09:00", online: 5, offline: 1 },
    { name: "10:00", online: 2, offline: 4 },
    { name: "11:00", online: 3, offline: 3 },
    { name: "12:00", online: 1, offline: 5 },
    { name: "13:00", online: 4, offline: 2 },
    { name: "14:00", online: 5, offline: 1 },
    { name: "15:00", online: 2, offline: 4 },
    { name: "16:00", online: 3, offline: 3 },
    { name: "17:00", online: 3, offline: 3 },
    { name: "18:00", online: 4, offline: 2 },
    { name: "19:00", online: 5, offline: 1 },
    { name: "20:00", online: 4, offline: 2 },
    { name: "21:00", online: 4, offline: 2 },
    { name: "22:00", online: 5, offline: 1 },
    { name: "23:00", online: 6, offline: 0 },
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
                    <h3>실시간 서버 상태</h3>
                    <LineChart
                        width={1280}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line
                            type="monotone"
                            dataKey="online"
                            stroke="#0fa11b"
                        />
                        <Line
                            type="monotone"
                            dataKey="offline"
                            stroke="#db2121"
                        />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};
export default ServerPage;
