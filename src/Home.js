import React, {useState} from 'react';
import Draggable from 'react-draggable';
import world from './Assets/world.png';
import computer from './Assets/computer_explorer.png';
import search from './Assets/search_directory.png';
import folder from './Assets/directory_closed_cool.png';

import ChatRooms from './Components/ChatRooms/ChatRooms';
import TaskBar from './Components/TaskBar';

export default function Home(){
    const [personalChatModal, setPersonalChatModal] = useState(false);
    const [chatRoomModal, setChatRoomModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);

    return(
        <>
            <div className="desktop-container">
                <Draggable>
                    <div className="windows-icon-container">
                        <img src={computer} className="windows-icon" alt=""/>
                        <p className="text-font-size">Personal Chats</p>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="windows-icon-container" onClick={() => setChatRoomModal(true)}>
                        <img src={world} className="windows-icon" alt=""/>
                        <div>
                            <p className="text-font-size">Chatrooms</p>
                        </div>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="windows-icon-container">
                        <img src={search} className="windows-icon" alt=""/>
                        <div>
                            <p className="text-font-size">Find People</p>
                        </div>
                    </div>
                </Draggable>

                <Draggable>
                    <div className="windows-icon-container">
                        <img src={folder} className="windows-icon" alt=""/>
                        <div>
                            <p className="text-font-size">About</p>
                        </div>
                    </div>
                </Draggable>
            </div>
            
            {chatRoomModal && (
                <ChatRooms setChatRoomModal={setChatRoomModal}/>
            )}

            <TaskBar/>
        </>
    ) 
}