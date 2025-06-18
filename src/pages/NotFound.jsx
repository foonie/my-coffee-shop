import { Link } from "react-router-dom";

const NotFound = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>404 - Page Not Found</h1>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
