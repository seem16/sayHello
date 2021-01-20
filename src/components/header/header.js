import './header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-items">
          <div className="header-item-logo">
            <NavLink to='/profile'>Logo</NavLink>
          </div>
          <div className="header-item-nav">
            <div className="profile side-menu-link">
              <NavLink className="profile-link" activeClassName={'current-link'} to="/profile">My Profile</NavLink>
            </div>
            <div className="friends side-menu-link">
              <NavLink className="friends-link" activeClassName={'current-link'} to="/friends">Friends</NavLink>
            </div>
            <div className="news side-menu-link">
              <NavLink className="news-link" activeClassName={'current-link'} to="/news">News</NavLink>
            </div>
            <div className="messages side-menu-link">
              <NavLink className="messages-link" activeClassName={'current-link'} to="/messages">Messages</NavLink>
            </div>
            <div className="photo side-menu-link">
              <NavLink className="photo-link" activeClassName={'current-link'} to="/photo">Photo</NavLink>
            </div>
            <div className="settings side-menu-link">
              <NavLink className="settings-link" activeClassName={'current-link'} to="/settings">Settings</NavLink>
            </div>
            <div className="login side-menu-link">
              { props.isAuth ? <div> {props.login} <button onClick={ props.logOutThunkCreator }>Log Out</button> </div>
                             : <NavLink className="login-link" activeClassName={'current-link'}
                                        to="/login">Login</NavLink>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header;