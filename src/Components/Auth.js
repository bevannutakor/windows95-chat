import React, {useEffect, useState} from 'react';
import { firebase } from '../Models/firebaseConfig';
import { Hourglass } from 'react95';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setCurrentUser(user);
            }
        })
        setLoading(false);
    }, [])

    if(loading){
        return <Hourglass size={32} />;
    }
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}