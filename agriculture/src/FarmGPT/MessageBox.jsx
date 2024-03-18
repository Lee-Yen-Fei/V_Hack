import "./messageBox.css";

const SIDE = {
  USER: 0,
  AI: 1,
};

function MessageBox({ side, text }) {
  function createMessageBox(side, text) {
    if (side == SIDE.USER) {
      return (
        <div
          className="messageBox"
          style={{
            marginLeft: "auto",
            marginRight: 0,
            backgroundColor: "#E5D7BD",
          }}
        >
          <h4>You</h4>
          <p>{text}</p>
        </div>
      );
    }
  }

  return <>{createMessageBox(side, text)}</>;
}

export default MessageBox;
