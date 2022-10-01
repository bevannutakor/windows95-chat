import React, {useState, useContext} from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Divider} from 'react95';
import { firebase } from '../Models/firebaseConfig';
import windowsLogo from '../Assets/windows.png'
import SignUp from './SignUp';
import SignIn from './SignIn';
import {AuthContext} from './Auth';

export default function TaskBar(){
    const { currentUser } = useContext(AuthContext);

    const [openAppBar, setOpenAppBar] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const signUpModal = () => {
        setOpenAppBar(false);
        setOpenSignUp(true);
    }

    const signInModal = () => {
        setOpenAppBar(false);
        setOpenSignIn(true);
    }
    return(
        <>
            <AppBar className="App-Bar">
                <Toolbar className="ToolBar">
                    <div className="start-button-container">
                        <Button 
                        onClick={() => {setOpenAppBar(!openAppBar)}}
                        active={openAppBar}
                        className="start-button">
                            <img src={windowsLogo} alt="" className="windows-start-logo"/>
                            Start
                        </Button>
                        {openAppBar && !currentUser && (
                            
                            <List className="list-dropdown-container">
                                <ListItem className="list-dropdown-item" onClick={signUpModal}>
                                    <p>Sign Up</p>
                                </ListItem>
                                <Divider />
                                <ListItem className="list-dropdown-item" onClick={signInModal}>
                                    <p>Log in</p>
                                </ListItem>
                                <Divider />
                                <ListItem className="list-dropdown-item" onClick={firebase.auth().signOut()}>
                                    <p>Log out</p>
                                </ListItem>
                            </List>
                        )}

                        {openAppBar && currentUser && (
                            <List className="list-dropdown-container">
                                <ListItem className="list-dropdown-item" onClick={firebase.auth().signOut()}>
                                    <p>Log out</p>
                                </ListItem>
                            </List>
                        )}
                    </div>
                </Toolbar>
            </AppBar>

            {openSignUp && (
                <SignUp setOpenSignUp={setOpenSignUp}/>
            )}
            {openSignIn && (
                <SignIn setOpenSignIn={setOpenSignIn}/>
            )}
        </>
    )
}