import { useLocation } from "react-router-dom"
import "../../styles/NativeDesc.css"

import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { useEffect, useState } from "react"
import axios from "axios"

function NativeDesc() {
    const [ data, setData ] = useState([])
    const [ 소개한여행, set소개한여행 ] = useState([])
    const { state } = useLocation()
    const num = state?.num

    useEffect(() => {
        axios.get(`/native/native-list-find?num=${num}`)
        .then(res => {setData(res.data); console.log(res.data)})
        .catch(e => console.error(e))

        axios.post(`/native/native-register?nNum=${num}`)
        .then(res => {set소개한여행(res.data); console.log(res.data)})
        .catch(e => console.error(e))
    }, [num])

    return (
        <main>
            <div className="NDcontainer">
                <div className="NDbenner">
                    <img src="https://cdn.pixabay.com/photo/2022/07/07/20/22/fireworks-7307992_1280.jpg" alt=""></img>
                    <p className="NDdescName">{data[0]?.name}</p>
                </div>

                <div className="NDimgContainer">
                    <img src={`http://localhost:8080/${encodeURIComponent(data[0]?.profile).replace(".%5Cuploads%5C", "uploads/")}`} alt=""/>
                </div>

                <div className="NDdesc">
                    <p className="NDdescLocation">{data[0]?.location}</p> {/*지역 명*/}
                    <p className="NDdescTxt">{data[0]?.intro}</p>
                </div>
            </div>

            <div className="NDphoto">
                <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    style={{ height: "400px" }}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    autoplay={{ delay: 7000 }}
                    // pagination={{clickable: true}}
                    navigation={true}
                    loop={true}
                >
                    <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://www.hotelscombined.co.kr/rimg/dimg/03/ab/17bc47f0-city-33286-172e067f89c.jpg?width=1366&height=768&xhint=3138&yhint=1902&crop=true&watermarkposition=lowerright')" }}></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3zNv/image/nN3KKXuQmxTmeb-4fFpCqj_8ccc.jpg')" }}></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://images.chosun.com/resizer/AyIXHNeYnbGuDpYGMqd1qHqIfJ0=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FCQHGPIZD5B6PIVGLZ3MD4XZS4.jpg')" }}></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://cf.bstatic.com/xdata/images/country/1020x340/1126.jpg?k=5be7b49bb224015668dc5149aa9033e17151086b2c101e2d21914a1c3a771fa6&o=')" }}></SwiperSlide>
                </Swiper>
            </div>

            <div className="NDFormList">
                <div className="NDFormTopCon">
                    <p className="NDFormListName">소개한 여행</p>
                    <p className="NDFormListNum">{소개한여행.length}</p>
                </div>

                { 소개한여행.map((item, index) => (

                <div className="NDFormContainer" key={index}>
                    <div className="NDFormIMG">
                        <img src={item?.hurl} alt=""/>
                    </div>

                    <div className="NDFormDesc">
                        <p className="NDFormDescLoc">{data[0]?.location}</p>
                        <p className="NDFormDescName">{item.hname}</p>
                        <p className="NDFormDescName">{item.rname}</p>
                        <div className="NDFormDescBotCon">
                            {/* <p className="NDFormDescScore">★★★✩✩ (3.0)</p> */}
                            <p className="NDFormDescMon">{item.paPrice?.toLocaleString()} 원</p>
                        </div>
                    </div>
                </div>
                ))
                }

            </div>

            <div style={{ marginTop: "50px", marginBottom: "50px", borderBottom: "solid 1px #e1e1e1" }}>

            </div>

            {/* <div className="NDFormList">
                <div className="NDFormTopCon">
                    <p className="NDFormListName">후기</p>
                    <p className="NDFormListNum">123</p>
                </div>

                <div className="NDreviewCon">
                    <p className="NDreviewSco">★★★✩✩</p>
                    <p className="NDreviewDate">2024-04-29</p>
                    <p className="NDreviewTxt">왜 되는거임 왜 되는거임 왜 되는거임 왜 되는거임왜 되는거임왜 되는거임왜 되는거임</p>
                </div>

                <div className="NDreviewCon">
                    <p className="NDreviewSco">★★★✩✩</p>
                    <p className="NDreviewDate">2024-04-29</p>
                    <p className="NDreviewTxt">왜 되는거임 왜 되는거임 왜 되는거임 왜 되는거임왜 되는거임왜 되는거임왜 되는거임</p>
                </div>

                <div className="NDreviewCon">
                    <p className="NDreviewSco">★★★✩✩</p>
                    <p className="NDreviewDate">2024-04-29</p>
                    <p className="NDreviewTxt">왜 되는거임 왜 되는거임 왜 되는거임 왜 되는거임왜 되는거임왜 되는거임왜 되는거임</p>
                </div> */}

                {/* <button className="NDreview">⌵ 후기 더보기</button> */}
            {/* </div> */}
        </main>
    )
}

export default NativeDesc;