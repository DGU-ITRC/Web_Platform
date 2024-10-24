import { useState } from "react";

const SVG = ({ width, height, viewBox, children }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
};

const adaptTheme = ({ color }) => {
    const element = document.querySelector("body");
    if (element.classList.contains("dark")) {
        if (color === "white") {
            return "black";
        } else {
            return "white";
        }
    } else {
        return color;
    }
};

const Logo = ({ color = "white" }) => {
    return (
        <>
            <SVG width="162" height="28" viewBox="0 0 162 28">
                <g clip-path="url(#clip0_6_54)">
                    <path
                        d="M10.3302 15.598V19.4632L4.85601 22.0172C4.50385 22.1816 4.18299 22.2677 3.87387 22.2677C3.41607 22.2677 2.9876 22.0779 2.52979 21.6806L0.358134 19.7587C-0.220976 19.2479 -0.0840242 18.6491 0.659427 18.4318L7.46005 16.4375H7.46201L7.62439 16.3906L7.78482 16.3436L7.9472 16.2966L8.10763 16.2497L10.3302 15.598Z"
                        fill={color}
                    />
                    <path
                        d="M10.3301 13.3258V15.2927L10.2459 15.3161L7.86688 16.0148L7.70254 16.0618L7.54407 16.1088H7.54211L1.95253 10.6779C1.22082 9.96156 1.13278 9.1024 1.35973 8.36653L2.27143 5.43287C2.40643 5.00426 2.64511 4.78311 2.91706 4.78311C3.1264 4.78311 3.35726 4.91424 3.57834 5.17844L10.3301 13.3258Z"
                        fill={color}
                    />
                    <path
                        d="M19.1792 25.4029L18.0366 27.4559C17.8312 27.8239 17.5651 28 17.2951 28C17.0369 28 16.7747 27.8376 16.5595 27.5264L11.2379 19.8155L11.1225 19.6472V19.6452L11.0051 19.4769H12.854C13.5916 19.4769 14.247 19.2636 14.783 18.8898C14.8241 18.8643 14.8652 18.835 14.9043 18.8037C14.9435 18.7743 14.9826 18.743 15.0198 18.7117L16.2249 20.0738V20.0758L16.3795 20.2499L16.536 20.4261L16.6906 20.6003L16.6925 20.6022L16.8451 20.7764H16.8471L18.9307 23.1288C19.5568 23.8079 19.6781 24.4792 19.1792 25.4029Z"
                        fill={color}
                    />
                    <path
                        d="M29.5717 18.4553L27.4451 21.0621C26.954 21.663 26.4316 21.9546 25.7136 21.9546C25.5434 21.9546 25.3615 21.9389 25.1678 21.9056L16.9996 20.5063L16.755 20.2304L16.6865 20.154L15.2388 18.5179L15.2349 18.5121C15.5635 18.1852 15.8238 17.786 16.0037 17.3358L16.2307 17.2497L16.8959 16.9973L29.0474 17.3319C29.8241 17.3515 30.0589 17.8584 29.5717 18.4553Z"
                        fill={color}
                    />
                    <path
                        d="M16.1465 16.829H16.166C16.168 16.8231 16.17 16.8153 16.17 16.8094L16.1465 16.829Z"
                        fill={color}
                    />
                    <path
                        d="M27.3531 12.7054L16.8469 16.7018L16.4987 16.8388H16.4889L16.127 16.9757C16.1406 16.9268 16.1543 16.8779 16.1661 16.829C16.168 16.8231 16.17 16.8153 16.17 16.8094L16.3226 16.6881L16.438 16.5941L24.7079 9.92829L24.8782 9.79129L24.9505 9.73258L27.5194 11.4333C28.1709 11.8697 28.0887 12.4275 27.3531 12.7054Z"
                        fill={color}
                    />
                    <path
                        d="M16.17 16.8094C16.17 16.8153 16.168 16.8231 16.166 16.829H16.1465L16.17 16.8094Z"
                        fill={color}
                    />
                    <path
                        d="M26.7819 7.87922L24.935 9.37052L24.8156 9.46641L24.8137 9.46837L24.6943 9.56427L24.4517 9.75998L16.2542 16.3651C16.264 16.2966 16.2699 16.2281 16.2757 16.1596C16.2816 16.0931 16.2855 16.0285 16.2875 15.962V15.96C16.2894 15.9013 16.2914 15.8426 16.2914 15.7819C16.2914 14.9893 16.0879 14.2652 15.724 13.6722C15.6986 13.6311 15.6712 13.59 15.6458 13.5508V13.5489C15.6164 13.5078 15.589 13.4687 15.5597 13.4295C15.5303 13.3904 15.501 13.3512 15.4677 13.3121C15.4384 13.2729 15.4051 13.2338 15.3699 13.1966C15.321 13.1379 15.2682 13.0831 15.2134 13.0303L15.2545 12.9207L15.4951 12.2709L25.3654 1.79073C25.5806 1.56371 25.8056 1.45216 26.0091 1.45216C26.3045 1.45216 26.5549 1.68505 26.6645 2.12539L27.539 5.64227C27.7699 6.61886 27.5781 7.23925 26.7819 7.87922Z"
                        fill={color}
                    />
                    <path
                        d="M14.0942 5.66967L13.654 12.177C13.6071 12.1652 13.5582 12.1554 13.5092 12.1476C13.4623 12.1378 13.4134 12.13 13.3625 12.1241C13.1982 12.0987 13.028 12.087 12.8538 12.087H10.33L9.432 3.07458C9.37722 2.52464 9.61982 2.19585 10.0189 2.19585C10.1715 2.19585 10.3457 2.24478 10.5354 2.34654L12.9947 3.69106L13.1297 3.76543H13.1316L13.2666 3.8398C13.3136 3.86524 13.3586 3.8946 13.3997 3.922C13.4466 3.95331 13.4897 3.98658 13.5308 4.02181C13.9847 4.40344 14.1373 4.97491 14.0942 5.66967Z"
                        fill={color}
                    />
                    <path
                        d="M17.972 4.73027L15.2389 12.1143L15.1097 12.4647L14.9786 12.8189C14.9395 12.7876 14.9023 12.7582 14.8613 12.7289C14.8221 12.6995 14.781 12.6702 14.74 12.6447C14.4974 12.4823 14.2293 12.3512 13.9437 12.2592L13.9476 12.1965L14.3878 5.68924C14.4426 4.77724 14.1765 4.10988 13.5915 3.69889L13.5935 3.68519L13.4272 3.59516C13.4213 3.58929 13.4154 3.58733 13.4096 3.58342H13.4076L13.3235 3.53645L13.8576 0.710421C13.9437 0.24855 14.1961 0 14.5071 0C14.7028 0 14.9219 0.0978542 15.1391 0.301391L17.434 2.4581C18.1344 3.11763 18.3046 3.83001 17.972 4.73027Z"
                        fill={color}
                    />
                    <path
                        d="M13.4076 3.58342L13.3235 3.53841V3.53645L13.4076 3.58342Z"
                        fill={color}
                    />
                    <path
                        d="M13.5933 3.68519L13.5913 3.69889C13.5405 3.6617 13.4857 3.62648 13.427 3.59516L13.5933 3.68519Z"
                        fill={color}
                    />
                    <path
                        d="M13.427 3.59516C13.4857 3.62648 13.5405 3.6617 13.5913 3.69889L13.5933 3.68519L13.427 3.59516Z"
                        fill={color}
                    />
                    <path
                        d="M13.3235 3.53645V3.53841L13.4076 3.58342L13.3235 3.53645Z"
                        fill={color}
                    />
                </g>
                <path
                    d="M42.4434 23H39.3965V6.03125H42.4434V23ZM44.4574 6.03125H57.9809V8.58594H52.7543V23H49.7074V8.58594H44.4574V6.03125ZM59.9715 6.03125H66.3465C67.6199 6.03125 68.702 6.25781 69.5926 6.71094C70.491 7.15625 71.1707 7.78516 71.6316 8.59766C72.0926 9.41016 72.323 10.3594 72.323 11.4453C72.323 12.6016 72.0613 13.5938 71.5379 14.4219C71.0223 15.25 70.2645 15.8672 69.2645 16.2734L72.9324 23H69.534L66.2059 16.7891H63.0184V23H59.9715V6.03125ZM65.8777 14.2344C68.0965 14.2344 69.2059 13.3047 69.2059 11.4453C69.2059 10.5234 68.9324 9.81641 68.3855 9.32422C67.8387 8.83203 67.0027 8.58594 65.8777 8.58594H63.0184V14.2344H65.8777ZM85.9855 11.75C85.8684 11.0859 85.6223 10.5117 85.2473 10.0273C84.8723 9.54297 84.3957 9.17578 83.8176 8.92578C83.2473 8.66797 82.6184 8.53906 81.9309 8.53906C80.9934 8.53906 80.1691 8.77344 79.4582 9.24219C78.7473 9.70312 78.1926 10.3828 77.7941 11.2812C77.3957 12.1797 77.1965 13.2578 77.1965 14.5156C77.1965 15.7812 77.3957 16.8633 77.7941 17.7617C78.1926 18.6602 78.7473 19.3398 79.4582 19.8008C80.177 20.2617 81.0012 20.4922 81.9309 20.4922C82.6027 20.4922 83.2199 20.3711 83.7824 20.1289C84.3527 19.8789 84.8293 19.5195 85.2121 19.0508C85.5949 18.582 85.8527 18.0234 85.9855 17.375H89.0559C88.8996 18.4688 88.5051 19.4609 87.8723 20.3516C87.2473 21.2422 86.4191 21.9453 85.3879 22.4609C84.3566 22.9766 83.1887 23.2344 81.884 23.2344C80.3918 23.2344 79.0559 22.8867 77.8762 22.1914C76.7043 21.4883 75.7863 20.4805 75.1223 19.168C74.4582 17.8477 74.1262 16.2969 74.1262 14.5156C74.1262 12.7266 74.4582 11.1758 75.1223 9.86328C75.7941 8.55078 76.716 7.54687 77.8879 6.85156C79.0676 6.14844 80.3996 5.79688 81.884 5.79688C83.134 5.79688 84.2707 6.03516 85.2941 6.51172C86.3176 6.98047 87.1574 7.66406 87.8137 8.5625C88.4699 9.45312 88.884 10.5156 89.0559 11.75H85.9855ZM98.8512 15.7578H91.2105V13.2969H98.8512V15.7578ZM101.521 6.03125H104.568V13.8359H104.803L111.436 6.03125H115.162L108.6 13.6484L115.232 23H111.553L106.467 15.7109L104.568 17.9375V23H101.521V6.03125ZM125.848 10.6953C125.778 9.97656 125.454 9.41406 124.875 9.00781C124.305 8.60156 123.559 8.39844 122.637 8.39844C122.012 8.39844 121.465 8.49219 120.996 8.67969C120.528 8.86719 120.168 9.12891 119.918 9.46484C119.668 9.80078 119.543 10.1797 119.543 10.6016C119.543 11.25 119.813 11.7539 120.352 12.1133C120.891 12.4648 121.59 12.7422 122.45 12.9453L124.043 13.3672C125.504 13.7031 126.696 14.2617 127.618 15.043C128.547 15.8164 129.012 16.8828 129.012 18.2422C129.012 19.2344 128.758 20.1094 128.25 20.8672C127.743 21.625 127.004 22.2148 126.036 22.6367C125.075 23.0508 123.926 23.2578 122.59 23.2578C121.27 23.2578 120.125 23.0547 119.157 22.6484C118.188 22.2344 117.43 21.6367 116.883 20.8555C116.344 20.0664 116.051 19.1172 116.004 18.0078H119.004C119.075 18.8672 119.434 19.5234 120.082 19.9766C120.739 20.4297 121.567 20.6562 122.567 20.6562C123.231 20.6562 123.821 20.5547 124.336 20.3516C124.852 20.1484 125.25 19.8633 125.532 19.4961C125.821 19.1211 125.965 18.6953 125.965 18.2188C125.965 17.6016 125.707 17.1211 125.192 16.7773C124.684 16.4258 123.918 16.1172 122.895 15.8516L120.973 15.3594C117.957 14.5703 116.45 13.0469 116.45 10.7891C116.45 9.80469 116.719 8.9375 117.258 8.1875C117.797 7.42969 118.539 6.84375 119.485 6.42969C120.438 6.00781 121.504 5.79688 122.684 5.79688C123.871 5.79688 124.922 6.00781 125.836 6.42969C126.758 6.84375 127.473 7.42188 127.981 8.16406C128.496 8.90625 128.762 9.75 128.778 10.6953H125.848ZM131.143 6.03125H137.518C138.792 6.03125 139.874 6.25781 140.764 6.71094C141.663 7.15625 142.343 7.78516 142.804 8.59766C143.264 9.41016 143.495 10.3594 143.495 11.4453C143.495 12.6016 143.233 13.5938 142.71 14.4219C142.194 15.25 141.436 15.8672 140.436 16.2734L144.104 23H140.706L137.378 16.7891H134.19V23H131.143V6.03125ZM137.05 14.2344C139.268 14.2344 140.378 13.3047 140.378 11.4453C140.378 10.5234 140.104 9.81641 139.557 9.32422C139.011 8.83203 138.175 8.58594 137.05 8.58594H134.19V14.2344H137.05ZM157.157 11.75C157.04 11.0859 156.794 10.5117 156.419 10.0273C156.044 9.54297 155.568 9.17578 154.989 8.92578C154.419 8.66797 153.79 8.53906 153.103 8.53906C152.165 8.53906 151.341 8.77344 150.63 9.24219C149.919 9.70312 149.364 10.3828 148.966 11.2812C148.568 12.1797 148.368 13.2578 148.368 14.5156C148.368 15.7812 148.568 16.8633 148.966 17.7617C149.364 18.6602 149.919 19.3398 150.63 19.8008C151.349 20.2617 152.173 20.4922 153.103 20.4922C153.775 20.4922 154.392 20.3711 154.954 20.1289C155.525 19.8789 156.001 19.5195 156.384 19.0508C156.767 18.582 157.025 18.0234 157.157 17.375H160.228C160.071 18.4688 159.677 19.4609 159.044 20.3516C158.419 21.2422 157.591 21.9453 156.56 22.4609C155.529 22.9766 154.361 23.2344 153.056 23.2344C151.564 23.2344 150.228 22.8867 149.048 22.1914C147.876 21.4883 146.958 20.4805 146.294 19.168C145.63 17.8477 145.298 16.2969 145.298 14.5156C145.298 12.7266 145.63 11.1758 146.294 9.86328C146.966 8.55078 147.888 7.54687 149.06 6.85156C150.239 6.14844 151.571 5.79688 153.056 5.79688C154.306 5.79688 155.443 6.03516 156.466 6.51172C157.489 6.98047 158.329 7.66406 158.986 8.5625C159.642 9.45312 160.056 10.5156 160.228 11.75H157.157Z"
                    fill={color}
                />
                <defs>
                    <clipPath id="clip0_6_54">
                        <rect width="29.8261" height="28" fill={color} />
                    </clipPath>
                </defs>
            </SVG>
        </>
    );
};

