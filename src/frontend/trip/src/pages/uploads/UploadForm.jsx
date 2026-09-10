import { useEffect, useState } from "react";
import "../../styles/uploadForm.css"
import ReactQuill, { } from 'react-quill';
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UploadForm() {
    const [ content, setContent ] = useState('')
    const [ form, setForm ] = useState({
        rnum: "",
        content: "",
        facility: "",
        charge: 0.0,
    })
    const [ file, setFile ] = useState([])
    const [ data, setData ] = useState([])
    const [ roomData, setRoomData ] = useState([])
    const nav = useNavigate()
    // const [ charge, setCharge ] = useState(0.0);

    const { state } = useLocation()
    const selected = state?.selected

    useEffect(() => {console.log(form)}, [form])
    useEffect(() => {console.log("파일",file)}, [file])

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            rnum: roomData.rnum
        }))
    }, [roomData])

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            content: content
        }))
    }, [content])


    useEffect(() => {
        axios.post(`/native/select-room?hNum=${selected.hnum}`)
        .then(res =>{ setData(res.data); console.log(res.data)})
        .catch(e => console.error(e))
    }, [selected])

    const handleChange = (value) => {
        setContent(value)
    }

    const handleFileChange = (e) => {
        const selected = Array.from(e.target.files)
        setFile(selected)
    }

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
          ...prevState,
          [name]: value,
        }))
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        file.forEach(f => formData.append("files[]", f));
        // for (let i = 0; i < file.length; i++) {
        //     formData.append("files[]", file[i])
        //     console.log(file[i])
        // }
        for (let value of formData.values()) {
            console.log("폼",value);
        }
        let res = ""
        console.log("asd", res)

        try {
            res = await axios.post(`/native/insert-room?rNum=${roomData.rnum}`, form)
            console.log("asfa",res.data)
        } catch (e) {
            console.error(e)
        }
        console.log("asd", res.data)

        
        // ?paNum=${res.data}

        await axios.post(`/native/upload-img?paNum=${res.data}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(console.log("성공")).catch(e => console.error(e))
        nav("/")
    }

    const handleSelectChange = (e) => {
        if (e.target.value === "") {
            console.log("asd",e.target.value)
          return setRoomData([])}
        setRoomData(data.find(room => room.rnum === parseInt(e.target.value)))
       
      }

    return (
        <main>
            <div className="FormContainer">

                <button className="FormBackButton">돌아가기</button>

                <div className="FormHeadContainer">
                    <div className="FormImgContainer">
                        <div className="FormTopImg">
                            <label htmlFor="image"><i className="fa-solid fa-arrow-up-from-bracket" style={{fontSize: "50px"}}></i></label>
                            <input type="file" name="image" id="image" style={{display: "none"}} accept="image/png, image/jpeg" onChange={handleFileChange} multiple />
                        </div>
                        <div className="FormBottomImg">
                            <div className ="FormInnerImg"></div>
                        </div>
                    </div>

                    <div className="FormTextContainer">
                        <div className="FormText">
                            {/* <p className="FormTextHead">아무도 안 갈 호텔</p> */}
                            <input type="text" name="" id="" value={selected.name} className="FormTextHead" onChange={(e) => console.log(e.target.value)} readOnly/>
                            {/* <input type="text" className="FormTextBody" onChange={(e) => console.log(e.target.value)} placeholder="객실 이름" /> */}
                            <select name="" id="" style={{fontSize: "20px"}} onChange={handleSelectChange}>
                                <option value={""}>방을 선택하세요</option>
                                {data.map((item, index) => (

                                <option value={item.rnum} key={index}>{item.rname}</option>
                                ))}
                            </select>
                        </div>

                        {roomData?.length !== 0 && <>
                        <div className="FormInput">
                            <div className="FormInputBox">
                                <p>수수료</p>
                                <input type="text" placeholder="수수료를 %로 적어주세요" onChange={handleFormChange} maxLength={3} name="charge"></input>
                            </div>
                            
                            <div className="FormInputBox">
                                <p>룸 옵션</p>
                                <input type="text" placeholder="룸 옵션들을 입력해주세요" name="facility" onChange={handleFormChange}></input>
                            </div>

                            {/* <div className="FormInputBox">
                                <p>다른거</p>
                                <input type="text"></input>
                            </div> */}
                        </div>

                         <div className="FormPrice">
                            <div className="FormPriceBox">
                                <p className="FormPriceTxt">수수료</p>
                                <p className="FormPriceNum">{((form.charge * 0.01) * roomData.rcost).toLocaleString()}</p>
                            </div>

                            <div className="FormPriceBox">
                                <p className="FormPriceTxt">기본 가격</p>
                                <p className="FormPriceNum">{roomData.rcost?.toLocaleString()}</p>
                            </div>
                        </div>

                        <div className="FormEndPrice">
                            <div className="FormPriceBox">
                                <p className="FormEndPriceTxt">최종 소비자 가격</p>
                                <p className="FormEndPriceNum">{(((form.charge * 0.01) * roomData.rcost) + roomData.rcost).toLocaleString()}</p>
                            </div>
                        </div></>}

                    </div>
                </div>

                {/* className="FormBodyContainer" */}
                <ReactQuill onChange={handleChange} value={content} />

                <button className="FormGoButton" onClick={handleSubmit}>등록하기</button>
            </div>
        </main>
    )
}

export default UploadForm