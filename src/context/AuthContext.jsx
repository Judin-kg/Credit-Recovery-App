// import React, { createContext, useContext, useEffect, useState } from "react";
// import { getCurrentUser, isAuthenticated, logoutUser } from "../services/authService";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (isAuthenticated()) {
//       setUser(getCurrentUser());
//     }
//     setLoading(false);
//   }, []);

//   const logout = () => {
//     logoutUser();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         setUser,
//         loading,
//         isAuthenticated: !!user,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };



import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser, isAuthenticated, logoutUser } from "../services/authService";

export const AuthContext = createContext(); // <-- export added

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated()) {
      setUser(getCurrentUser());
    }
    setLoading(false);
  }, []);

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        isAuthenticated: !!user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Optional hook (you can still keep it)
export const useAuth = () => {
  return useContext(AuthContext);
};
