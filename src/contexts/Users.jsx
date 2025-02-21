import { useContext, useEffect, createContext, useState } from "react";
import { fetchUsers } from "../utils/api";

export const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((fetchedUsers) => {
        setUser(fetchedUsers.users[4]);
        setUsers(fetchedUsers.users);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, users, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};
