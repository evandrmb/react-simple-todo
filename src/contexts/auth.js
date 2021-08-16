import React, { useEffect, useState, createContext, useCallback } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const history = useHistory();

  const signUp = useCallback(
    async (event) => {
      try {
        event.preventDefault();

        const { email, password } = event.target.elements;

        const userCredential = await api
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  useEffect(() => {
    api.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
