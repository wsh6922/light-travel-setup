import { useEffect, useState } from "react";
import "../../styles/userJoin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function UserJoin() {
    const [ popup, setPopup ] = useState(null);
    // const [ birth, setBirth ] = useState("");
    // const [ gender, setGender ] = useState("");
    // const [ phone, setPhone ] = useState("");
    const [ form, setForm ] = useState({
        birth: "",
        gender: "",
        phone: "",
        name: "",
        email: "",
        id: "",
        pw: "",
    });
    const nav = useNavigate();


    useEffect(() => {
        const handleMessage = (e) => {
            if (e.origin !== window.location.origin) 
                return;
            e.data?.birth && setForm(prev => ({ ...prev, birth: e.data.birth }))
            e.data?.gender && setForm(prev => ({ ...prev, gender: e.data.gender }))
            e.data?.phone && setForm(prev => ({ ...prev, phone: e.data.phone }))
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [])

    // const handleOpenPopUp = () => {
    //     if (!act) {
    //         setAct(true)
    //         window.open("/identify", "_blank", "width=500px, height=500px, resizable=no")
    //     }
    // }


    const openPopup = () => {
      // 이미 팝업이 열려있는지 확인
      if (popup && !popup.closed) {
        popup.focus(); // 팝업 창을 포커스
        return;
      }

      // 팝업 창 열기
      const newPopup = window.open(
        '/identify', // 여기에 팝업 창 URL 입력
        'popupWindow',
        'width=500,height=500'
      );

      // 팝업 창 참조 저장
      setPopup(newPopup);
    };

    useEffect(() => {
      // 팝업 창이 닫힐 때 참조를 null로 설정
      const checkPopupClosed = () => {
        if (popup && popup.closed) {
          setPopup(null);
        }
      };

      const interval = setInterval(checkPopupClosed, 1000);

      return () => clearInterval(interval);
    }, [popup]);

    useEffect(() => {
        console.log(form)
    }, [form])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
          ...prevState,
          [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault() 
        if (["birth", "gender", "phone"].some(key => form[key] === "")) {
            alert("본인인증을 해주세요")
            return
        } else if (Object.values(form).some(value => value === "")) {
            alert("빈칸 없이 입력해주세요")
            return
        } else if (document.getElementById('pw1').value !== document.getElementById('pw2').value) {
            alert("입력한 비밀번호가 달라요")
            return
        } else if (!document.getElementById('check').checked) {
            alert("약관에 동의해주세요")
            return
        }
        
        await axios.post('/login/join', form).then(res => console.log(res.data)).catch(e => console.error(e))
        nav("/", {replace: true})
    }

    return (
        <main>
            <div className="user-login-box" style={{ marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>

                <h1 style={{ marginBottom: "50px" }}>일반 회원가입</h1>

                <h2>본인 인증</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input type="button" className="user-check-btn" onClick={openPopup} value={"본인 인증 확인"} />
                </div>
                
                <h2>이름</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="user-basic-bar" type="text" placeholder="이름을 입력하세요" name="name" onChange={handleChange} />
                </div>

                <h2>이메일</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="user-basic-bar" type="text" placeholder="이메일을 입력하세요" name="email" onChange={handleChange} />
                </div>

                <h2>아이디</h2>
                <div style={{ display: "flex", justifyContent: "center", width: "364px", marginLeft: "68px" }}>
                    <input className="user-id-bar" type="text" style={{ marginRight: "20px" }} placeholder="아이디를 입력하세요" name="id" onChange={handleChange} />
                    <button className="user-check-btn" style={{ width: "80px" }}>중복 확인</button>
                </div>

                <h2>비밀번호</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="user-basic-bar" id="pw1" type="password" placeholder="비밀번호를 입력하세요" />
                </div>

                <h2>비밀번호 확인</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <input className="user-basic-bar" id="pw2" type="password" placeholder="비밀번호를 다시 입력하세요" name="pw" onChange={handleChange} />
                </div>

                <h2>개인정보 수집 및 이용 동의서</h2>
                <div className="user-info-box">
                    <p>개인정보 수집 ∙ 이용에 대한 동의</p><hr /><p>
                        <br />
                        수집하는 개인정보 항목<br /><br />

                        -  개인식별정보 : 성명, 생년월일, 주소, 전화번호, 휴대전화번호, 이메일<br /><br />

                        -  자격사항, 경력사항, 기타 위촉을 위해 본인이 작성한 관련 정보 등<br /><br />

                        개인정보의 수집 및 이용목적<br /><br />

                        제공하신 정보는 위촉절차의 집행 및 관리, 경력‧자격 등 확인(조회 및 검증), 위촉 여부의 결정, 민원처리에 사용 됩니다.<br /><br />

                        ① 본인 확인 및 범죄경력 조회에 이용: 성명, 생년월일<br /><br />

                        ② 지원자와의 의사소통 및 정보 전달 등에 이용: 성명, 주소, 전화번호, 휴대전화번호, 이메일<br /><br />

                        ③ 지원자 평가에 이용: 자격사항, 경력사항 등<br /><br />

                        ④ 단, 지원자의 기본적 인권 침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 정치적 성향 및 범죄기록 등)는 수집하지 않습니다.<br /><br />

                        개인정보의 보유 및 이용기간<br /><br />

                        수집된 개인정보는 지원서 제출 후 위촉기간 만료 시 또는 지원서 삭제 요청 시까지 위 이용 목적을 위하여 보유‧이용됩니다. 또한 삭제 요청 시 지원자의 개인정보를 재생이 불가능한 방법으로 즉시 파기합니다.<br /><br />

                        ※ 귀하는 이에 대한 동의를 거부할 수 있으며, 다만, 동의가 없을 경우 위촉 전형 진행이 불가능할 수 있음을 알려드립니다. </p>
                </div>
                <p style={{ marginTop: "25px", textAlign: "center" }}>개인정보 수집 ∙ 이용에 대한 동의에 동의하십니까? <input type="checkbox" id="check" name="user-join-ok" value="yyy" /></p>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
                    <button className="user-check-btn">가입하기</button>
                </div>
                </form>
            </div>
        </main>
    );
}
