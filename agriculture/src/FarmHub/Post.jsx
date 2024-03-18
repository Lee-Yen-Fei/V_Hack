import { useState } from "react";
import { Button } from "antd";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import "./post.css";

function Post({ text, files }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(0);

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
      setLiked(!liked);
    } else {
      setLikes(likes + 1);
      setLiked(!liked);
    }
  }

  const imageList = files?.map((file, index) => <img key={index} src={file} />);

  return (
    <div className="postBox">
      <div className="postMessage">
        <p style={{ marginBottom: 8 }}>{text}</p>
        <div className="imgListContainer">{imageList}</div>
        <span style={{ color: "grey" }}>
          {likes} likes {comments} comments
        </span>
      </div>

      <div className="postButtons">
        <Button
          className="postButton"
          icon={<LikeOutlined />}
          onClick={handleLike}
        >
          Like
        </Button>
        <Button className="postButton" icon={<CommentOutlined />}>
          Comments
        </Button>
      </div>
    </div>
  );
}

export default Post;
