// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import RootLayout from "./layouts/rootLayout/layout";
import SubLayout from "./layouts/subLayout/layout";
import DemoLayout from "./layouts/demoLayout/layout";
// 페이지
import HomePage from "./pages/home/page";
import IntroductionPage from "./pages/introduction/page";
import StoryPage from "./pages/story/page";
import TechAndServicePage from "./pages/techandservice/page";
import NewsPage from "./pages/news/page";
import CommunicationPage from "./pages/communication/page";
import ServerPage from "./pages/server/page";
import AbnromalPage from "./pages/demo/abnormal/page";
import SelfharmPage from "./pages/demo/selfharm/page";
import FalldonwPage from "./pages/demo/falldown/page";
// 스타일
import "./index.css";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/introduction",
                element: <IntroductionPage />,
            },
            {
                path: "/story",
                element: <StoryPage />,
            },
            {
                path: "/techandservice",
                element: <TechAndServicePage />,
            },
            {
                path: "/news",
                element: <NewsPage />,
            },
            {
                path: "/communication",
                element: <CommunicationPage />,
            },
        ],
    },
    {
        element: <SubLayout />,
        children: [
            {
                path: "/server",
                element: <ServerPage />,
            },
        ],
    },
    {
        element: <DemoLayout />,
        children: [
            {
                path: "/demo/abnormal",
                element: <AbnromalPage />,
            },
            {
                path: "/demo/selfharm",
                element: <SelfharmPage />,
            },
            {
                path: "/demo/falldown",
                element: <FalldonwPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
