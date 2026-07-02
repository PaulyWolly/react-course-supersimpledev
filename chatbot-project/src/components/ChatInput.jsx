import { useState } from 'react'
import Chatbot from 'supersimpledev/chatbot'
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages, isWaiting, setIsWaiting }) {
    const [inputText, setInputText] = useState("");
  
    function saveInputText(event) {
      setInputText(event.target.value);
    }
  
    async function sendMessage() {
      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
        },
      ];
  
      setChatMessages(newChatMessages);
      setIsWaiting(true);
  
      try {
        const response = await Chatbot.getResponseAsync(inputText);
  
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: "robot",
            id: crypto.randomUUID(),
          },
        ]);
  
        setInputText("");
      } finally {
        setIsWaiting(false);
      }
    }
  
    function handleKeyDown(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    }
  
    return (
      <div className="chat-input-container">
        <input
          placeholder="Send a message to Chatbot"
          size="30"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={handleKeyDown}
          className="chat-input-text"
        />
        <button 
          onClick={sendMessage}
          disabled={inputText.length === 0 || isWaiting}
          className="chat-input-button"
        >Send</button>
      </div >
    );
  }