import axios from "axios";
import { useEffect, useState } from "react";

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [data, setData] = useState("");
    const [fileList, setFileList] = useState([]);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", file);

        axios
            .post("http://localhost:8080/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                setData(res.data);
                // 업로드가 완료된 후 파일 목록을 갱신
                fetchFileList();
            })
            .catch((e) => console.error(e));
    };

    const fetchFileList = () => {
        axios
            .get("http://localhost:8080/files")
            .then((res) => setFileList(res.data))
            .catch((e) => console.error(e));
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때 파일 목록을 가져옴
        fetchFileList();
    }, []);

    return (
        <>
            <input type="file" onChange={handleFileChange} accept="image/png, image/jpeg" />
            <button onClick={handleUpload}>업로드</button>
            <h1>{data}</h1>
            <ol>
                {fileList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ol>
        </>
    );
}

export default ImageUpload;