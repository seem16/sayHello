let ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    userDialogData: [
      {id: 1, userName: 'some123HEX', photo: 'https://cdn.pixabay.com/photo/2020/11/22/20/39/giraffe-5767909_960_720.jpg'},
      {id: 2, userName: 'eur0phy', photo: 'https://cdn.pixabay.com/photo/2019/05/18/13/34/branches-4211837_960_720.jpg'},
      {id: 3, userName: 'apeXTWIN', photo: 'https://cdn.pixabay.com/photo/2019/02/03/16/52/taiwan-3973014_960_720.jpg'},
      {id: 4, userName: 'white-rabbit', photo: 'https://cdn.pixabay.com/photo/2019/12/29/13/59/winter-4727156_960_720.jpg'},
    ],
    messageDialogData: [
      {id: 1, message: 'Will u come to the party'},
      {id: 2, message: 'get this app for free'},
      {id: 3, message: 'fix my screen'},
      {id: 4, message: 'Did u play in the "among us"'},
    ],
    // newTextMessageValue: ''
}

const messageReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 5,
      message: action.valueTextMessage,
    }
    return {
      ...state,
      messageDialogData: [...state.messageDialogData, newMessage],
      // newTextMessageValue: ''
    }
  }
  return state;
}


export const addMessageActionCreator = (valueTextMessage) => {
  return {
    type: ADD_MESSAGE, valueTextMessage
  }
}

export default messageReducer;