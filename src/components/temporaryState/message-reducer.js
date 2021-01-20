let ADD_MESSAGE = 'ADD-MESSAGE';
let CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {

  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 5,
      message: state.newTextMessageValue,
    }
    state.messageDialogData.push(newMessage);
    state.newTextMessageValue = ''
  } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
    state.newTextMessageValue = action.text;
  }

  return state;
}

export default messageReducer;