import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export const StarRating = ({ rating }) => {
  // rating은 0에서 5 사이의 숫자
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {/* 채워진 별 출력 */}
      {Array(fullStars).fill().map((_, index) => (
        <i className="fa-solid fa-star" key={`full-${index}`}></i>
      ))}
      {/* 반쯤 채워진 별 출력 */}
      {halfStar && <i class="fa-regular fa-star-half-stroke"></i>}
      {/* 빈 별 출력 */}
      {Array(emptyStars).fill().map((_, index) => (
        <i className="fa-regular fa-star" key={`empty-${index}`}></i>
      ))}
    </>
  );
};

export default function Recommend({style, data, id, title, sub}) {
  const nav = useNavigate();
  const slidesToShow = data.length < 4 ? data.length : 4;
  const slidesPerGroup = data.length < 4 ? data.length : 4;

  useEffect(() => {
    if (slidesToShow < 4) {
      document.querySelector('.swiper').style.marginLeft = 0;
    }
  }, [slidesToShow])

  return (
    <div className="recommend" style={style}>

      <h2>{title}</h2>
      <div className="recommend-container">
        <button id={`prev${id}`} style={{left: "-25px"}}><i className="fa-solid fa-chevron-left"></i></button>
        <button id={`next${id}`} style={{right: "-25px"}}><i className="fa-solid fa-chevron-left fa-rotate-180"></i></button>
        <Swiper
          modules={[ Navigation ]}
          slidesPerView={slidesToShow}
          slidesPerGroup={slidesPerGroup}
          spaceBetween={25}
          navigation={{prevEl: `#prev${id}`, nextEl: `#next${id}`}}
        >
          {data.map((i, index) => (
          <SwiperSlide key={index} onClick={() => nav(`/room/${i.hnum}`)}>

            <div className="recommend-object">

            <div style={{backgroundImage: `url('${i.hpUrl}')`}}></div>
            <div>
  
              <div>
                <span>{sub}</span>
                <h3>{i.hname}</h3>
                {/* [특가] 이주현의 집 아남아파트{i} */}
              </div>
  
              <div>
                <span><StarRating rating={i.hrate} /> {Math.round(i.hrate * 10) / 10}</span>
                <span>원가 {i.rprice?.toLocaleString()}원~</span>
              </div>
            </div>
          </div>
          </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </div>
  )
}