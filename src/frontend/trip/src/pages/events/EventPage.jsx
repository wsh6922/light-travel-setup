import "../../styles/event.css"

function EventPage() {
  return (
    <main>
        <div className="이벤트페이지상단">
            {/* <p className="이벤트페이지생사">진행중</p> */}
            <p className="이벤트페이지제목">[이벤트] 대한민국 숙박 세일 페스타</p>
            <p className="이벤트페이지기간">2024-04-06 ~ 2024-04-07</p>
        </div>

        <div className="이벤트페이지중앙">
            <img src="https://dry7pvlp22cox.cloudfront.net/mrt-images-prod/2024/05/31/x0kF/utoVjl5kkA.jpg?width=3180&quality=70" alt=""/>
        </div>

        <div className="이벤트페이지하단">
            <div className="목록글">
                <p>이전글</p>
                <p>[이벤트] 이건 다음 글 입니다</p>
            </div>
            <div className="목록글">
                <p>다음글</p>
                <p>[이벤트] 이건 이전 글 입니다</p>
            </div>
            <button>목록으로</button>
        </div>
    </main>
  )
}

export default EventPage