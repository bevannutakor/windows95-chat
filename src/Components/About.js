import React, {useState} from 'react'
import {Window, WindowHeader, WindowContent, Cutout, Anchor, Button} from 'react95';
import Draggable from 'react-draggable';

export default function About(props){
    const { setAboutModal } = props
    return(
        <>
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        About this Project
                        <Button onClick={() => setAboutModal(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <Cutout>
                        This project is a chat app built with <Anchor href="https://react95.io/">{' '}react95.io</Anchor> for its UI. This is a passion project since I have always been fascinated by early computers and their operating systems. The idea of a chat app incorporated into this comes with the nostalgia of early chat forums of the early 90s.
                        
                        </Cutout>
                    </WindowContent>
                </Window>
            </Draggable>
        </>
    )
}