import { useEffect } from "react";
import "../../styles/resInfoModal1.css"

const ResInfoModal1 = ({act1, setAct1}) => {

  useEffect(() => {
    if (act1) {
      document.body.style.overflow = 'hidden'; // 팝업이 활성화되면 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'auto'; // 팝업이 비활성화되면 스크롤을 허용합니다.
    }

    // 컴포넌트가 언마운트될 때 스크롤을 다시 활성화하도록 정리합니다.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [act1]); 

  const handleClose = () => {
    setAct1(false);
  }

  return (
    <div className="resInfoModal1Div" style={act1 ? { display: "flex" } : { display: "none" }} onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={handleClose} style={{ border: "none", backgroundColor: "transparent", fontSize: "25px", width: "30px", height: "30px" }}>&times;</button></div>
        <div>
          <h1 className="modalName">개인정보 수집 및 이용 동의 (필수)</h1>
          <hr style={{color:"black"}}/>
          <div className="scrollable-div">

            <h3>1. 개인정보 수집 및 이용목적</h3>
            <p>   · 상품 제공 계약의 성립, 계약 관련 동의 또는 철회 본인 의사 확인, 대금환불, 상품배송, 고객상담<br/><br/></p>
            <br/>
            <h3>2. 개인정보 수집 항목</h3>
            <p>   · 예약자 정보 : 이름, 이메일, 휴대폰번호, 영문이름(일부 상품)</p>
            <p>   · 여행자 정보 : 이름, 영문이름(일부 상품)</p>
            <p>   · 추가 예약 정보 :성별(일부 상품), 생년월일(일부 상품), 카카오톡ID(일부 상품)<br/><br/></p>
            <br/>
            <h3>3. 보유 및 이용기간</h3>
            <p>   · 회원 탈퇴시 까지(단, 관계 법령에 따름)</p>
          </div>
        </div>
      </div>
    </div>
  )
 }
export default ResInfoModal1;