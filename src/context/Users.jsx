import { createContext, useState } from "react";
import userData from "../data/users";

const UsersContext = createContext();

const UsersProvider = function ({ children }) {
  const [users, setUsers] = useState(userData);
  const register = function (username, password, roll) {
    setUsers([...users, { username, password, roll }]);
  };
  return (
    <UsersContext.Provider value={{ users, register }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider };
export default UsersContext;
