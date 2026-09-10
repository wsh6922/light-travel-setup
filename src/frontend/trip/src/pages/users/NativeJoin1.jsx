import { useEffect, useState } from "react";
import "../../styles/nativeJoin1.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function NativeJoin1() {
    const nav = useNavigate()
    const { state } = useLocation()
    // let pForm = state?.form
    const [ form, setForm ] = useState({
        ...state?.form,
        location: "",
        intro: "",
        account: "",
        accountNum: ""
    })
    const [ file, setFile ] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(form)
    }, [form])

    useEffect(() => {
        console.log(file)
    }, [file])
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("files[]", file)

        await axios.post(`/login/join`, form).then(res => console.log(res.data)).catch(e => console.error(e))
        await axios.post(`/login/upload-img`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).then(res => console.log(res.data)).catch(e => console.error(e))
        nav("/")
    }

    return (
        <main>
            <div className="native1-login-box" style={{ marginTop: "50px" }}>
                <h1 style={{ marginBottom: "50px" }}>현지인(파트너) 상세 정보 입력</h1>

                <h2>현지인 프로필 사진</h2>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                    <div className="native1-image-circle" />
                    {/* <button className="native1-check-btn">프로필 이미지 업로드</button> */}
                    <label htmlFor="profile" className="native1-check-btn" style={{textAlign: "center", lineHeight: "50px"}}>프로필 이미지 업로드</label>
                    <input type="file" id="profile" style={{display: "none"}} accept="image/png, image/jpeg" onChange={handleFileChange}/>
                </div>
                <h2>현지인 이름</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name placeholder="현지인 프로필로 사용될 이름을 적어주세요" value={form.name} readOnly/>
                </div>

                <h2>현지인 도시</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name="location" placeholder="거주 도시를 적어주세요. 해당 지역 상품을 등록 가능하게 합니다." onChange={handleChange}/>
                </div>

                <h2>간단 소개</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name="intro" placeholder="간단한 소개 문구를 적어주세요." onChange={handleChange}/>
                </div>
            
                <h2>정산 은행 선택</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <select className='bank_list' name="account" onChange={handleChange}>
                    <option value=''>-선택-</option>
                    <option value='SC제일은행'>SC제일은행</option>
                    <option value='경남은행'>경남은행</option>
                    <option value='광주은행'>광주은행</option>
                    <option value='국민은행'>국민은행</option>
                    <option value='기업은행'>기업은행</option>
                    <option value='농협중앙회'>농협중앙회</option>
                    <option value='농협회원조합'>농협회원조합</option>
                    <option value='대구은행'>대구은행</option>
                    <option value='부산은행'>부산은행</option>
                    <option value='산업은행'>산업은행</option>
                    <option value='새마을금고'>새마을금고</option>
                    <option value='수협중앙회'>수협중앙회</option>
                    <option value='신한은행'>신한은행</option>
                    <option value='신협중앙회'>신협중앙회</option>
                    <option value='하나은행'>하나은행</option>
                    <option value='우리은행'>우리은행</option>
                    <option value='우체국'>우체국</option>
                    <option value='전북은행'>전북은행</option>
                    <option value='제주은행'>제주은행</option>
                    <option value='한국씨티은행'>한국씨티은행</option>
                </select> 
                </div>

                <h2>정산 계좌 입력</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="native1-basic-bar" type="text" name="accountNum" placeholder='"-" 문자를 제외하고 숫자만 적어주세요' onChange={handleChange}/>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    {/* <Link to={"/login"}> */}
                    <button className="native1-check-btn" onClick={handleSubmit}>현지인 가입 완료</button>
                    {/* </Link> */}
                </div>
            </div>
        </main>
    );
}
