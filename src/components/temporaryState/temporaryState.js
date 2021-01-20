import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let temporaryStore = {
  _state: {
    profilePage: {
      postData: [
        {id: 1, text: 'Why is it camera so huge and expensive ???'},
        {id: 2, text: 'Oooo...Nice Lens Man!!!'},
      ],
      newPostTextValue: '',
    },

    messagePage: {
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
      newTextMessageValue: ''
    },

    friendPage: {
      friendsData: [
        {id: 1, name: 'some123HEX', photo: 'https://cdn.pixabay.com/photo/2020/11/22/20/39/giraffe-5767909_960_720.jpg'},
        {id: 2, name: 'eur0phy', photo: 'https://cdn.pixabay.com/photo/2019/05/18/13/34/branches-4211837_960_720.jpg'},
        {id: 3, name: 'apeXTWIN', photo: 'https://cdn.pixabay.com/photo/2019/02/03/16/52/taiwan-3973014_960_720.jpg'},
        {id: 4, name: 'white-rabbit', photo: 'https://cdn.pixabay.com/photo/2019/12/29/13/59/winter-4727156_960_720.jpg'},
      ],
    },
  }, // state
  _callSubscriber() {
    console.log('State changed');
  },
  getState() {
    return this._state;
  },
  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostTextValue,
    }
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostTextValue = ''
    this._callSubscriber();
  },
  changeNewPostText(text) {
    this._state.profilePage.newPostTextValue = text;
    this._callSubscriber();
  },
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.messagePage.newTextMessageValue,
    }
    this._state.messagePage.messageDialogData.push(newMessage);
    this._state.messagePage.newTextMessageValue = ''
    this._callSubscriber();
  },
  changeNewMessageText(text) {
    this._state.messagePage.newTextMessageValue = text;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action)
    messageReducer(this._state.messagePage, action)
    this._callSubscriber();
  },

}

export const addNewPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}
export const updateNewPostTextActionCreator = (value) => {
  return {
    type: 'CHANGE-NEW-POST-TEXT',
    text: value
  }
}

export const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}

export const changeNewMessageTextActionCreator = (value) => {
  return {
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    text: value
  }
}

export default temporaryStore;

