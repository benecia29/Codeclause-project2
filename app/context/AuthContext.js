import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase";
import firebaseApp from "../firebase";

// Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// Initialize Firebase auth instance here
const auth = getAuth(firebaseApp);

// const appVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//     'size': 'normal',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // ...
//     },
//     'expired-callback': () => {
//         // Response expired. Ask user to solve reCAPTCHA again.
//         // ...
//     }
// });

const AuthContext = createContext();

auth.languageCode = 'it';
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage();

window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
    }
});

// window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
//     'size': 'normal',
//     'callback': (response) => {
//         // reCAPTCHA solved, allow signInWithPhoneNumber.
//         // ...
//     },
//     'expired-callback': () => {
//         // Response expired. Ask user to solve reCAPTCHA again.
//         // ...
//     }
// });

// NOTE: The rest of your code for sending verification code and confirming code should be here.

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
