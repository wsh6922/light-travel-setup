import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function EventCart({menu1, menu2, item1, item2, title1, title2, sub1, sub2}) {
  const [ act, setAct ] = useState(true);
  const nav = useNavigate();

  const activeStyle = {
    width: "50%",
    borderLeft: "#ccc solid 1px",
    borderTop: "#ccc solid 1px",
    borderRight: "#ccc solid 1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const disableStyle = {
    cursor: "pointer",
    color: "#AAAAAA",
    width: "50%",
    borderTop: "#ccc solid 1px",
    borderBottom: "#ccc solid 1px",
    borderRight: "#ccc solid 1px",
    borderLeft: "#ccc solid 1px",
    backgroundColor: "#f5f6f8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  const handleToggle = (newAct) => {
    if (act !== newAct)
      setAct(newAct)
  }

  return (
    <>
    <div className="event-cart">
      <div style={act ? activeStyle : disableStyle} onClick={() => handleToggle(true)}><h2>{menu1}</h2></div>
      <div style={!act ? activeStyle : disableStyle} onClick={() => handleToggle(false)}><h2>{menu2}</h2></div>
    </div>

    <div className="cart-container">

      { act ? item1.map((item, index) => (

        <div className="cart-object" key={index} onClick={() => nav(`/room/${item.hnum}`)}>
        <div style={{backgroundImage: `url('http://localhost:8080/${encodeURIComponent(item?.paPicUrl).replace(".%5Cuploads%5C", "uploads/")}')`}}>
          {/* <div>{index + 1}</div> */}
          <i className="fa-solid fa-bookmark" style={index === 0 ? {color: "gold"} : index === 1 ? {color: "silver"} : index === 2 ? {color: "#CD7F32"} : {}}><span style={{position: "absolute", left: "6px", top: "3px", color: "white", fontSize: "17px"}}>{index + 1}</span></i>
          <div><span>{item.rname}</span></div>
        </div>

        <div>
          <div>
            <h3 style={{marginTop: "0"}}>{item.hname}</h3>
            {/* <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div> */}
          </div>
          <div><h3>{item.paPrice?.toLocaleString()}원~</h3></div>
        </div>
      </div>

)) : item2.map((item, index) => (

  <div className="cart-object" key={index} onClick={() => nav(`/room/${item.hnum}`)}>
        <div style={{backgroundImage: `url('http://localhost:8080/${encodeURIComponent(item?.paPicUrl).replace(".%5Cuploads%5C", "uploads/")}')`}}>
          {/* <div>{index + 1}</div> */}
          <i className="fa-solid fa-bookmark" style={index === 0 ? {color: "gold"} : index === 1 ? {color: "silver"} : index === 2 ? {color: "#CD7F32"} : {}}><span style={{position: "absolute", left: "6px", top: "3px", color: "white", fontSize: "17px"}}>{index + 1}</span></i>
          <div><span>{item.rname}</span></div>
        </div>

        <div>
          <div>
            <h3 style={{marginTop: "0"}}>{item.hname}</h3>
            {/* <div><span>#우리집</span>&nbsp;<span>#집이_최고지</span></div> */}
          </div>
          <div><h3>{item.paPrice?.toLocaleString()}원~</h3></div>
        </div>
      </div>

))}
      
    </div>
</>
  )
}