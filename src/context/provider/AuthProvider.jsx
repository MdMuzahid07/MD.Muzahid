import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const googleSignIn = async () => {
    return await signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const authValue = { user, googleSignIn };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
