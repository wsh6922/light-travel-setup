import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api"
import "../../styles/upload.css"
// import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "landscape",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];

export const Upload = () => {
//   const nav = useNavigate();
  const [ data, setData ] = useState([]);
  const [ input, setInput ] = useState('')
  const [ selected, setSelected ] = useState({
    hnum: '',
    name: '',
    lat: "",
    lng: '',
  })

  useEffect(() => {
    if (input === "") {
        axios.post(`/native/get-hotels`)
        .then(res => {setData(res.data); console.log(res.data)})
        .catch(e => console.error(e))
    } else {
        axios.post(`/native/get-hotels-city?cName=${input}`)
        .then(res => setData(res.data))
        .catch(e => console.error(e))

    }
  }, [input])

  useEffect(() => {
    console.log(selected)
  }, [
    selected
  ])

  return (
    <main>  
        <div className="selectLocationForm">

            <div className="selectLocationMenu">
                <span>업로드 할 지역과 숙박시설을 선택해주세요.</span>

                {/* <div class="selectLocationOptionContainer">
                    <select class="locationOption1">
                        <option>국가 선택</option>
                    </select>

                    <select>
                        <option>도시 선택</option>
                    </select>
                </div> */}
            </div>

            <div className="upload-content">

                <div className="map-wrapper">
                    <LoadScript googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}>
                    <GoogleMap mapContainerClassName="map" center={selected.hnum === "" ? {lat: data[0]?.lat, lng: data[0]?.lng} : {lat: selected.lat, lng: selected.lng}} zoom={15} options={{ disableDefaultUI: true, styles:myStyles }}>
                        { data.map((item, index) => (

                            <MarkerF
                            key={index}
                            position={{
                                lat: item.lat,
                                lng: item.lng,
                            }}
                             />
                        ))

                        }
                    </GoogleMap>
                    </LoadScript>
                </div>

                <div className="search-menu">

                    <div className="search-bar-wrapper">
                        <div className="upload-search-bar">
                            <input type="text" placeholder="검색" onChange={(e) => setInput(e.target.value)} /> 
                            <i className="fa-solid fa-magnifying-glass"></i> 
                        {/* 아이콘 */}
                        </div>
                    </div>

                    <div className="search-result-container" style={{overflowY: "auto", maxHeight: "399px"}}>
                        {data.map((item, index) => (
                            <div class="searchLocationResult" key={index} style={item.hnum === selected.hnum ? {backgroundColor: "#f1f3f5"} : {}}>
                            <div class="SLRimg">
                                <img src={item.url} alt=""/>
                            </div>

                            <div class="SLRP">
                                <div>
                                    <p class="SLRPhotel">{item.name}</p>
                                    <p class="SLRPLocation">{item.city}</p>
                                </div>
                                <div class="tlqkf">
                                    <button onClick={() => setSelected({
                                        hnum: item.hnum,
                                        name: item.name,
                                        lat: item.lat,
                                        lng: item.lng
                                    })}>선택</button>
                                </div>
                            </div>
                        </div>
                        ))
                        }
                    </div>
                </div>

            </div>

            <Link to={"/upload-more"} state={{selected: selected}}>
                <button class="goWriteForm">폼 작성하기</button>
            </Link>

        </div>
    </main>
  )
}