const Arrow = ({ color = "white" }) => {
    return (
        <div className="iconWrap arrow">
            <SVG width="18" height="16" viewBox="0 0 18 16">
                <path
                    d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM17.7071 8.70711C18.0976 8.31658 18.0976 7.68342 17.7071 7.29289L11.3431 0.928932C10.9526 0.538408 10.3195 0.538408 9.92893 0.928932C9.53841 1.31946 9.53841 1.95262 9.92893 2.34315L15.5858 8L9.92893 13.6569C9.53841 14.0474 9.53841 14.6805 9.92893 15.0711C10.3195 15.4616 10.9526 15.4616 11.3431 15.0711L17.7071 8.70711ZM1 9H17V7H1V9Z"
                    fill={color}
                />
            </SVG>
        </div>
    );
};

const Plus = ({ color = "white" }) => {
    return (
        <div className="iconWrap plus">
            <SVG width="16" height="16" viewBox="0 0 16 16">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C7.44772 0 7 0.447715 7 1V7H1C0.447715 7 0 7.44771 0 8C0 8.55228 0.447715 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55229 16 8C16 7.44772 15.5523 7 15 7H9V1C9 0.447715 8.55229 0 8 0Z"
                    fill={color}
                />
            </SVG>
        </div>
    );
};
const Send = ({ color = "white" }) => {
    return (
        <div className="iconWrap send">
            <SVG width="17" height="16" viewBox="0 0 17 16">
                <path
                    d="M2.91096 8L15.411 8"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M2.91096 8L1.41096 14.5"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M2.91096 8L1.41096 1.5"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M1.41096 1.5L15.411 8"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                />
                <path
                    d="M1.41096 14.5L15.4111 7.99995"
                    stroke={color}
                    stroke-width="2"
                    stroke-linecap="round"
                />
            </SVG>
        </div>
    );
};

