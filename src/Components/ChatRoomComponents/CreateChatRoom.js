import React, {useState} from 'react'
import {Window, WindowHeader, WindowContent, TextField, Button} from 'react95';
import Draggable from 'react-draggable';
import { v4 as uuidv4} from 'uuid';

import { db } from '../../Models/firebaseConfig';

export default function CreateChatRoom(props){
    const { setCreateRoomModal } = props
    const handleCreateRoom = (e) => {
        e.preventDefault();
        const { roomName } = e.target.elements;
        const generateDocId = uuidv4();
        db.collection("chat-rooms").doc(generateDocId).set({
            name: roomName.value,
            id: generateDocId
        })
    }

    return(
        <>
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        <span>Create Room</span>
                        <Button onClick={() => setCreateRoomModal(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <form className="createRoomForm" onSubmit={handleCreateRoom}>
                            <TextField placeholder="Enter name of your chatroom" name="roomName" type="text" className="width-100"/>
                            <Button type="submit">Create</Button>
                        </form>
                    </WindowContent>
                </Window>
            </Draggable>
        </>
    )
}