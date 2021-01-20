import './my-profile.css';
import React from "react";
import Preloader from "../../preloader/preloader";
import user from '../../assets/img/user.png'
import StatusProfile from "../status-profile/status-profile";

const MyProfile = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className="user-card">
      <div className="header-user-bg"></div>
      <div className="user-card-content">
        <div className="user-card-avatar">
          <img className='user-card-avatar-img' src={ props.profile.photos.large ?? user } alt=""/>
        </div>
        <div className="user-card-name">{props.profile.fullName ?? '@user-name'}</div>
        <div className="user-card-job">Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div className="user-card-about">
          <div>About Me</div>
          <p>{ props.profile.aboutMe ?? 'Information was hidden' }</p>
          <StatusProfile status={ props.status } updateStatus={ props.updateStatus }/>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;