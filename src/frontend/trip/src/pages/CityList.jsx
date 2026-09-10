import axios from "axios"
import "../styles/sub4.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function CityList() {
  const [ data, setData ] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    axios.get("/search/getCity-all")
    .then(res => {setData(res.data); console.log(res.data)})
    .catch(e => console.error(e))
  }, [])
  
  return (
  <main>
    {data.map((item, index) => (
      <div className="city-menu" key={index} style={{backgroundImage: `url('${item.pic}')`, marginBottom: '20px'}}>
        <h1>{item.name}</h1>
        <span>{item.info}</span>
        <span>
          <button onClick={() => nav(`/search/${item.name}`)}>숙소 보러가기 <i className="fa-solid fa-caret-right"></i></button>
        </span>
      </div>
    ))}
  </main>
  )
}

export default CityList