import "../../styles/userInfo.css"

export default function UserInfo() {
    return (
        <main>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
                <div className="user-image-box">
                    <div className="user-image-circle" />
                    <h2 className="user-image-name">유저 이름</h2>
                    <h5 className="user-profile-option">(유저 이미지)프로필 설정</h5>
                </div>
                <div className="user-info-box">
                    <div style={{width: "900px"}}>
                    <div style={{display: "flex", justifyContent: "flex-end", marginBottom: "10px"}}><button className="user-info-edit">편집</button></div>  
                        <div className="user-name-bar">
                            <div className="user-name">이름</div>
                            <div className="user-name-data">김승민</div>
                        </div>
                        <div className="user-mail-bar">
                            <div className="user-mail">메일</div>
                            <div className="user-mail-data">seungmin328@naver.com</div>
                        </div>
                        <div className="user-connect-bar">
                            <div className="user-connect">연동 설정</div>
                            <div className="user-connect-data">네이버</div>
                            <div className="user-connect-data">카카오</div>
                            <div className="user-connect-data">구글</div>
                        </div>
                        <div className="user-password-bar">
                            <div className="user-password">비밀번호</div>
                            <div className="user-mail-data" style={{ visibility: "hidden" }}>rlatmdals4!</div>
                            <button>비밀번호 변경</button>
                        </div>
                        <div className="user-sns-bar">
                            <div className="user-sns">연동 설정</div>
                            <div className="user-sns-data">문자</div>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="user-sns-bar">
                            <div className="user-sns" style={{ visibility: "hidden" }}>연동 설정</div>
                            <div className="user-sns-data">카카오톡</div>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                        </div>
                        <div className="user-sns-bar">
                            <div className="user-sns" style={{ visibility: "hidden" }}>연동 설정</div>
                            <div className="user-sns-data">이메일</div>
                            <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                </div>
                {/* <div className="user-info-box">
                    <div className="user-name-bar" style={{ display: "flex", justifyContent: "flex-start"}}>
                    <div className="user-name">이름
                    <div className="user-name-data">김승민</div>
                    </div>
                    </div>
                    <div className="user-mail-bar">
                    <div className="user-mail">메일
                    <div className="user-mail-data">seungmin328@naver.com</div>
                    </div>
                    </div>
                    <div className="user-connect-bar">
                        <div className="user-connect">연동 설정
                            <div className="user-connect-data">네이버</div>
                            <div className="user-connect-data">카카오</div>
                            <div className="user-connect-data">구글</div>
                        </div>
                    </div>
                    <div className="user-password-bar">
                        <div className="user-password">비밀번호
                            <div className="user-mail-data" style={{visibility: "hidden"}}>seungmin328@naver.com</div>
                            <button>비밀번호 변경</button>
                        </div>
                    </div>
                    <div className="user-sns-bar">
                        <div className="user-sns">연동 설정
                            <div className="user-sns-data">문자</div>
                            <div className="user-sns-data">카카오톡</div>
                            <div className="user-sns-data">이메일</div>
                        </div>
                    </div>
                    <button className="user-info-edit">편집</button>
                </div> */}
            </div>
        </main>
        // <main>
        //     <div className="city-menu" style={{width: "100%", height: "400px", display: "flex", alignItems: "flex-start", justifyContent: "center" ,flexDirection: "column", backgroundImage: "url('https://cdn.newspenguin.com/news/photo/202203/11014_32807_1237.png')",backgroundSize: "cover", paddingLeft: "45px", boxSizing: "border-box", backgroundBlendMode : "darken", backgroundColor: "rgb(0,0,0,0.3)"}}>
        //         <h1 style={{margin: 0, color: "white"}}>도시 이름</h1>
        //         <span style={{marginBottom: "25px", color: "white"}}>도시 설명</span>
        //         <button style={{fontSize: "20px"}}>숙소 보러가기</button>
        //     </div>
        //     <div style={{width: "100%", height: "400px", display: "flex", alignItems: "flex-start", justifyContent: "center" ,flexDirection: "column", backgroundImage: "url('https://cdn.newspenguin.com/news/photo/202203/11014_32807_1237.png')",backgroundSize: "cover", paddingLeft: "45px"}}>
        //         <h1 style={{margin: 0, color: "white"}}>도시 이름</h1>
        //         <span style={{marginBottom: "25px", color: "white"}}>도시 설명</span>
        //         <button style={{fontSize: "20px"}}>숙소 보러가기</button>
        //     </div>
        //     <div style={{width: "100%", height: "400px", display: "flex", alignItems: "flex-start", justifyContent: "center" ,flexDirection: "column", backgroundImage: "url('https://cdn.newspenguin.com/news/photo/202203/11014_32807_1237.png')",backgroundSize: "cover", paddingLeft: "45px"}}>
        //         <h1 style={{margin: 0, color: "white"}}>도시 이름</h1>
        //         <span style={{marginBottom: "25px", color: "white"}}>도시 설명</span>
        //         <button style={{fontSize: "20px"}}>숙소 보러가기</button>
        //     </div>
        // </main>
    );
}
