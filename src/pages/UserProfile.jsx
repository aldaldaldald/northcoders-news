import { useContext } from "react";
import { UserContext } from "../contexts/Users";

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p className="loading">Fetching user profile...</p>;
  }

  return (
    <section className="user-profile">
      <h1>User profile</h1>
      <section className="user-profile-card">
        <img
          src={user.avatar_url}
          alt="/src/assets/Portrait_Placeholder.png"
          className="user-page-profile-picture"
        ></img>
        <p className="dim">Username</p>
        <p>{user.username}</p>
        <p className="brightness">Name</p>
        <p>{user.name}</p>
      </section>
    </section>
  );
}

export default UserProfile;
