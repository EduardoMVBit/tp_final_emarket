import { createContext, useState } from "react";

const SearchContext = createContext(null);

const SearchProvider = function ({ children }) {
  const [keyword, setKeyword] = useState(null);
  return (
    <SearchContext.Provider value={{ keyword, setKeyword }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider };
export default SearchContext;
