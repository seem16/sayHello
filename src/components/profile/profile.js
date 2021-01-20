import './profile.css';
import React from "react";
import MyProfile from "./my-profile/your-profile";
import MyPostsContainer from "./my-posts/my-posts-container";
import {Redirect} from "react-router-dom";



const Profile = (props) => {

  return (
    <div className="profile">
      <div className="main">
        <div className="container">
          <div className="main-items">

            <MyProfile profile={ props.profile } status={ props.status } updateStatus={ props.updateStatus } />
            <MyPostsContainer />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;