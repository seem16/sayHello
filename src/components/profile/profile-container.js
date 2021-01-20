import React from 'react';
import {connect} from "react-redux";
import Profile from "./profile";
import {getStatusThunkCreator, updateStatusThunkCreator, userIDThunkCreator} from "../redux/profileReducer";
import {withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.userIDThunkCreator(this.props.match.params.userId);
    let userID = this.props.match.params.userId ?? 2;
    this.props.getStatusThunkCreator(userID);
  }

  render() {
    return (
      <Profile { ...this.props } profile={ this.props.profile } status={ this.props.status }
               updateStatus={ this.props.updateStatusThunkCreator } />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, { userIDThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)