import React from 'react';
import './my-posts.css';

import Post from "./post/post";
import {addNewPostActionCreator, updateNewPostTextActionCreator} from "../../temporaryState/temporaryState";

const MyPosts = (props) => {
  let post = props.posts.postData
    .map(post => <Post id={post.id} text={post.text} />)

  let addNewPost = () => {
    props.dispatch(addNewPostActionCreator())
  }

  let updateNewPostText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  }

  return (
    <div className="my-post-content">
      <div className="my-post-content-post-title">
        <h4>Posts</h4>
      </div>
      <div className="my-post-content-create-post">
          <textarea className="my-post-content-create-post-area" onChange={ updateNewPostText }
                    name="" id="" cols="30" rows="10" placeholder="Write something"
                    value={ props.posts.newPostTextValue }>
          </textarea>
        <div className="my-post-content-create-post-btn" onClick={ addNewPost }>Create post</div>
      </div>

      {/*Post*/}
      { post }

    </div>
  )
}

export default MyPosts