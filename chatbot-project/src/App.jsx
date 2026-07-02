import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessages } from './components/ChatMessages'

import './App.css'

function App() {
  const [isWaiting, setIsWaiting] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "What is todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is June 30",
      sender: "robot",
      id: "id4",
    },
  ]);
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  return (
    <div className="app-container">
      
      <ChatMessages
        chatMessages={chatMessages}
        isWaiting={isWaiting}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        isWaiting={isWaiting}
        setIsWaiting={setIsWaiting}
      />
    </div>
  );
}

export default App
