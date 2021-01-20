import {Redirect} from "react-router-dom";
import React from "react";

let withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
   render() {
     if (!this.props.isAuth) return <Redirect to='/login' />
     return <Component { ...this.props } />
   }
  }

  return RedirectComponent;

}

export default withAuthRedirect;