let ADD_POST = 'ADD-POST';
let CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      text: state.newPostTextValue,
    }
    state.postData.push(newPost);
    state.newPostTextValue = '';
  } else if (action.type === CHANGE_NEW_POST_TEXT) {
    state.newPostTextValue = action.text;
  }
  return state;
}

export default profileReducer;