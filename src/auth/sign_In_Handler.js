import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const signInHandler = async (email, password) => {
  const response = {};
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return response
    })
    .catch((error) => {
      response.error = error;
      return response;
    });

};

export default signInHandler;
