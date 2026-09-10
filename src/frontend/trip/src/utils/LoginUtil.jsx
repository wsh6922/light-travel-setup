import { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginUtil() {
  const [ data, setData ] = useState("");
  const [ form, setForm ] = useState({
    id: '',
    pw: ''
  });
  const nav = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`/login/login`,
    form, {
      withCredentials: true,
    })
    .then(res => {
      // console.log(res.data);
      setData(res.data);
    })
    .catch(e => console.error(e));
  }

  // console.log(data)
  useEffect(() => {
    if (data) {
      nav("/")
    } 
  }, [data, nav])

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div>
          <i className="fa-solid fa-user fa-xl"></i><input type="text" name="id" placeholder="아이디를 입력해주세요." className="search" onChange={handleChange}/>
        </div>
        <hr />
        <div>
          <i className="fa-solid fa-lock fa-xl"></i><input type="password" name="pw" placeholder="비밀번호를 입력해주세요." className="search" onChange={handleChange}/>
        </div>
      </div>
      <button>로그인</button>
    </form>
    {/* {data.id !== "null" ? <>반갑습니다. {data.name} </> : <>다시시도하십쇼</>} */}
    {/* {data ? data : ""} */}
    </>
  )
}