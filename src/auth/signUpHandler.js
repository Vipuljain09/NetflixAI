import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

const signUpHandler = async (name, email, password) => {
  const response = {};
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      response.user = user;
      
      updateProfile(user, {
        displayName: name,
      }).then(() => {
        return response;
      });
    })
    .catch((error) => {
      response.error = error;
      return response;
    });
};

export default signUpHandler;
