import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  //const [user, setUser] = useState({id:1, role:'regular'});

  const login = (userCredentials) => setUser({
    id:1,
    name: "Tulio",
    email:'tulio@gmail.com',
    role:'regular',
    img: "https://upload.wikimedia.org/wikipedia/en/e/e3/Bjorkvolta.png"
  });
  const logout = () => setUser(null);

  const isLogged = () => !!user;

  const contextValue = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}
