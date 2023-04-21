import React, { useContext } from "react";
import SearchContext from "../context/Search";

const Search = function () {
  const { keyword, setKeyword } = useContext(SearchContext);
  return (
    <input
      type="text"
      onChange={function (e) {
        e.preventDefault();
        const { value } = e.target;
        if (String(value).toLowerCase().trim().length > 3) {
          setKeyword(String(value).toLowerCase().trim());
        } else {
          setKeyword(null);
        }
      }}
      defaultValue={keyword}
      placeholder="Buscar"
    />
  );
};

export default Search;
