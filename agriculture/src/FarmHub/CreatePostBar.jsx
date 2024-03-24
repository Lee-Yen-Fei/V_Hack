import React, { createRef, useState } from "react";
import { Input } from "antd";
import "./createPostBar.css";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

function CreatePostBar({ createPostFunc }) {
  const [createPostText, setCreatePostText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  function handleUploadFile(event) {
    console.log(event.target.files[0]);
    setUploadedFiles(() => [
      ...uploadedFiles,
      URL.createObjectURL(event.target.files[0]),
    ]);
  }

  const fileList = uploadedFiles.map((uploadedFile, index) => (
    <img key={index} src={uploadedFile} />
  ));

  function post() {
    createPostFunc(createPostText, uploadedFiles);
    setUploadedFiles([]);
    setCreatePostText("");
  }

  return (
    <div className="createPostBar">
      <TextArea
        className="createPostTextArea"
        placeholder="Share your agriculture opinions"
        value={createPostText}
        style={{
          borderRadius: 5,
          border: "1px #F9E79F solid",
        }}
        autoSize={{
          minRows: 3,
          maxRows: 10,
        }}
        onChange={(textArea) => setCreatePostText(textArea.target.value)}
      />
      <div>
        <div
          className="imageDisplay"
          style={
            uploadedFiles.length > 0 ? { display: "flex" } : { display: "none" }
          }
        >
          {fileList}
        </div>
      </div>
      <div className="createPostButton">
        <label className="uploadFileLabel" htmlFor="uploadFile">
          <div>
            <UploadOutlined />
            &nbsp;Upload File
          </div>
        </label>
        <input
          type="file"
          id="uploadFile"
          className="uploadFile"
          onChange={handleUploadFile}
        />
        <button onClick={() => post()} style={{ padding: 0 }}>
          Post
        </button>
      </div>
    </div>
  );
}

//TODO
//add image to post

export default CreatePostBar;
