import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    errorCode: "",
    errorMessage: "",
  });
  const provider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    setLoading(true);
    return await signInWithPopup(auth, provider);
  };

  const createUserEmailAndPassword = async (email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        sendEmailVerification(userCredential.user, {
          handleCodeInApp: true,
          url: "https://mdmuzahid.dev/dashboard",
        }).then(() => {
          toast.success("Please check your email and verify your account", {
            id: "email verification",
          });
        });

        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  };

  const loginEmailAndPassword = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const passwordReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Please check your inbox", { id: "password reset" });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError({
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  };

  //   observer to get current user info
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
        console.log("user is signed out");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authValue = {
    user,
    error,
    loading,
    googleSignIn,
    logOut,
    createUserEmailAndPassword,
    loginEmailAndPassword,
    passwordReset,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
