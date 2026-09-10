import "../../styles/tests.css"

export default function ChatDum() {

  return (
    <div style={{margin: "0 auto", width: "50%", backgroundColor: "#bacee0", height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
        <h1 style={{margin: "0"}}>{"방이름"}</h1>
        <div className='room' style={{width: "auto", height: "500px", overflowY: "auto"}}>
          <div  style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}><h2 style={{backgroundColor: "#ffeb33", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{"내가 보낸 내용"}</h2></div> : 
          <div  style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px"}}><h3 style={{marginBottom: "0"}}>{"상대방"}</h3><h2 style={{marginTop: "5px", backgroundColor: "white", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{"상대방이 보낸 내용"}</h2></div>
        </div>
      </div>
      <div style={{display: "flex", backgroundColor: "white", flexWrap: "wrap", justifyContent: "flex-end"}}>
        <input type="text"  placeholder='메시지를 적어주세요' style={{width: "100%"}} />
        <button style={{border: "none", backgroundColor: "#ffeb33"}}>전송</button>
      </div>
    </div>
  );
}
