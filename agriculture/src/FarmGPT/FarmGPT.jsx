import React, { useState } from "react";
import TextBar from "./TextBar";
import MessageBox from "./MessageBox";
import "./farmGPT.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);

  const messageList = messages.map((message, index) => (
    <MessageBox key={index} side={0} text={message}></MessageBox>
  ));

  function createMessage(text) {
    if (messages.length > 0) setMessages((m) => [...m, text]);
    else setMessages([text]);
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
