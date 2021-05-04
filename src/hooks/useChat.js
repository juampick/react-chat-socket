import { useEffect, useRef, useState } from "react";
import io  from "socket.io-client";
import {uuid} from "../helpers/uuid";
import {
  SUBSCRIBE_USER_CONNECTED_EVENT,
  SUBSCRIBE_USER_DISCONNECTED_EVENT,
  SUBSCRIBE_MESSAGE_EVENT,
  SUBSCRIBE_TYPING_EVENT,
  EMIT_TYPING_EVENT,
  EMIT_IMAGE_MESSAGE_EVENT,
  EMIT_TEXT_MESSAGE_EVENT
} from "../constants/constants";

const SOCKET_SERVER_URL = process.env.SOCKET_IO_SERVER;

const useChat = (userName) => {
  const [messages, setMessages] = useState([]); // Messages array
  const [typers, setTypers] = useState([]); // Typers array
  const socketRef = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
      query: { username:  userName }
    });

    // Events to subscribe
    socketRef.current.on(SUBSCRIBE_USER_CONNECTED_EVENT, username => {
      // console.log(`user-connected: ${username}`);
      //ToDo: save this in a variable? present on chat component?
    })

    socketRef.current.on(SUBSCRIBE_USER_DISCONNECTED_EVENT, username => {
      // console.log(`user-disconnected: ${username}`);
      //ToDo: save this in a variable? present on chat component?
    })

    // Listens for incoming messages
    socketRef.current.on(SUBSCRIBE_MESSAGE_EVENT, (message) => {
      const receivedMessage = {
        ...message,
        uuid: uuid()
      };
      setMessages((messages) => [...messages, receivedMessage]);
    });

    socketRef.current.on(SUBSCRIBE_TYPING_EVENT, typers => {
      setTypers(typers);
    })

    // When connecton is closed, disconnect
    return () => {
      socketRef.current.disconnect();
    };
  }, [userName]);


  const sendTextMessageEvent = (message) => {
    socketRef.current.emit(EMIT_TEXT_MESSAGE_EVENT, message);
  };

  const sendTypingEvent = (status) => {
    socketRef.current.emit(EMIT_TYPING_EVENT, status);
  }

  const sendImageMessageEvent = (url, altString) => {
    socketRef.current.emit(EMIT_IMAGE_MESSAGE_EVENT, {url: url, alt: altString});
  }

  return { messages, typers, sendTextMessageEvent, sendTypingEvent, sendImageMessageEvent };
};

export default useChat;