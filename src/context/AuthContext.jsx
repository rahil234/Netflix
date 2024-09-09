// AuthProvider.js
import React, { createContext, useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig"; // Adjust the path as necessary

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      console.log(user);

      setIsAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(`Failed to sign in: ${error.code}`);
      console.error(error.message);
    }
  };

  const signup = async (email, password, cpassword) => {
    if (password === cpassword) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        setError("Failed to sign in:");
        console.error(error.message);
      }
    } else {
      setError("Both passwords should match.");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, login, signup, logout, error }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
