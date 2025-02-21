import { useContext } from "react";
import { UserContext } from "../contexts/Users";

function UserProfile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p>Loading user profile...</p>;
  }

  return (
    <section>
      <br></br>
      <img
        src={user.avatar_url}
        alt="/src/assets/Portrait_Placeholder.png"
        className="user-profile-picture"
      ></img>
      <p>{user.username}</p>
      <p>{user.name}</p>
      <p>My articles...</p>
    </section>
  );
}

export default UserProfile;
