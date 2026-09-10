import { useState } from "react"

export default function EventChoose({menu1, menu2, item1, item2}) {
  const [ act, setAct ] = useState(true);

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
    <div className="eventAct">
      <div style={act ? activeStyle : disableStyle} onClick={() => handleToggle(true)}><h2>{menu1}</h2></div>
      <div style={!act ? activeStyle : disableStyle} onClick={() => handleToggle(false)}><h2>{menu2}</h2></div>
    </div>

    <div className="chooseContainer">
      { act ? item1.map((item, index) => (

        <div class="eventContainer">
            <table cellSpacing={0} cellPadding={0} border={0}>
                <thead>
                    <td><img src="https://img.79plus.co.kr/megahp/manager/upload/bbs/20240502205616_1731797486183_ieg260RZxd.png" alt=""/></td>
                </thead>
                <tbody>
                    <td class="eventDesc"><span>[이벤트] 여름을 부탁해 로 사진 바꿔야되는데 이거 아이고 귀찮아</span></td>
                </tbody>
            </table>
        </div>

        

      )) : item2.map((item, index) => (

        <div class="eventContainer">
          <table cellSpacing={0} cellPadding={0} border={0}>
              <thead>
                  <td><img src="https://img.79plus.co.kr/megahp/manager/upload/bbs/20240502205616_1731797486183_ieg260RZxd.png" alt=""/></td>
              </thead>
              <tbody>
                  <td class="eventDesc"><span>[이벤트] 코드 기워 만들기 이게 맞냐</span></td>
              </tbody>
          </table>
        </div>

      ))}
      
    </div>
    </>


  )
}