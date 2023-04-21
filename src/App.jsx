import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import UserContext from "./context/User";
import Admin from "./components/Admin";
import Products from "./components/Products";

const App = function () {
  const { esAdmin } = useContext(UserContext);
  return (
    <>
      <Navbar />
      {esAdmin() ? <Admin /> : <Products />}
    </>
  );
};

export default App;