const DguLogo = ({ color = "white" }) => {
    return (
        <SVG width="79" height="74" viewBox="0 0 79 74">
            <g clip-path="url(#clip0_20_97)">
                <path
                    d="M27.3611 41.2231V51.4384L12.8618 58.1883C11.929 58.6227 11.0792 58.8503 10.2604 58.8503C9.04783 58.8503 7.91297 58.3486 6.70038 57.2986L0.948327 52.2194C-0.585553 50.8695 -0.222811 49.2868 1.74636 48.7126L19.7591 43.4421H19.7643L20.1944 43.3179L20.6193 43.1938L21.0494 43.0697L21.4743 42.9455L27.3611 41.2231Z"
                    fill={color}
                />
                <path
                    d="M27.3611 35.2182V40.4163L27.1383 40.4784L20.837 42.3249L20.4017 42.449L19.9819 42.5732H19.9767L5.17169 28.2201C3.23361 26.327 3.00042 24.0564 3.60153 22.1116L6.01636 14.3583C6.37392 13.2256 7.00612 12.6411 7.72643 12.6411C8.2809 12.6411 8.89238 12.9877 9.47795 13.6859L27.3611 35.2182Z"
                    fill={color}
                />
                <path
                    d="M50.7994 67.1363L47.7731 72.5621C47.229 73.5345 46.5243 74 45.8091 74C45.1251 74 44.4307 73.5707 43.8607 72.7483L29.7656 52.3694L29.4598 51.9246V51.9195L29.1489 51.4746H34.0459C35.9996 51.4746 37.7355 50.9109 39.1554 49.9229C39.2642 49.8557 39.3731 49.7781 39.4767 49.6954C39.5803 49.6178 39.684 49.535 39.7824 49.4523L42.9746 53.0522V53.0574L43.384 53.5177L43.7985 53.9832L44.2079 54.4435L44.2131 54.4487L44.6173 54.909H44.6225L50.1413 61.1261C51.7996 62.9209 52.1208 64.695 50.7994 67.1363Z"
                    fill={color}
                />
                <path
                    d="M78.3263 48.7747L72.6934 55.6642C71.3928 57.2521 70.0092 58.0228 68.1073 58.0228C67.6565 58.0228 67.1746 57.9814 66.6616 57.8935L45.0266 54.1953L44.3789 53.466L44.1975 53.2643L40.3628 48.9403L40.3524 48.9247C41.223 48.061 41.9122 47.0058 42.389 45.8162L42.9901 45.5886L44.752 44.9214L76.9375 45.8058C78.9948 45.8576 79.6166 47.1972 78.3263 48.7747Z"
                    fill={color}
                />
                <path
                    d="M42.7673 44.4765H42.8191C42.8243 44.461 42.8295 44.4403 42.8295 44.4248L42.7673 44.4765Z"
                    fill={color}
                />
                <path
                    d="M72.4499 33.5785L44.6224 44.1403L43.7 44.5024H43.6741L42.7155 44.8645C42.7517 44.7352 42.788 44.6058 42.8191 44.4765C42.8243 44.461 42.8295 44.4403 42.8295 44.4248L43.2337 44.1041L43.5394 43.8559L65.4438 26.239L65.8947 25.877L66.0864 25.7218L72.8904 30.2165C74.616 31.3699 74.3984 32.844 72.4499 33.5785Z"
                    fill={color}
                />
                <path
                    d="M42.8295 44.4248C42.8295 44.4403 42.8243 44.461 42.8191 44.4765H42.7673L42.8295 44.4248Z"
                    fill={color}
                />
                <path
                    d="M70.9368 20.8237L66.045 24.765L65.7289 25.0184L65.7237 25.0236L65.4076 25.277L64.765 25.7943L43.0523 43.2508C43.0782 43.0697 43.0938 42.8887 43.1093 42.7077C43.1249 42.5318 43.1352 42.3611 43.1404 42.1853V42.1801C43.1456 42.0249 43.1508 41.8698 43.1508 41.7094C43.1508 39.6146 42.6118 37.7009 41.648 36.1337C41.5806 36.0251 41.5081 35.9165 41.4407 35.813V35.8078C41.363 35.6992 41.2904 35.5958 41.2127 35.4923C41.135 35.3889 41.0572 35.2854 40.9691 35.182C40.8914 35.0785 40.8033 34.9751 40.71 34.8768C40.5805 34.7217 40.4406 34.5768 40.2955 34.4372L40.4043 34.1475L41.0417 32.4303L67.185 4.7327C67.755 4.13271 68.351 3.83789 68.8899 3.83789C69.6724 3.83789 70.3357 4.45339 70.6259 5.61716L72.9422 14.9118C73.5537 17.4927 73.0459 19.1324 70.9368 20.8237Z"
                    fill={color}
                />
                <path
                    d="M37.3313 14.9842L36.1654 32.182C36.041 32.151 35.9115 32.1251 35.7819 32.1045C35.6575 32.0786 35.528 32.0579 35.3933 32.0424C34.958 31.9751 34.5071 31.9441 34.0459 31.9441H27.3611L24.9826 8.1257C24.8375 6.67229 25.48 5.80334 26.5372 5.80334C26.9414 5.80334 27.4026 5.93265 27.9052 6.20161L34.419 9.75498L34.7766 9.95152H34.7818L35.1393 10.1481C35.2637 10.2153 35.3829 10.2929 35.4917 10.3653C35.6161 10.4481 35.7301 10.536 35.8389 10.6291C37.0411 11.6377 37.4453 13.148 37.3313 14.9842Z"
                    fill={color}
                />
                <path
                    d="M47.6021 12.5014L40.3628 32.0165L40.0208 32.9423L39.6736 33.8785C39.57 33.7958 39.4715 33.7182 39.3627 33.6406C39.259 33.563 39.1502 33.4854 39.0414 33.4182C38.3988 32.9889 37.6889 32.6423 36.9323 32.3992L36.9427 32.2337L38.1086 15.0359C38.2537 12.6256 37.549 10.8618 35.9996 9.77563L36.0047 9.73943L35.5643 9.5015C35.5487 9.48599 35.5332 9.48081 35.5176 9.47047H35.5124L35.2896 9.34633L36.7043 1.87754C36.9323 0.656881 37.6008 0 38.4247 0C38.9429 0 39.5233 0.258615 40.0985 0.796533L46.1771 6.4964C48.0322 8.23946 48.4831 10.1222 47.6021 12.5014Z"
                    fill={color}
                />
                <path
                    d="M35.5124 9.47045L35.2896 9.35149V9.34631L35.5124 9.47045Z"
                    fill={color}
                />
                <path
                    d="M36.0047 9.73939L35.9996 9.7756C35.8648 9.67732 35.7197 9.58422 35.5643 9.50146L36.0047 9.73939Z"
                    fill={color}
                />
                <path
                    d="M35.5643 9.50146C35.7197 9.58422 35.8648 9.67732 35.9996 9.7756L36.0047 9.73939L35.5643 9.50146Z"
                    fill={color}
                />
                <path
                    d="M35.2896 9.34631V9.35149L35.5124 9.47045L35.2896 9.34631Z"
                    fill={color}
                />
            </g>
            <defs>
                <clipPath id="clip0_20_97">
                    <rect width="79" height="74" fill="white" />
                </clipPath>
            </defs>
        </SVG>
    );
};

export { Arrow, Plus, Send, Logo, DguLogo };
