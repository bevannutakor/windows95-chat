import React, {useContext} from 'react';
import { firebase } from '../Models/firebaseConfig';
import { AuthContext } from './Auth';
import Draggable from 'react-draggable';
import {Window, WindowHeader, WindowContent, Button, TextField} from 'react95';

export default function SignUp(props){
    const { setOpenSignUp } = props
    const { currentUser } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault();
        const { email, username, password } = e.target.elements;
        try{
            firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
                .then((result) => {
                   return result.user.updateProfile({
                        displayName: username.value
                    })
                });
        } catch (error){
            alert(error);
        }
    }
    if(currentUser){
        return(
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        <span>You are authenticated!</span>
                        <Button onClick={() => setOpenSignUp(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <p>Exit this Window and start chatting!</p>
                    </WindowContent>
                </Window>
            </Draggable>
        )
    }

    return(
        <>
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        <span>Sign Up</span>
                        <Button onClick={() => setOpenSignUp(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <form onSubmit={handleSignUp}>
                            <TextField className="auth-text-field" placeholder="Email" type="email" name="email" fullWidth/>

                            <TextField className="auth-text-field" placeholder="Username" type="username" name="username" fullWidth/>

                            <TextField className="auth-text-field" placeholder="Password" type="password" name="password" fullWidth/>

                            <Button type="submit">Submit</Button>
                        </form>
                    </WindowContent>
                </Window>
            </Draggable>
        </>
    )

}