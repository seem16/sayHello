import './post.css';

const Post = (props) => {
  return (
    <div className="profile-post">
      <div className="profile-post-sup">
        <div className="profile-post-sup-img">
          <img src="https://cdn.pixabay.com/photo/2020/11/24/18/19/cat-5773481_960_720.jpg" alt=""/>
        </div>
      </div>
      <div className="profile-post-text">{ props.text }</div>
    </div>
  )
}

export default Post;