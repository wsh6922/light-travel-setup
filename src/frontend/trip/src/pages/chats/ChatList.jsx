import "../../styles/ChatTest.css"

function ChatList() {
    return (
        <main>
            <div className="채팅방목록컨테이너">
                <div className="채팅방목록헤더">
                    <p className="채팅방목록헤더이름">채팅</p>
                </div>

                <div className="채팅방미리보기컨테이너">
                    <img src="https://cdn.pixabay.com/photo/2022/07/07/20/22/fireworks-7307992_1280.jpg" alt="" />
                    <div className="채팅방미리보기우측">
                        <p className="채팅방미리보기상대이름">채팅 상대 이름</p>
                        <p className="채팅방미리보기내용">마지막 채팅 내용 집보내주세요</p>
                    </div>
                </div>

                <div className="채팅방미리보기컨테이너">
                    <img src="https://cdn.pixabay.com/photo/2022/07/07/20/22/fireworks-7307992_1280.jpg" alt="" />
                    <div className="채팅방미리보기우측">
                        <p className="채팅방미리보기상대이름">채팅 상대 이름</p>
                        <p className="채팅방미리보기내용">마지막 채팅 내용 야호</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ChatList;