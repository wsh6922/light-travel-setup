import { useNavigate } from "react-router-dom"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function EventMenu({title, data, sub}) {
  const nav = useNavigate();
  return (
    <div className="event-menu">
      <div className="event-text">
        <h2>{title}</h2>
      </div>
      
      <div className="event-container">
        <div>
          <button id="prev"><i className="fa-solid fa-chevron-left"></i></button>  
        </div>

        <Swiper
          style={{ width: "86%" }}
          modules={[ Navigation ]}
          navigation={{ prevEl: "#prev", nextEl: "#next"}}
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={30}
        >

        {data.map((i, index) => (
          <SwiperSlide key={index} onClick={() => nav(`/room/${i.hnum}`)}>

          <div className="event-object">
            <div style={{backgroundImage: `url('http://localhost:8080/${encodeURIComponent(i?.paPicUrl).replace(".%5Cuploads%5C", "uploads/")}')`}}></div>
            <div>

              <div>
                <h4>{i.hname}</h4>
                <span>{i.rname}</span>
              </div>

              <div>
                {/* <span><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i> 341</span> */}
                <span>가격 {i.paPrice?.toLocaleString()}원</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
        </Swiper>
        <div>
          <button id="next"><i className="fa-solid fa-chevron-left fa-rotate-180"></i></button>  
        </div>
      </div>
    </div>
  )
}