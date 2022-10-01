import React, {useState, useEffect, useContext} from 'react';
import Draggable from 'react-draggable'
import { v4 as uuidv4} from 'uuid';
import {Window, WindowHeader, WindowContent, Button, TextField, Fieldset, Cutout} from 'react95';

import { db } from '../../Models/firebaseConfig';
import { AuthContext } from '../Auth';

export default function Chatroom(props){
    const { currentUser } = useContext(AuthContext);
    const { chatroom, setChatroom } = props;

    const [messageList, setMessageList] = useState([]);
    //start messages collection
    //pull messages from chatroom id
    const sendMessage = (e) => {
        e.preventDefault();
        const { message } = e.target.elements;
        const generateMessageId = uuidv4();
        const messageRef = db.collection("chat-rooms")
            .doc(chatroom.roomId)
            .collection("messages")
            .doc(generateMessageId);

        messageRef.set({
            message: message.value,
            messageId: generateMessageId,
            userId: currentUser.uid,
            created: new Date(),
            userName: currentUser.displayName
        })
    }

    //use useEffect to update messages in real time
    useEffect(() => {
        if(db){
            const unsubscribe = db
                .collection("chat-rooms")
                .doc(chatroom.roomId)
                .collection("messages")
                .orderBy("created")
                .onSnapshot(querySnapshot => {
                    const messageData = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                    setMessageList(messageData);
                })
            return unsubscribe;
        }
    }, [db])

    return(
        <Draggable>
            <Window className="window">
                <WindowHeader className="window-header">
                    <span>{chatroom.roomName}</span>
                    <Button onClick={() => setChatroom({isOpen: false})}>
                        <span className="close">X</span>
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <Cutout className="messagesContainer">
                        {messageList && messageList.map((message) => (
                            <Fieldset id={message.id} label={message.data.userName}>
                                <span>{message.data.message}</span>
                            </Fieldset>
                        ))}
                    </Cutout>
                    <form className="createForm" onSubmit={sendMessage}>
                        <TextField className="width-100" name="message" type="text" placeholder="message"/>
                        <Button type="submit">Send</Button>
                    </form>
                </WindowContent>
            </Window>
        </Draggable>
    )
}