import React, { useState, useEffect } from "react";
import useChat from "../../hooks/useChat";
import { getGiphyGifByQuery } from '../../services/giphyApi';
import ChatMessages from "./ChatMessages/ChatMessages";
import ChatForm from "./ChatForm/ChatForm";
import TypersInfo from "./TypersInfo/TypersInfo";
import "./ChatPage.css";

const ChatContainer = (props) => {
  const { username } = props.match.params;
  const { messages, typers, sendTextMessageEvent, sendTypingEvent, sendImageMessageEvent } = useChat(username); // Creates a websocket and manages messaging
  const [searchGifQuery, setSearchGifQuery] = useState(null);
  const [errorSearchGifQuery, setErrorSearchGifQuery] = useState(null);
  const gifImageDetectionRegex = new RegExp(/^(\/gif)\s[a-zA-Z0-9]+/, 'gm');

  useEffect((props) => {
    // console.log(username);
    //todo: check this checking parameter
      // history.push("/");
  }, [username])

  useEffect(() => {
    async function getGiphyGif() {
      if (searchGifQuery === null) return
      const url = await getGiphyGifByQuery(searchGifQuery);
      if (url) sendImageMessageEvent(url, searchGifQuery)
      if (!url) setErrorSearchGifQuery(`There are not gif with the current query: ${searchGifQuery}`)
    }

    getGiphyGif();

  }, [searchGifQuery])

  const handleNewMessageChange = (message) => {
    sendTypingEvent(true);
    setErrorSearchGifQuery(null); //empty error

    if (message === ''){ //If value is empty/removed
      sendTypingEvent(false);
    }
  };

  const handleSendMessage = (newMessage) => {
    // Decide if its going to be text or image
    sendTypingEvent(false); //Setting as false the typing event.
    if (gifImageDetectionRegex.test(newMessage)){ //Image mode
      const query = newMessage.substr(4, newMessage.length);
      setSearchGifQuery(query);
    } else { //Text mode
      sendTextMessageEvent(newMessage);
    }
  };

  return (
    <div className="chat-room-container">
      <ChatMessages messages={messages} />
      <ChatForm
        onChangeText={handleNewMessageChange}
        onSendMessage={handleSendMessage} />
      <TypersInfo typers={typers} />
      <p className="error-searchgif">{errorSearchGifQuery !== null ? errorSearchGifQuery : null}</p>
    </div>
  );
};

export default ChatContainer;