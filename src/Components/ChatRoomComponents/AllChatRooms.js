import React, {useState, useEffect} from 'react';
import Draggable from 'react-draggable'
import {Window, WindowHeader, WindowContent, Button, List, ListItem, Divider} from 'react95';

import { db } from '../../Models/firebaseConfig';

export default function AllChatRooms(props){ 
    const { setAllRoomsModal } = props;
    const [chatroomName, setChatRoomName] = useState([])
    
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
                                    <ListItem key={room.id}>{room.data.name}</ListItem>
                                    <Divider/>
                                </>
                            ))}
                        </List>
                    </WindowContent>
                </Window>
            </Draggable>
        </>
    )
}