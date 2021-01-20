import './message-text.css';

const MessageText = (props) => {
  return (
    <div className="dialog-text">{props.messageText}</div>
  )
}

export default MessageText;