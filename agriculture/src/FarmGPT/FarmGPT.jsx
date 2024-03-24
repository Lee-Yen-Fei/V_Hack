import React, { useState } from "react";
import TextBar from "./TextBar";
import MessageBox from "./MessageBox";
import "./farmGPT.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [fetchMsg, setFetchMsg] = useState(false);

  const messageList = messages.map((message, index) => (
    <MessageBox key={index} side={message.side} text={message.msg}></MessageBox>
  ));

  if (!fetchMsg) {
    getMsg();
  }

  function getMsg() {
    fetch("./chatbotMessages.json")
      .then((response) => response.json())
      .then((messagesJson) => {
        console.log(messagesJson);
        setMessages([...messages, ...messagesJson]);
        setFetchMsg(true);
      });
  }

  function createMessage(text) {
    if (messages.length > 0) setMessages((m) => [...m, { msg: text, side: 0 }]);
    else setMessages([{ msg: text, side: 0 }]);
  }

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div id="textBackground" style={{ flexGrow: 1, overflowY: "auto" }}>
        {messageList}
      </div>
      <div style={{ marginBottom: 4 }}>
        <TextBar func={createMessage}></TextBar>
      </div>
    </div>
  );
}

export default Chatbot;
