import { useEffect } from "react";
import "../../styles/resInfoModal2.css"


const ResInfoModal2 = ({act2, setAct2}) => {

  useEffect(() => {
    if (act2) {
      document.body.style.overflow = 'hidden'; // 팝업이 활성화되면 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'auto'; // 팝업이 비활성화되면 스크롤을 허용합니다.
    }

    // 컴포넌트가 언마운트될 때 스크롤을 다시 활성화하도록 정리합니다.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [act2]); 

  const handleClose = () => {
    setAct2(false);
  }

  return (
    <div className="resInfoModal2Div" style={act2 ? { display: "flex" } : { display: "none" }} onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><button onClick={handleClose} style={{ border: "none", backgroundColor: "transparent", fontSize: "25px", width: "30px", height: "30px" }}>&times;</button></div>
        <div>
          <h1 className="modalName">개인정보 제공 동의 (필수)</h1>
          <hr style={{color:"black"}}/>
          <div className="scrollable-div">

            <h3>1. 개인 정보를 제공받는자</h3>
            <p>&nbsp;· 여간행장 / (주) 여간행장<br/><br/></p>
            <br/>
            <h3>2. 제공하는 개인정보 항목</h3>
            <p>   · 예약자 정보 (이름, 이메일, 휴대폰번호, 영문이름(일부 상품)), 여행자 정보(이름, 영문이름(일부 상품)), 추가 예약 정보 (성별(일부 상품), 생년월일(일부 상품), 카카오톡ID(일부 상품))<br/><br/></p>
            <br/>
            <h3>3. 개인정보를 제공받는 자의 이용 목적</h3>
            <p>   · 판매자와 구매자 거래, 상품배송, 고객관리(고객상담/불만처리)</p>
            <br/><br/>
            <h3>4. 보유 및 이용기간</h3>
            <p>   · 여행 완료 후 15일까지</p>
          </div>
        </div>
      </div>
    </div>
  )
 }
export default ResInfoModal2;