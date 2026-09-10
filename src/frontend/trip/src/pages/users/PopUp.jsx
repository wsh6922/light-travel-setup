import { useEffect } from "react";
import "../../styles/popup.css"
import { useNavigate } from "react-router-dom";


const PopUp = ({act, setAct}) => { 
  const nav = useNavigate();

  useEffect(() => {
    if (act) {
      document.body.style.overflow = 'hidden'; // 팝업이 활성화되면 스크롤을 막습니다.
    } else {
      document.body.style.overflow = 'auto'; // 팝업이 비활성화되면 스크롤을 허용합니다.
    }

    // 컴포넌트가 언마운트될 때 스크롤을 다시 활성화하도록 정리합니다.
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [act]); 

  const handleClose = () => {
    setAct(false);
  }

  return (
    <div className="popup" style={act ? {display: "flex"} : {display : "none"}} onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <div style={{display: "flex", justifyContent: "flex-end"}}><button onClick={handleClose} style={{border: "none", backgroundColor: "transparent", fontSize: "25px", width: "30px", height: "30px"}}>&times;</button></div>
        <div>
          <h1>회원가입</h1>
          <button onClick={() => {nav("/user-join"); handleClose()}}>유저 회원가입</button>
          <button onClick={() => {nav("/native-join"); handleClose()}}>현지인 회원가입</button>
        </div>
      </div>
    </div>
  )
 }
export default PopUp;