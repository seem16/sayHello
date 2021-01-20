import React from 'react';
import Header from "./header";
import {connect} from "react-redux";
import {authThunkCreator, logOutThunkCreator} from "../redux/authReducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authThunkCreator();
  }

  render() {
    return (
      <Header { ...this.props }  />
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {
  authThunkCreator, logOutThunkCreator
})(HeaderContainer);