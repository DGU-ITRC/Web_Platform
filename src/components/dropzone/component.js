const DropZone = ({ onChangeFile, description = "파일 첨부" }) => {
    // 사용자가 파일을 드래드 중임을 상태로 관리 UI 변경을 위해 사용
    const [dragOver, setDragOver] = useState < boolean > false;

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
            onChangeFile(file);
        }
    };

    // Drag & Drop이 아닌 클릭 이벤트로 업로드되는 기능도 추가
    const handleChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        onChangeFile(file);

        // input 요소의 값 초기화
        e.target.value = "";
    };

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="w-3/4">
                <Label
                    className={`w-full flex-col gap-3 h-32 border-2 ${
                        dragOver
                            ? "border-blue-500 bg-blue-100 text-blue-500 font-semibold"
                            : "border-gray-300"
                    } rounded-md flex items-center justify-center cursor-pointer`}
                    htmlFor="fileUpload"
                    // Label에 드래그 앤 드랍 이벤트 추가
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {description}
                    <div className="w-9 h-9 pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                </Label>
                <Input
                    id="fileUpload"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                ></Input>
            </div>
        </div>
    );
};

export default DragDrop;
