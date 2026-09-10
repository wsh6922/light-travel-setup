import "../../styles/sub3.css"
import Recommend from "../../components/Recommend"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { StarRating } from "../../components/Recommend"

const RoomInfo = ({data, hname}) => {
  return (
    data?.length !== 0 ?

    <div>
      <h1>{data?.hname ? data?.hname : "호텔명"}</h1>
      <h2 style={{fontWeight: "normal"}}>{data?.rname}</h2>
      <div>
        <h2>{data?.rcost?.toLocaleString()}원</h2>
        <span>{data?.rcapacity}인실</span>
        <span>{data?.paFacility}</span>
        {/* <span>내부 화장실 2개</span>
        <span>방 3개</span> */}
      </div>
    </div>
    :
    <div>
      <h1>{hname}</h1>
    </div>
  )
}

export const Sub3 = () => {
  const [ data, setData ] = useState([])
  const [ review, setReview ] = useState([])
  const [ roomData, setRoomData ] = useState([])
  const [ roomPic, setRoomPic ] = useState([])
  const [ simiHotel, setSimiHotel ] = useState([])
  const [ native, setNative ] = useState({})
  const [ main, setMain ] = useState({})
  const { num } = useParams()

  useEffect(() => {
    axios.post(`/detail/room?hNum=${num}`)
    .then(res => {
      setData(res.data)
      console.log("room",res.data)
    })
    .catch(e => console.error(e))

    axios.get(`/detail/hotel-review1?hNum=${num}`)
    .then(res => {
      setReview(res.data)
      console.log(res.data)
    })
    .catch(e => console.error(e))

    // post `/room-picture?paNum=${num}`
    // pic: url

    // /similar-hotel?hNum=${num}
    axios.post(`/detail/similar-hotel?hNum=${num}`)
    .then(res => { setSimiHotel(res.data); console.log("test",res.data)})
    .catch(e => console.error(e))

    setRoomData([])
  }, [num])

  const handleChange = (e) => {
    if (e.target.value === "") 
      return setRoomData([])
    setRoomData(data.find(room => room.paNum === parseInt(e.target.value)))
    console.log(roomData)
  }

  useEffect(() => {
    if (roomData.paNum) {

      axios.post(`/detail/room-picture?paNum=${roomData.paNum}`)
      .then(res => { setMain(res.data.shift()); setRoomPic(res.data); console.log("룸픽",res.data);})
      .catch(e => console.error(e))

      axios.post(`/detail/native-info?paNum=${roomData.paNum}`)
      .then(res => {setNative(res.data); console.log("네이티브",res.data)})
      .catch(e => console.error(e))
    }
  }, [roomData.paNum])

  return (
  <main>
    <div className="room-info" style={{marginTop: "25px"}}>
      <div>
        <div>
          <div
            style={roomData.length === 0 ? {backgroundImage: "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f4/06/f4/swissotel-premier-room.jpg?w=700&h=-1&s=1')"} : {backgroundImage: `url('http://localhost:8080/${encodeURIComponent(main?.pic).replace(".%5Cuploads%5C", "uploads/")}')`}}>
              
                <i className="fa-regular fa-heart" style={{fontSize: "40px", color: "white" }}></i>
          </div>
          <div>
            {roomPic.map((item, index) => (

            <div key={index}
              style={{backgroundImage: `url('http://localhost:8080/${encodeURIComponent(item?.pic).replace(".%5Cuploads%5C", "uploads/")}')`}}>
            </div>
            ))}
            {/* <div
              style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
            </div>
            <div
              style={{backgroundImage: "url('https://ic.zigbang.com/vr/ap-northeast-2/houses/L55HM8HR/cover/medium/cover.jpg?w=400&h=300&q=70&a=1&watermark=false')"}}>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        
      <RoomInfo data={roomData} hname={data[0]?.hname}/>
        <div>
          <select onChange={handleChange}>
            <option value={""} >방을 선택하세요</option>
            {
              data?.map((item, index) => (
              <option value={item.paNum} key={index}>{item.rname}</option>
              ))
            }
          </select>
          { roomData.length !== 0  &&

          <Link to={"/order"} state={{hNum: num, paNum: roomData.paNum}}>
          <button>예약하기</button>
          </Link>
          }
        </div>
      </div>
    </div>

    <Recommend id={1} data={simiHotel} title={"같은 지역 호텔"} style={{marginTop: "50px"}} />

    <div className="detail-info">
      <div>
        <h2>객실 설명</h2>
        <div dangerouslySetInnerHTML={{ __html: roomData?.paContent }} style={{marginBottom: "20px"}}>
        {/* {data.paContent} */}
        </div>
        <div>
          {
            roomData.length !== 0 && 
            <>
          <div
            style={{backgroundImage: `url('http://localhost:8080/${encodeURIComponent(native?.npProfile).replace(".%5Cuploads%5C", "uploads/")}')`}}>
          </div>
          <div>
            <p>{native.npName}</p>
            <p>{native.npPhone}</p>
            <Link to={"/chat"} state={{native: native.nid}}>
              <button style={{backgroundColor: "black", color: "white", padding: "5px 10px", marginTop: "10px", borderRadius: "10px"}}>채팅하기</button>
            </Link>
          </div>
            </>
          }
        </div>
      </div>
      <div>
        <h2>리뷰</h2>
        <div>
          {
            review.map((item, index) => (
          <div key={index}>
            <p><span>{item.name}</span><span>{item.resDate} | {item.reviewDate}</span></p>
            <p><StarRating rating={item.rate} /></p>
            <p>{item.content}</p>
          </div>

            ))
          }
        </div>
      </div>
    </div>

  </main>
  )
}