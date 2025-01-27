import auth from "./firebase"; // Import auth as a named import
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { login, logout } from "../redux/slices/authSlice"; 
import store from "../redux/store";


const dispatchLogin = (user) => {
  store.dispatch(login(user));
};


const dispatchLogout = () => {
  store.dispatch(logout());
};


export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  displayName,
  isAdmin = false
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;


    await updateProfile(user, { displayName });


    dispatchLogin(user);

    return userCredential;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw new Error(error.message);
  }
};


export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

 
    dispatchLogin(userCredential.user);

    return userCredential;
  } catch (error) {
    console.error("Error signing in:", error.message);
    throw new Error(error.message);
  }
};

// Sign in with Google
export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Dispatch login action to Redux
    dispatchLogin(user);

    return result;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw new Error(error.message);
  }
};

// Sign out the current user
export const doSignOut = async () => {
  try {
    await auth.signOut();

    // Dispatch logout action to Redux
    dispatchLogout();
  } catch (error) {
    console.error("Error signing out:", error.message);
    throw new Error(error.message);
  }
};

// Send password reset email
export const doPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent.");
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
    throw new Error(error.message);
  }
};

// Change password for the currently logged-in user
export const doPasswordChange = async (password) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is signed in to change the password.");
  }

  try {
    await updatePassword(user, password);
    console.log("Password updated successfully.");
  } catch (error) {
    console.error("Error changing password:", error.message);
    throw new Error(error.message);
  }
};

// Send email verification to the currently logged-in user
export const doSendEmailVerification = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No user is signed in to send an email verification.");
  }

  try {
    await sendEmailVerification(user, {
      url: `${window.location.origin}/home`,
    });
    console.log("Verification email sent.");
  } catch (error) {
    console.error("Error sending email verification:", error.message);
    throw new Error(error.message);
  }
};
