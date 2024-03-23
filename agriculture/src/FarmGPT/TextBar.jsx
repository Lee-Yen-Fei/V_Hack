import React, { createRef, useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
const { TextArea } = Input;
import "./textBar.css";

function TextBar({ func: createMessage }) {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  function send() {
    //create post when send
    createMessage(text);
    setText("");
    textAreaRef.current.focus();
  }

  return (
    <div className="textBar" style={{ display: "flex" }}>
      <TextArea
        ref={textAreaRef}
        autoFocus
        placeholder="Ask anything agriculture"
        value={text}
        autoSize={{
          minRows: 1,
          maxRows: 10,
        }}
        onChange={(textArea) => setText(textArea.target.value)}
      />
      <Button icon={<SendOutlined />} onClick={() => send()}></Button>
    </div>
  );
}

export default TextBar;
