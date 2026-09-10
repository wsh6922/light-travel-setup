import { useLocation, useNavigate } from "react-router-dom"
import "../../styles/reservation.css"
import ResInfoModal from  "./ResInfoModal"
import ResInfoModal1 from "./ResInfoModal1"
import ResInfoModal2 from "./ResInfoModal2"
import ResInfoModal3 from "./ResInfoModal3"
import { useEffect, useState } from "react"
import axios from "axios"

function Reservation() {
    const [act, setAct] = useState(false);
    const [act1, setAct1] = useState(false);
    const [act2, setAct2] = useState(false);
    const [act3, setAct3] = useState(false);
    const { state } = useLocation();
    const [ data, setData ] = useState({})
    const nav = useNavigate()

    const hNum = state?.hNum
    const paNum = state?.paNum

    useEffect(() => {
        axios.post(`/detail/reservation-page?hNum=${hNum}&paNum=${paNum}`)
    .then(res => { setData(res.data); console.log("asd",res.data)})
    .catch(e => console.error(e))
    }, [hNum, paNum])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`/detail/reservation?paNum=${paNum}`).then(console.log).catch(e => console.error(e))
        nav("/")  
    } 

    return (
        <>
            <ResInfoModal act={act} setAct={setAct} />
            <ResInfoModal1 act1={act1} setAct1={setAct1} />
            <ResInfoModal2 act2={act2} setAct2={setAct2} />
            <ResInfoModal3 act3={act3} setAct3={setAct3} />
            <main>
                <form>
                    <h1>예약하기</h1>
                    <div className="resPage">
                        <div className="res-div">
                            <div>
                                <div className="res-name-div">
                                    <img className="res-img" src={data?.hurl} alt=""></img>
                                    <h3>{data.hname}</h3>
                                </div>
                                <div className="checkInOut">
                                    <p>체크인</p>
                                    <p style={{ paddingRight: "10px" }}>{"2024년 06월 10일 (월) 15시 00분"}</p>
                                </div>
                                <div className="checkInOut" style={{ marginTop: "0px" }}>
                                    <p>체크아웃</p>
                                    <p style={{ paddingRight: "10px" }}>{"2024년 06월 14일 (목) 12시 00분"}</p>
                                </div>
                                <hr style={{ borderColor: "white", marginBottom: "25px" }}></hr>
                            </div>
                            <div className="resInfo">
                                <div className="resInfoBox">
                                    <p style={{ width: "85%" }}>{data.rname}, {data.paFacility}</p>
                                    <p>{data.rcost?.toLocaleString()}원</p>
                                </div>
                                <div className="resInfoBox">
                                    <p>{"수수료"}</p>
                                    <p>{data.paCharge?.toLocaleString()}원</p>
                                </div>
                                {/* <div className="resInfoBox">
                                    <p>{"첫 주문 할인"}</p>
                                    <p>{"10,000원"}</p>
                                </div>
                                <div className="resInfoBoxEvent">
                                    <p>{"제로마진 할인"}</p>
                                    <p>{"10,000원"}</p>
                                </div> */}
                                <div className="resInfoTextSpaceBetween">
                                    <p>총 상품 금액</p>
                                    <h4>{(data.rcost + data.paCharge)?.toLocaleString()}원</h4>
                                </div>
                            </div>
                            <div className="res-user-info">
                                <h2>예약자</h2>
                                <hr />
                                <div className="res-user-info-div">
                                    <h3>주문 회원 정보</h3>
                                    <p>{data.uemail}</p>
                                    <p>{data.uname}</p>
                                    <p>{data.uphone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="payInfo">
                            <div className="payInfoBox">
                                <h2>결제 정보<hr /></h2>
                                <div className="payInfoSpaceBetween">
                                    <p>주문 금액</p>
                                    <p>{(data.rcost + data.paCharge)?.toLocaleString()}원</p>
                                </div>
                                <div className="payInfoTotalPrice">
                                    <div className="payInfoSpaceBetween">
                                        <p style={{ fontWeight: "700", fontSize: "16px" }}>총 결제 금액</p>
                                        <h5 style={{ fontSize: "24px", lineHeight: "29px", margin: "0" }}>{(data.rcost + data.paCharge)?.toLocaleString()}원</h5>
                                    </div>
                                </div>
                                <div className="payInfoSpaceBetween">
                                    <u onClick={() => setAct(true)} style={{ marginTop: "10px", marginBottom: "10px", color: "gray" }}>숙소에 대해 알아두실 사항<img src="https://dffoxz5he03rp.cloudfront.net/icons/ic_info_12x12_line_gray_500.svg" alt=""/></u>
                                </div>
                                <h2 style={{ marginTop: "50px" }}>약관 안내<hr /></h2>
                                <div className="payInfoClause">
                                    <div  onClick={() => setAct1(true)} className="payInfoClauseSpaceBetween">
                                        <span>개인정보 수집 및 이용 동의 (필수)</span>
                                        <img className="payInfoClauseSpaceBetweenImg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrowright_md_gray_300.svg" alt=""></img>
                                    </div>
                                    <div  onClick={() => setAct2(true)} className="payInfoClauseSpaceBetween">
                                        <span>개인정보 제공 동의 (필수)</span>
                                        <img className="payInfoClauseSpaceBetweenImg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrowright_md_gray_300.svg" alt=""></img>
                                    </div>
                                    <div onClick={() => setAct3(true)} className="payInfoClauseSpaceBetween" style={{ marginBottom: "0px" }}>
                                        <span>개인정보 국외 이전 동의 (필수)</span>
                                        <img className="payInfoClauseSpaceBetweenImg" src="https://dffoxz5he03rp.cloudfront.net/icons/ic_arrowright_md_gray_300.svg" alt=""></img>
                                    </div>
                                </div>
                                <p style={{ marginTop: "20px", marginBottom: "20px", color: "gray" }}>위 약관을 확인하였으며, 회원 본인은 약관 및 결제에 동의합니다.</p>
                                <div className="payInfoCancelRule">
                                    <div className="payInfoCancel">예약 취소 규정</div>
                                    <p>{"24.06.10 23시 59분"}까지 취소 : 전액 환불</p>
                                    <p>{"24.06.10 23시 59분"} 이후 취소 : 환불 불가</p>
                                </div>
                                <button className="payInfoButton" style={{ marginTop: "40px" }} onClick={handleSubmit}>{(data.rcost + data.paCharge)?.toLocaleString()}원 결제하기</button>
                            </div>
                        </div>
                    </div>
                </form>
            </main >
        </>
    )
}

export default Reservation;