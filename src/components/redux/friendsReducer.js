import {userAPI} from "../api/api";

let FOLLOW = 'FOLLOW';
let NOTFOLLOW = 'NOT_FOLLOW';
let SET_FRIENDS = 'SET_FRIENDS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  friendsData: [],
  pageSize: 24,
  totalFriendsCount: 800,
  currentPage: 1,
  isFetching: false,
  followInProcessing: [],
}

const friendsReducer = (state = initialState, action) => {
  if(action.type === FOLLOW) {
    return {
      ...state,
      friendsData: state.friendsData.map(u => {
        if(u.id === action.userId) {
          return { ...u, followed: true }
        }
        return u;
      })
    }
  }
  else if(action.type === NOTFOLLOW) {
    return {
      ...state,
      friendsData: state.friendsData.map(u => {
        if(u.id === action.userId) {
          return { ...u, followed: false }
        }
        return u;
      })
    }
  } else if (action.type === SET_FRIENDS) {
    return {
      ...state,
      friendsData: action.friends
    }
  } else if (action.type === SET_CURRENT_PAGE) {
    return { ...state, currentPage: action.pageNum }
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return { ...state, isFetching: action.isFetching }
  } else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
    return { ...state,
      followInProcessing: action.isFetching
        ? [...state.followInProcessing, action.userId]
        : state.followInProcessing.filter(id => id !== action.userId)
    }
  }
  return state;
}



export const followAC = (userId) => {
  return {type: FOLLOW, userId }
}

export const notFollowAC = (userId) => {
  return { type: NOTFOLLOW, userId }
}

export const setFriendsAC = (friends) => {
  return { type: SET_FRIENDS, friends }
}

export const setCurrentPageAC = (pageNum) => {
  return { type: SET_CURRENT_PAGE, pageNum }
}

export const toggleIsFetchingAC = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const toggleFollowingProgressAC = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

// *****Thunk*****

export const getFriendsThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetchingAC(true))
    // if(this.props.friends.length === 0) {

    userAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetchingAC(false))
      dispatch(setFriendsAC(data.items))
    })
  }
}

export const followThunkCreator = (friendId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, friendId))
    userAPI.follow(friendId).then(data => {
      if (data.resultCode === 0) dispatch(followAC(friendId))
      dispatch(toggleFollowingProgressAC(false, friendId))
    })
  }
}

export const unfollowThunkCreator = (friendId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgressAC(true, friendId))
    userAPI.notFollow(friendId).then(data => {
      if (data.resultCode === 0) dispatch(notFollowAC(friendId));
      dispatch(toggleFollowingProgressAC(false, friendId))
    })
  }
}



export default friendsReducer;