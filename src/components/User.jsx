import React, { useContext } from "react";
import UserContext from "../context/User";

const User = function () {
  const { user, login, logout } = useContext(UserContext);
  return (
    <>
      {user ? (
        <form
          onSubmit={function (e) {
            e.preventDefault();
            logout();
          }}
        >
          <span>
            {user.username} - {user.roll}
          </span>
          <button>salir</button>
        </form>
      ) : (
        <form
          onSubmit={function (e) {
            e.preventDefault();
            const { elements } = e.target;
            const { username, password } = elements;
            login(username.value, password.value);
          }}
        >
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Usuario"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Clave"
          />
          <button>Ingresar</button>
        </form>
      )}
    </>
  );
};

export default User;
