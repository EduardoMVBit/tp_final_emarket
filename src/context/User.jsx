import { createContext, useState, useContext } from "react";
import UsersContext from "./Users";

const UserContext = createContext(null);

const UserProvider = function ({ children }) {
  const [user, setUser] = useState(null);
  const { users } = useContext(UsersContext);
  const login = function (username, password) {
    const estaRegitrado = users.find(function (user) {
      return user.username == username;
    });
    if (estaRegitrado != undefined && estaRegitrado.password == password) {
      setUser(estaRegitrado);
    } else {
      setUser(null);
    }
  };
  const logout = function () {
    setUser(null);
  };

  const esAdmin = function () {
    if (user != null && user.roll == "administrador") {
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, esAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
export default UserContext;
