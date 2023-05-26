import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const handleGithubProvider = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const handleGoogleProvider = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe();
    }, []);

    const infoAuth = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        handleGithubProvider,
        handleGoogleProvider
    };
    return (
        <AuthContext.Provider value={infoAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;