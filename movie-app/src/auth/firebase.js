import { initializeApp } from "firebase/app";
import { getAuth , 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBD1RwhzaoMetq3DuFwejDVcZjsLNLdO-c",
  authDomain: "movie-app-c69f1.firebaseapp.com",
  projectId: "movie-app-c69f1",
  storageBucket: "movie-app-c69f1.appspot.com",
  messagingSenderId: "567967489917",
  appId: "1:567967489917:web:3c6b10bc470ad4191d3614"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async(email, password, navigate, displayName) => {

  try {
    let userCredential = await createUserWithEmailAndPassword( auth,
    email, 
    password,
    
    );
    await updateProfile(auth.currentUser, {
    displayName: displayName, 
    });
    navigate("/")
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async(email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(auth, email, 
    password
    );
    navigate("/")
    console.log(userCredential);
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
      
    }
  });


};


export const logOut = () => {
  signOut(auth);
};


export const signUpProvider = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
     console.log(error);
  });
}

