import { useEffect } from 'react'
import { useAutoScroll } from '../use-auto-scroll'
import { ChatMessage } from './ChatMessage'
import { RobotProfileImage, LoadingSpinnerImage } from '../assets'
import './ChatMessages.css'

function ChatMessages({ chatMessages, isWaiting }) {
    const { containerRef: chatMessagesRef, scrollToBottom } = useAutoScroll();

    useEffect(() => {
      scrollToBottom();
    }, [chatMessages, isWaiting, scrollToBottom]);
  
    return (
      <div ref={chatMessagesRef} className="chat-messages-container">
        {chatMessages.map((chatMessage) => {
          return (
            <ChatMessage
              message={chatMessage.message}
              sender={chatMessage.sender}
              key={chatMessage.id}
            />
          );
        })}
        {isWaiting && (
          <div className="chat-message-robot">
            <img src={RobotProfileImage} className="chat-message-robot-image" />
            <div className="chat-message-robot-content">
              <img src={LoadingSpinnerImage} alt="Loading" className="loading-spinner" />
            </div>
          </div>
        )}
      </div>
    );
  }

  export default ChatMessages;