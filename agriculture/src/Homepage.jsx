import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to={"/farmhub"}>Farm Hub</Link>
      <br />
      <Link to={"/farmgpt"}>FarmGPT</Link>
    </div>
  );
}

export default Homepage;
