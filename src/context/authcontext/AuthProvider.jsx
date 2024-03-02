import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);

  // * user observation

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (infoUser) => {
    setLoading(true);
    return updateProfile(auth.currentUser, infoUser);
  };
  const passwordReset = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    userInfo,
    googleLogin,
    logout,
    loading,
    updateUser,
    passwordReset,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
