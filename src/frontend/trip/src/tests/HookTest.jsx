import { useState } from "react";
import { useGetData, usePostData } from "../utils/useData"

export default function HookTest() {
  const data = useGetData("/api");
  // const [ form, setForm ] = useState({
  //   id: "",
  //   pw: "",
  // })
  // const [ trig, setTrig ] = useState(false)
  const user = usePostData("/login/login", {id: "bc2652", pw: "2652"})?.user
  // const postData = useTrigPostData("/login/login", form, trig)?.user;

  // const handleTrig = (e) => {
  //   e.preventDefault()
  //   setTrig(false)
  //   console.log(postData)
  // }

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setForm(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }))
  // }

  return (
    <>
      {data !== null || Array.isArray(data) ? data.map((item, index) => (
        <h1 key={index}>{item.title}</h1>
      )) : <h1>ERROR</h1>}
      <p>{user !== null ? user : ""}</p>
      {/* <form onSubmit={handleTrig}>
        <input type="text" name="id" onChange={handleChange} />
        <input type="password" name="pw" onChange={handleChange} />
        <button>제출</button>
      </form>
      <p>{postData}</p> */}
    </>
  );
}
