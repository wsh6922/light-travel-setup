import { useEffect, useState } from "react";
import "../../styles/SearchNative.css"
import axios from "axios";
import { Link } from "react-router-dom";

function SearchNative() {
    const [ data, setData ] = useState([])
    
    useEffect(() => {
        axios.get(`/native/native-list`)
        .then(res => {setData(res.data); console.log(res.data)})
        .catch(e => console.error(e))
    }, [])
    return (
        <main>
            <div className="뭐없냐">
                <p className="위에배너넣을게없다">현지인</p>
            </div>
            {/* <div className="SNTopContainer">
                <div className="SNPageNation">
                    <button className="SNPageNationF">&lt;</button>
                    <button className="SNPageNationNow">1</button>
                    <button className="SNPageNationS">2</button>
                    <button className="SNPageNationS">3</button>
                    <button className="SNPageNationS">4</button>
                    <button className="SNPageNationS">5</button>
                    <button className="SNPageNationF">&gt;</button>
                </div>

                <div className="SNSearchBar">
                    <select className="SNSearchBarSelect">
                        <option>별점 순</option>
                        <option>이름 순</option>
                        <option>지역명 순</option>
                    </select>
                    <input type="text" className="SNSearchBarInput"></input>
                </div>
            </div> */}

            {
                data.map((item, index) => (

                <div className="SNBotContainer" key={index}>
                    <div className="SNNativeContiner">
                        <div className="SNNativeImg">
                            <img alt="" src={`http://localhost:8080/${encodeURIComponent(item?.profile).replace(".%5Cuploads%5C", "uploads/")}`} />
                        </div>

                        <div className="SNNativeDesc">
                            <div className="이거둘이옆으로붙일거임">
                                <p className="SNNname">{item?.name}</p>
                                {/* <p className="SNNlastTime">최근 활동 3분 전</p> */}
                            </div>
                            <p className="SNNlocation">활동 지역 - {item?.location}</p>
                            <p className="SNNdesc">{item?.intro}</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%"}}>

                        <Link to={"/native-desc"} state={{num: item?.num}}>
                            <button className="SNNbutton">더 알아보기&nbsp;<i className="fa-solid fa-caret-right"></i></button>
                        </Link>
                        </div>
                    </div>
                </div>
                ))
            }

        </main>
    )
}

export default SearchNative;