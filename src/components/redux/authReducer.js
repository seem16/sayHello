import {userAPI} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReduer = (state = initialState, action) => {
  if (action.type === SET_USER_DATA) {
    return {
      ...state,
      ...action.data
    }
  }
  return state;
}

export const setAuthUserDataAC = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA, data: { userId, email, login, isAuth }
  }
}

export const authThunkCreator = () => (dispatch) => {
  userAPI.auth().then(data => {
    if (data.resultCode === 0) {
      let {id, email, login} = data.data
      dispatch(setAuthUserDataAC(id, email, login, true))
    }
  })
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  userAPI.login( email, password, rememberMe ).then(data => {
    if (data.resultCode === 0) {
      dispatch(authThunkCreator())
    }
  })
}

export const logOutThunkCreator = () => (dispatch) => {
  userAPI.logOut().then(data => {
    if (data.resultCode === 0) {
      dispatch(authThunkCreator(null, null, null, false))
    }
  })
}

export default authReduer;