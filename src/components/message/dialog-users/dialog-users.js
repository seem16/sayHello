import './dialog-users.css';
import {NavLink} from "react-router-dom";

const DialogUsers = (props) => {
  let path = '/messages/' + props.id;
  return (
    <div className="user-message-item">
        <NavLink to={ path } activeClassName={'active-dialog'}>
          <div className="user-message-item-img">
            <img className="user-message-item-photo" src={ props.userPhoto } alt=""/>
          </div>
          <div className="user-message-item-name">{props.userName}</div>
        </NavLink>
    </div>
  )
}

export default DialogUsers;