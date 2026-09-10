import React, { useState, useEffect } from "react";
import "../../styles/writeReview.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function WriteReview() {
    const [star, setStar] = useState(0);
    const [reviewText, setReviewText] = useState("");
    // const [hname, setHName] = useState("")
    // const [rname, setRName] = useState("")
    const [data, setData ] = useState({
        hname: "",
        rname: "",
        hurl: ""
    })

    const { hnum } = useParams()

    // const [ form, setForm ] = useState({
    //     rate: 0,
    //     content: ""
    // })

    const handleRating = (value) => {
        if (star !== value) {
            setStar(value);
            console.log("선택된 별 개수:", value);
        }
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault()
        // 리뷰를 등록하는 로직을 추가할 수 있습니다.
        await axios.post(`/my-page/write-review?hNum=${hnum}`, { rate: star, content: reviewText}).then(res => console.log(res.data)).catch(e => console.error(e))
        window.close()
    };

    useEffect(() => {
        const handleMessage = (e) => {
            if (e.origin === window.location.origin) {
                const { hname, rname, hurl } = e.data
                console.log("받기 : ", hname, rname)
                if (hname !== undefined) {

                    setData({
                        hname: hname,
                        rname: rname,
                        hurl: hurl
                    })
                }
            }
        };

        window.addEventListener('message', handleMessage);


        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    // useEffect(() => {
    //     console.log("출력 : ", hname, rname)
    // }, [ hname, rname ])

    useEffect(() => {
        console.log("실시간으로 작성 중인 리뷰 내용:", reviewText);
    }, [reviewText]);


    return (
        <form className="write-review">
            <input type="hidden" name="" id="hotel" />
            <input type="hidden" name="" id="room" />

            <p className="write-review-title">리뷰쓰기</p>
            <hr style={{width: "99%"}} />
            <div className="write-review-header">
                <img
                    className="review-item-image"
                    src={data.hurl}
                    alt="Review item"
                />
                <div className="write-review-text">
                    {/* <div className="review-info" style={{ color: "GrayText" }}>
                        {"판매자 이름"}
                    </div> */}
                    <div className="review-info">
                        {data.hname}
                    </div>
                    <div className="review-info" style={{ color: "GrayText" }}>
                        {data.rname}
                    </div>
                </div>
            </div>
            <hr style={{width: "90%", borderTop: "2px solid #f8f9fa"}} />
            <div className="reviewStarTitle">상품은 만족하셨나요?</div>
            <div className="reviewStar-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            type="radio"
                            id={`star${value}`}
                            name="reviewStar"
                            className="reviewStar"
                            value={value}
                            checked={star === value}
                            onChange={() => handleRating(value)}
                        />
                        <label htmlFor={`star${value}`}></label>
                    </React.Fragment>
                ))}
            </div>
            <div style={{color: "gray"}}>
                {star === 0 ? "선택하세요" : `별점 ${star}점이 선택되었습니다`}
            </div>
            <hr style={{width: "90%", borderTop: "2px solid #f8f9fa"}} />
            <div className="reviewStarTitle">어떤 점이 좋았나요?</div>
            <textarea
                className="writeReview-textarea"
                value={reviewText}
                onChange={handleReviewTextChange}
                placeholder="리뷰를 작성해주세요."
            ></textarea>
            <button className="writeReview-submit" onClick={handleSubmitReview}>리뷰 등록하기</button>
        </form>
    );
}
