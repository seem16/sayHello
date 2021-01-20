import MyPosts from "./my-posts";
import {connect} from "react-redux";
import {addNewPostActionCreator} from "../../redux/profileReducer";


let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postData,
    newPostTextValue: state.profilePage.newPostTextValue,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (textAreaPostValue) => dispatch(addNewPostActionCreator(textAreaPostValue)),
  }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;