import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CardGiftcardRoundedIcon from "@mui/icons-material/CardGiftcardRounded";
import GifRoundedIcon from "@mui/icons-material/GifRounded";
import EmojiEmotionsRoundedIcon from "@mui/icons-material/EmojiEmotionsRounded";
import Message from "./Message";
import PropTypes from "prop-types";

import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      console.log("Sending message:", messageData);
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    
    <div className="chat">
      <ChatHeader />

      <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      </div>

      <div className="chat__input">
            {/* <AddCircleRoundedIcon fontSize='large'/> */}

          <input type="text" value={currentMessage} placeholder="Enter text here...." onChange={(event) => {setCurrentMessage(event.target.value);}} onKeyDown={(event) => {event.key === "Enter" && sendMessage();}}/>
      		    <button className='chat__inputButton' onClick={sendMessage}>&#9658;</button>
            

            <div className="chat__inputIcons">
                {/* <CardGiftcardRoundedIcon fontSize='large'/> */}
                {/* <GifRoundedIcon fontSize='large'/> */}
                {/* <EmojiEmotionsRoundedIcon fontSize='large'/> */}
            </div>
        </div>
    </div>
  );
}

export default Chat;
