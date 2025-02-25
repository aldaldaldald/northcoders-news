import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-card">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <br></br>
      <Link to="/" className="home-button">
        Go back home
      </Link>
    </section>
  );
}

export default NotFound;
