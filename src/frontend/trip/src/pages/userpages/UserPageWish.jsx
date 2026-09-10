import { Link, useParams } from "react-router-dom";
import "../../styles/UserPageWish.css"
import { useEffect } from "react";
import axios from "axios";

function UserPageWish() {
    const { num } = useParams()

    useEffect(() => {
        axios.get(`/my-page/wish-list`)
        .then(res => console.log(res.data))
        .catch(e => console.error(e))
    }, [])

    return (
        <main>
            <p class="UserPageName">마이페이지</p>
            <div class="UserPageContainer">
                <div class="UsetPageLeftC">
                    <div class="UserProfileC">
                        <div class="UserProfileImg">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt="" />
                        </div>
                        <p>이름</p>
                        <Link>프로필 설정</Link>
                    </div>

                    <div class="UserPageNev">
                        <Link to={`/mypage/${num}`}>계정</Link>
                        <Link to={`/mypage/${num}/buy`}>예약내역</Link>
                        <Link to={`/mypage/${num}/wish`} class="UserPageNow">위시리스트</Link>
                        <Link>최근 본</Link>
                    </div>
                </div>

                <div class="UsetPageRightC">
                    <div class ="UsetPageRightCC">
                        <div class="UsetPageWishBox1">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt="" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>

                        <div class="UsetPageWishBox1">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt="" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>

                        <div class="UsetPageWishBox0">
                            <div class="UsetPageWishBoxTop">
                                <img class="UsetPageWishImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ483Wq5A8uE8bxH4OqzfreSfUmH_GF72wSw&s" alt="" />
                            </div>
                            <div class="UsetPageWishBoxBot">
                                <p class="UsetPageWishName">안되네 호텔</p>
                                <p class="UsetPageWishStar">✩✩✩✩✩</p>
                                <p class="UsetPageWishMoney">15,881,588</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </main>
    )
}
    
export default UserPageWish;