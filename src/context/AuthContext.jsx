// ===================== AuthContext.jsx =====================
import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage safely
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser));
        setToken(savedToken);
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });

      if (!res.data || !res.data.user || !res.data.token) {
        throw new Error("Invalid server response");
      }

      const loggedInUser = res.data.user;
      const jwtToken = res.data.token;

      setUser(loggedInUser);
      setToken(jwtToken);

      localStorage.setItem("user", JSON.stringify(loggedInUser));
      localStorage.setItem("token", jwtToken);

      return loggedInUser;
    } catch (error) {
      throw error.response?.data || { message: error.message || "Login failed" };
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isLoggedIn: !!token,
        role: user?.role || null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

