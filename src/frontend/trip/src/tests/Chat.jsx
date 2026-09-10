import React, { useState, useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/tests.css"

export default function Chat() {
  const [ messages, setMessages ] = useState([]);
  const [ input, setInput ] = useState('');
  // const [ sender, setSender ] = useState('');
  // const { sender } = useParams();
  const [ stompClient, setStompClient ] = useState(null);
  const { id, sender } = useParams();
  const scrollRef = useRef(null);
  
  useEffect(() => {
    if (scrollRef.current) {
    setTimeout(() => scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth' // 부드러운 스크롤 효과 적용
    }), 100);
  }}, [])
      
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL}/get-message?roomId=${id}`)
    .then(res => setMessages(res.data)
    ).catch(e => console.error(e));
        
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws', // WebSocket 엔드포인트
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.onConnect = () => {
      client.subscribe(`/sub/message/${id}`, (message) => {
        setMessages((prevMessages) => [...prevMessages, JSON.parse(message.body)]);
        if (scrollRef.current) {
          setTimeout(() => scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth' // 부드러운 스크롤 효과 적용
          }), 10); 
        }
      });
    };

    client.activate();

    setStompClient(client);

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, [id]);

  const sendMessage = () => {
    if (stompClient && input.trim() !== '') {
      stompClient.publish({ 
        destination: '/pub/message',
        body: JSON.stringify({
          sender: sender, 
          content: input,
          roomId: id 
        })});
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
    <div style={{margin: "0 auto", width: "50%", backgroundColor: "#bacee0", height: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
      <div>
        <h1 style={{margin: "0"}}>{id}</h1>
        <div className='room' ref={scrollRef} style={{width: "auto", height: "500px", overflowY: "auto"}}>
          {messages.map((msg, index) => (
            sender === msg.sender ? 
            <div key={index} style={{display: "flex", justifyContent: "flex-end", marginRight: "10px"}}><h2 style={{backgroundColor: "#ffeb33", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{msg.content}</h2></div> : 
            <div key={index} style={{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "10px"}}><h3 style={{marginBottom: "0"}}>{msg.sender}</h3><h2 style={{marginTop: "5px", backgroundColor: "white", padding: "5px", borderRadius: "5px", maxWidth: "50%", wordWrap: "break-word"}}>{msg.content}</h2></div>
          ))}
        </div>
      </div>
      <div style={{display: "flex", backgroundColor: "white", flexWrap: "wrap", justifyContent: "flex-end"}}>
        {/* <input type='text' value={sender} onChange={(e) => setSender(e.target.value)} placeholder='이름을 적어주세요' /> */}
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }} placeholder='메시지를 적어주세요' style={{width: "100%"}} />
        <button onClick={sendMessage} style={{border: "none", backgroundColor: "#ffeb33"}}>전송</button>
      </div>
    </div>
  );
}
