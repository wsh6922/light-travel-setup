import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "../../styles/tests.css"

export default function Chat2() {
  const [ messages, setMessages ] = useState([]);
  const [ input, setInput ] = useState('');
  // const [ sender, setSender ] = useState('');
  // const { sender } = useParams();
  const [ stompClient, setStompClient ] = useState(null);
  // const { id, sender } = useParams();
  const scrollRef = useRef(null);

  const [ user, setUser ] = useState({})
  const { state } = useLocation();
  const native = state?.native
  const userId = state?.uid


  useEffect(() => {
    axios.post(`/login/session`).then(res => {setUser(res.data); console.log(res.data)}).catch(e => console.error(e))
  }, [])
  
  useEffect(() => {
    if (scrollRef.current) {
    setTimeout(() => scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth' // 부드러운 스크롤 효과 적용
    }), 100);
  }}, [])
      
  useEffect(() => {
    if (user.native === "0") {
      axios.get(`${process.env.REACT_APP_URL}/get-message?uId=${user.id}&nId=${native}`)
      .then(res => {setMessages(res.data); console.log(res.data)}
      ).catch(e => console.error(e));
    } else {
      axios.get(`${process.env.REACT_APP_URL}/get-message?uId=${userId}&nId=${user.id}`)
      .then(res => {setMessages(res.data); console.log(res.data)}
      ).catch(e => console.error(e));

    }
        
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws', // WebSocket 엔드포인트
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      if (user.native === "0") {

        client.subscribe(`/sub/message/${native}/${user.id}`, (message) => {
          setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
          if (scrollRef.current) {
            setTimeout(() => scrollRef.current.scrollTo({
              top: scrollRef.current.scrollHeight,
              behavior: 'smooth' // 부드러운 스크롤 효과 적용
            }), 10); 
          }
          });
      } else {
        client.subscribe(`/sub/message/${user.id}/${userId}`, (message) => {
          setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
          if (scrollRef.current) {
            setTimeout(() => scrollRef.current.scrollTo({
              top: scrollRef.current.scrollHeight,
              behavior: 'smooth' // 부드러운 스크롤 효과 적용
            }), 10); 
          }});

      }
    };

    client.activate();

    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [user, native, userId]);

  const sendMessage = () => {
    if (stompClient && input.trim() !== '') {
      if (user.native === "0") {

        stompClient.publish({ 
          destination: '/pub/message',
          body: JSON.stringify({
            // sender: sender, 
            content: input,
            // roomId: id 
            nId: native,
            uId: user.id,
            sender: user.native,
          })});
          } else {
            stompClient.publish({ 
              destination: '/pub/message',
              body: JSON.stringify({
                // sender: sender, 
                content: input,
                // roomId: id 
                nId: user.id,
                uId: userId,
                sender: user.native,
              })});}
      // console.log(input);
      setInput('');
    }
    if (scrollRef.current) {
      setTimeout(() => scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth' // 부드러운 스크롤 효과 적용
      }), 10); 
    }
  };

  return (
    <>
    <div style={{margin: "0 auto", width: "50%", height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
        <h1 style={{}}>{user.id}</h1>
        <div className='room' ref={scrollRef} style={{width: "auto", height: "700px", overflowY: "auto", marginBottom: "10px"}}>
          {messages.map((msg, index) => (
            user.native === msg.sender ? 
            <div key={index} style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}><h2 style={{backgroundColor: "#5991d1", padding: "15px", borderRadius: "20px", maxWidth: "50%", wordWrap: "break-word", color: "white", fontWeight: "normal", borderBottomRightRadius: "0"}}>{msg.content}</h2></div> : 
            <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px"}}><h2 style={{marginTop: "5px", backgroundColor: "#f0f3f4", padding: "15px", borderRadius: "20px", maxWidth: "50%", wordWrap: "break-word", fontWeight: "normal", borderBottomLeftRadius: "0"}}>{msg.content}</h2></div>
          ))}
        </div>
      </div>
      <div style={{display: "flex", backgroundColor: "white", flexWrap: "wrap", justifyContent: "space-between"}}>
        {/* <input type='text' value={sender} onChange={(e) => setSender(e.target.value)} placeholder='이름을 적어주세요' /> */}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }} placeholder='메시지를 적어주세요' style={{width: "90%", fontSize: "23px", border: "none", backgroundColor: "#f0f3f4", padding: "5px", borderRadius: "10px"}} className='chatInput' />
        <button onClick={sendMessage} style={{border: "none", backgroundColor: "#5991d1", fontSize: "20px", borderRadius: "10px", color: "white", width: "8%"}}>전송</button>
      </div>
    </div>
    </>
  );
}
