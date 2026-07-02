import { RobotProfileImage, UserProfileImage } from '../assets'
import './ChatMessage.css'

export function ChatMessage({ message, sender }) {

    // const message = props.message;
    // const sender = props.sender;
    // const { message, sender } = props;
  
    return (
      <div className = {
        sender === "robot" 
        ? "chat-message-robot" 
        : "chat-message-user"
      }>
        {sender === "robot" && <img src={RobotProfileImage} className = "chat-message-robot-image" />}
        <div className={
          sender === "robot" 
          ? "chat-message-robot-content" 
          : "chat-message-user-content"
        }>
          {message}
        </div>
        {sender === "user" && <img src={UserProfileImage} className = "chat-message-user-image" />}
      </div>
    );
  }