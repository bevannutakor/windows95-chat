import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable'
import {Window, WindowHeader, WindowContent, Button, List, ListItem, Divider} from 'react95';

import Chatroom from './Chatroom';
import { db } from '../../Models/firebaseConfig';

export default function AllChatRooms(props){ 
    const { setAllRoomsModal } = props;
    const [chatroomName, setChatRoomName] = useState([]);
    const [chatroom, setChatroom] = useState({isOpen: false, roomId: '', roomName: ''});
    
    const openChatRoom = (e, roomId, roomName) => {
        e.preventDefault();
        setChatroom({isOpen: true, roomId: roomId, roomName: roomName});
    }
    useEffect(() => {
        if(db){
            const unsubscribe = db
                .collection("chat-rooms")
                .limit(100)
                .onSnapshot(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                    setChatRoomName(data);
                })
            return unsubscribe
        }
    }, [db])
    return (
        <>
        {!chatroom.isOpen && 
            <Draggable>
                <Window className="window">
                    <WindowHeader className="window-header">
                        <span>Chat Room List</span>
                        <Button onClick={() => setAllRoomsModal(false)}>
                            <span className="close">X</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <List className="rooms-list">
                            {chatroomName && chatroomName.map(room => (
                                <>
                                    <ListItem key={room.id} onClick={(e) => openChatRoom(e, room.id, room.data.name)}>{room.data.name}</ListItem>
                                </>
                            ))}
                        </List>
                    </WindowContent>
                </Window>
            </Draggable>
        }

        {chatroom.isOpen && 
            <Chatroom chatroom={chatroom} setChatroom={setChatroom}/>
        }
        </>
    )
}