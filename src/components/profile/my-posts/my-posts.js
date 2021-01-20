import React from 'react';
import './my-posts.css';
import Post from "./post/post";
import {Field, reduxForm} from "redux-form";
import { required, maxLength } from  '../../../utils/validators/validators';
import { TextArea } from '../../common/FormsComtrol/FormsControl'

const maxLength15 = maxLength(15)

const MyPosts = (props) => {

  let post = props.posts
    .map(post => <Post id={post.id} text={post.text} key={post.id}/>)

  let addNewPost = (value) => {
    props.addNewPost(value.textAreaPostValue)
  }

  return (
    <div className="my-post-content">

      <div className="my-post-content-create-post">
        <div className="my-post-content-post-title">
          <h4>Posts</h4>
        </div>
          <PostFormReduxForm onSubmit={ addNewPost }/>
      </div>

      {/*Post*/}
      { post }

    </div>
  )
}

const PostForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit } className="my-post-content-form">
      <Field className='my-post-content-create-post-area' component={ TextArea } name="textAreaPostValue"
             placeholder="Write something" validate={[ required, maxLength15 ]}>
            </Field>
      <button className="my-post-content-create-post-btn" type="submit">Create post</button>
    </form>
  )
}

const PostFormReduxForm = reduxForm({ form: 'postForm' })(PostForm)

export default MyPosts