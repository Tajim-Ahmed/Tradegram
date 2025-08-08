import React, { createContext, useEffect, useState, useContext } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // inside AuthProvider
const logout = async () => {
  try {
    await signOut(auth);
    setUser(null);
    console.log("User logged out");
  } catch (err) {
    console.error("Logout error:", err.message);
  }
};

  return (
    <AuthContext.Provider value={{ user, loading ,logout}}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
