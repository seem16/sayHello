import {userAPI} from "../api/api";
// import {act} from "@testing-library/react";

let ADD_POST = 'ADD_POST';
// let CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT';
let SET_USER_PROFILE = 'SET_USER_PROFILE';
let SET_STATUS = 'SET_STATUS'

let initialState = {
  postData: [
    {id: 1, text: 'Why is it camera so huge and expensive ???'},
    {id: 2, text: 'Oooo...Nice Lens Man!!!'},
  ],
  newPostTextValue: '',
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      text: action.textAreaPostValue,
    }
    // Create Copy of Store
    return {
      ...state,
      postData: [...state.postData, newPost],
      // newPostTextValue: ''
    }
  } else if (action.type === SET_USER_PROFILE) {
    return {
      ...state, profile: action.profile
    }
  } else if (action.type === SET_STATUS) {
    return {
      ...state,
      status: action.status
    }
  }
  return state;
}


export const addNewPostActionCreator = (textAreaPostValue) => {
  return {
    type: ADD_POST, textAreaPostValue
  }
}

export const setUserProfileAC = (profile) => {
  return {
    type: SET_USER_PROFILE, profile
  }
}

export const setStatusAC = (status) => {
  return {
    type: SET_STATUS, status
  }
}

export const userIDThunkCreator = (userParamsID) => {
  return (dispatch) => {
    let userID = userParamsID ?? 2;
    userAPI.userID(userID).then(response => {
      dispatch(setUserProfileAC(response.data))
    })
  }
}

export const getStatusThunkCreator = (userID) => {
  return (dispatch) => {
    userAPI.getStatus(userID).then(response => {
      dispatch(setStatusAC(response.data))
    })
  }
}

export const updateStatusThunkCreator = (status) => {
  return (dispatch) => {
    userAPI.updateStatus(status)
      .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
      }
    })
  }
}


export default profileReducer;