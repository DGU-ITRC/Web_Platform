// 라이브러리
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 서비스
// 레이아웃
import RootLayout from "./layouts/rootLayout/layout";
// 페이지
import HomePage from "./pages/home/page";
import IntroductionPage from "./pages/introduction/page";
import StoryPage from "./pages/story/page";
import TechAndServicePage from "./pages/techandservice/page";
import NewsPage from "./pages/news/page";
import CommunicationPage from "./pages/communication/page";
// 스타일
import "./index.css";
import "./custom.css";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
