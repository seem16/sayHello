import React from 'react'
import './message.css';
// import { Redirect } from 'react-router'
// import {Redirect} from "react-router-dom";

import DialogUsers from "./dialog-users/dialog-users";
import MessageText from "./message-text/message-text";
import {Field, reduxForm} from "redux-form";
import { required, maxLength } from  '../../utils/validators/validators';
import { TextArea } from '../common/FormsComtrol/FormsControl'

const maxLength100 = maxLength(100)

const Message = (props) => {
  /*userDialog*/
  let userDialog = props.messagePage.userDialogData
    .map(userName => <DialogUsers id={userName.id} userName={userName.userName} userPhoto={ userName.photo }
                                  key={userName.id}/>);
  /*messageDialog*/
  let messageDialog = props.messagePage.messageDialogData
    .map(message => <MessageText id={message.id} messageText={message.message} key={message.id}/>);

  let addMessage = (valueTextMessage) => {
    props.addMessage(valueTextMessage.textAreaMessage);
  }

  // if (!props.isAuth) return <Redirect to="/login" />

  return (
    <div className="messages">
      <div className="container">
        <div className="messages-items">

          <div className="user-message">
            { userDialog }
          </div>

          <div className="dialogs-items">
            { messageDialog }
            <MessageReduxForm onSubmit={ addMessage } />
          </div>

        </div>
      </div>
    </div>
  )
}

const MessageForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="dialogs-form">
      <div className="dialogs-form-text">
              <Field component={ TextArea } className="dialogs-form-textarea" name="textAreaMessage"
                     id="" cols="30" rows="10" validate={[ required, maxLength100 ]}></Field>
      </div>
      <button className="dialogs-form-btn" type="submit">Send</button>
    </form>
  )
}

const MessageReduxForm = reduxForm({ form: 'messageForm' })(MessageForm)

export default Message;