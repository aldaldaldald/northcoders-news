import { Link } from "react-router-dom";
import { useUser } from "../contexts/Users";
import portraitPlaceholder from "../assets/Portrait_Placeholder.png";

function NavigationBar() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="navigation-bar">
      <div className="navigation-bar-inner">
        <Link to={`/`} className="company-logo">
          <h1>Northcoders News</h1>
        </Link>
        <Link to={`/users/${user?.username}`}>
          <img
            src={user ? user.avatar_url : portraitPlaceholder}
            className="user-profile-picture"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
