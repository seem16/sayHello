import React from "react";
import './friends.css';
import user from '../assets/img/user.png'
import Preloader from "../preloader/preloader";
import {NavLink} from "react-router-dom";

const Friends = (props) => {

  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

  let pages = [];
  for(let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div className="friends">
      <div className="container">
        {props.isFetching ? <Preloader /> : null }
        <div className="friends-items">
          {
            props.friends.map(f => <div key={ f.id } className="friends-item">
                <div className="friends-item-photo">
                  <NavLink to={'/profile/' + f.id}>
                    <img className="friends-item-photo-img" src={ f.photos.small ?? user } alt=""/>
                  </NavLink>
                </div>
                <div className="friends-item-name">{ f.name }</div>
                { f.followed
                  ? <button disabled={ props.followInProcessing.some(id => id === f.id) } onClick={ () => {

                    props.unfollowThunkCreator(f.id)

                  }} className="friends-item-follow">Follow</button>
                  : <button disabled={ props.followInProcessing.some(id => id === f.id) } onClick={ () => {

                    props.followThunkCreator(f.id)

                  }} className="friends-item-follow">unFollow</button> }
              </div>
            )
          }
        </div>
        <div className="current-page-items">
          { pages.map(p => {
            return <div className={ props.currentPage === p ? "page-num active" : "page-num" }
                        onClick={ () => props.onPageChanged(p) }>{ p }</div>
          }) }
        </div>
      </div>
    </div>

}

export default Friends;