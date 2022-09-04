import React, {useState} from 'react';
import { AppBar, Toolbar, Button, List, ListItem, Divider} from 'react95';

import windowsLogo from '../Assets/windows.png'

export default function TaskBar(){
    const [openAppBar, setOpenAppBar] = useState(false);
    return(
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
                    {openAppBar && (
                        <List className="list-dropdown-container" onClick={() => setOpenAppBar(false)}>
                            <ListItem className="list-dropdown-item">
                                <p>Sign Up</p>
                            </ListItem>
                            <Divider />
                            <ListItem className="list-dropdown-item">
                                <p>Log in</p>
                            </ListItem>
                        </List>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    )
}