import Message from "./message";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../redux/messageReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (valueTextMessage) => dispatch(addMessageActionCreator(valueTextMessage)),

  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Message);