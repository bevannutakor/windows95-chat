import React from 'react';
import Draggable from 'react-draggable'
import {Window, WindowHeader, WindowContent, Button, List, ListItem, Divider } from 'react95';

import { db } from '../../Models/firebaseConfig';

export default function AllChatRooms(props){ 
    const { setAllRoomsModal } = props;
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
                            <ListItem size="lg">Global</ListItem>
                            <Divider/>
                            <ListItem size="lg">Global</ListItem>
                            <Divider/>
                            <ListItem size="lg">Global</ListItem>
                            <Divider/>
                            <ListItem size="lg">Global</ListItem>
                            <Divider/>
                            <ListItem size="lg">Global</ListItem>
                        </List>
                    </WindowContent>
                </Window>
            </Draggable>
        </>
    )
}