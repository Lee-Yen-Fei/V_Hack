import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <h1>
      404 Not Found
      <br />
      <Link to="/">Home</Link>
    </h1>
  );
}

export default NotFoundPage;
