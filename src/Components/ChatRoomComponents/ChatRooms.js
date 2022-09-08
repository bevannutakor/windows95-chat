import React, {useContext, useState} from 'react';
import {Window, WindowHeader, WindowContent, Button} from 'react95';
import Draggable from 'react-draggable';

import AllChatRooms from './AllChatRooms';
import CreateChatRoom from './CreateChatRoom';
import {AuthContext} from '../Auth';
export default function ChatRooms(props){
    const { currentUser } = useContext(AuthContext);
    const { setChatRoomModal } = props

    const [allRoomsModal,setAllRoomsModal] = useState(false);
    const [createRoomModal, setCreateRoomModal] = useState(false);

    if(allRoomsModal){
        return <AllChatRooms setAllRoomsModal={setAllRoomsModal}/>
    }

    if(createRoomModal){
        return <CreateChatRoom setCreateRoomModal={setCreateRoomModal}/>
    }
    return (
        <>
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        <span>ChatRooms.exe</span>
                        <Button onClick={() => setChatRoomModal(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        {currentUser ? (
                            <>
                            <div className="chatroom-button-group">
                                <Button onClick={() => setAllRoomsModal(true)}>See All ChatRooms</Button>
                                <Button onClick={() => setCreateRoomModal(true)}>Create Your Own Room</Button>
                            </div>

                            
                            </>
                        ) : (
                            <p>Please Log in using the start button at the bottom to use this feature</p>
                        )}
                    </WindowContent>
                </Window>
            </Draggable>
        </>

    )
}