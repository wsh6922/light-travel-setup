import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Chat = () => {
  const [ data, setData ] = useState([])
  

  useEffect(() => {
    axios.post(`/chat-room`)
    .then(res => {setData(res.data); console.log(res.data)})
    .catch(e => console.error(e))
  }, [])

  return (
    <main>
      {data.map((item, index) => (
        <Link to={"/chat"} state={{uid: item?.uid}}>
          <p key={index}>{item?.uname} 채팅방</p>
        </Link>
      ))}
    </main>
  ) 
}