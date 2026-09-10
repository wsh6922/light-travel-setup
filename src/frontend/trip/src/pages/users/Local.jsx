import { useEffect, useState } from "react";
import "../../styles/localManage.css";
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom'; // BrowserRouter, Routes, Route,
import axios from "axios";

function SubMenu({ menu }) {
  return (
    <div className="nav-mng">
      <span>{menu.name}</span>
    </div>
  )
}

function Nav() {
  const menus = [
    { name: "숙소 폼 관리", path: "/local/manage" },
    { name: "정산", path: "/local/calc" },
    { name: "그 외 다른 기능들", path: "/local/etc" },
  ]
  return (
    <div className="nav">
      {menus.map((menu, index) => {
        return (
          <NavLink to={menu.path} key={index} className={({ isActive }) => isActive ? "gray" : ""}>
            <SubMenu
            menu={menu}
            />
          </NavLink>
        )
      })}
      <hr />
      <span>
        <div className="icon-cs"></div> 고객센터
      </span>
      <span>
        <div className="icon-acc"></div>계정 정보
      </span>
    </div>
  );
}

function LocalManage() {
  const nav = useNavigate()
  const [ data, setData ] = useState([])
  useEffect(() => {
    axios.post('/native/register-room')
    .then(res => {setData(res.data); console.log(res.data)})
    .catch(e => console.error(e))
  }, [])
  
  return (
    <div className="content">
      <h2>숙소 폼 관리</h2>
      <div className="hotel-list">
        <div className="add-hotel" onClick={() => nav("/upload")}>
          <div></div>
          <span>새 숙소 등록하기</span>
        </div>
        {data.map((item, index) => (
          <div className="hotel" key={index} style={{backgroundImage: `url('${item.hurl}')` }}>
            <div></div>
            <h4>{item.hname}</h4>
            {/* <h5>{"방이름"}</h5> */}
            <h5>{item.paDate}</h5>
            <h5>{item.rcost}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

const Empty = () => <div className="content">비어있음</div>

function Local() {
  return (
    <main>
      <Nav />
      <Routes>
        <Route path="/calc" element={<Empty />} />
        <Route path="/manage" element={<LocalManage />} />
        <Route path="/etc" element={<Empty />} />
      </Routes>
    </main>
  )
}

export default Local;