// import { createContext } from "react";

// const userContext = createContext(null);
// export default userContext;

import { createContext, useState } from "react";

const userContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]); // Initialize empty array

  return (
    <userContext.Provider value={{ users, setUsers, transactions, setTransactions }}>
      {children}
    </userContext.Provider>
  );
}

export default userContext;
