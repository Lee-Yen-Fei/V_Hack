import { useState } from "react";
import CreatePostBar from "./CreatePostBar";
import Post from "./Post";
import "./farmHub.css";

function FarmHub() {
  const [postTexts, setPostTexts] = useState(["ad", "sddfsa"]);
  const [postFiles, setPostFiles] = useState([[]]);

  function createPost(text, files) {
    console.log("here");
    setPostTexts((pT) => [...pT, text]);
    setPostFiles((pF) => [...pF, files]);
  }

  const postList = postTexts.map((postTexts, index) => (
    <Post key={index} text={postTexts} files={postFiles[index]}></Post>
  ));

  return (
    <div className="feed">
      <CreatePostBar createPostFunc={createPost}></CreatePostBar>
      {postList}
    </div>
  );
}

export default FarmHub;
