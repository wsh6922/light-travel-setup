import { Pagination, Autoplay, Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../styles/tests.css'
import { useNavigate } from 'react-router-dom';

export default function SwiperTest() {
  const nav = useNavigate();

  return (
    <main>
      <div  style={{ position: "relative" }}>
        <div style={{ position: "absolute", zIndex: "9999", top: "30%", left: "10%", height: "50px" }}>
          <h1 style={{color: "white"}}>Enjoy Your Trip!</h1>
          <input type="text" name=""  />
        </div>
        {/* 커스텀 네비 버튼 */}
        <button style={{position: "absolute", zIndex: "9999", top: "50%", left: "-20px"}} id='prev'><i className="fa-solid fa-chevron-left"></i></button>
        <button style={{position: "absolute", zIndex: "9999", top: "50%", right: "-20px"}} id='next'><i className="fa-solid fa-chevron-left fa-rotate-180"></i></button>
        <Swiper
          modules={[Pagination, Autoplay, Navigation, Mousewheel, Keyboard]}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={20}
          pagination={{
            el: '#pagination',
            type: 'bullets',
            renderBullet: (i, c) => `<p class="${c}" style="width: 24.5% !important;"></p>`,
            clickable: true
          }}
          // loop={true}
          autoplay={{delay: 7000}}
          navigation={{ prevEl: '#prev', nextEl: '#next'}}
          style={{height: "350px"}}
          mousewheel={true}
          keyboard={true}
          >
          <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken",backgroundImage: "url('https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=11288734&filePath=L2Rpc2sxL25ld2RhdGEvMjAxNS8wMi9DTFM2OS9OVVJJXzAwMV8wMjIwX251cmltZWRpYV8yMDE1MTIwMw==&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006')", backgroundSize: "cover"}} onClick={() => nav("/test/map")} />
          <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-green-field-landscape-wallpapers-image_2908231.jpg')", backgroundSize: "cover"}} />
          <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundImage: "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D')", backgroundSize: "cover"}} />
          <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundImage: "url('https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg')", backgroundSize: "cover"}} />
        </Swiper>
        {/* 커스텀 페이지네이션 */}
        <div id='pagination' style={{display: 'flex', justifyContent: 'space-between', marginTop: "5px"}} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  )
}