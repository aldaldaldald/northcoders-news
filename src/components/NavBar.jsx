import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="navigation-bar-inner">
        <Link to={`/`} className="company-logo">
          <h1>Northcoders News</h1>
        </Link>
        <img
          src="/src/assets/Portrait_Placeholder.png"
          className="user-profile-picture"
        ></img>
      </div>
    </div>
  );
}

export default NavigationBar;
