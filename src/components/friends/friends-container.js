import React from 'react'
import {connect} from "react-redux";
import {
  followAC, followThunkCreator, getFriendsThunkCreator,
  notFollowAC,
  setCurrentPageAC, unfollowThunkCreator,
} from "../redux/friendsReducer";
import Friends from "./friends";
import {compose} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

class FriendsAPIComponent extends React.Component{

  componentDidMount() {

    this.props.getFriendsThunkCreator(this.props.currentPage,this.props.pageSize)

  }

  onPageChanged = (pageNum) => {
    this.props.getFriendsThunkCreator(pageNum, this.props.pageSize)
  }

  render() {
    return <Friends totalFriendsCount={ this.props.totalFriendsCount }
                    pageSize={ this.props.pageSize }
                    friends={ this.props.friends } follow={ this.props.follow }
                    notFollow={ this.props.notFollow }
                    currentPage={ this.props.currentPage }
                    onPageChanged={ this.onPageChanged }
                    isFetching={ this.props.isFetching }
                    followInProcessing={ this.props.followInProcessing }
                    followThunkCreator={ this.props.followThunkCreator }
                    unfollowThunkCreator={ this.props.unfollowThunkCreator } isAuth={ this.props.isAuth } />
  }

}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friendsData,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage,
    isFetching: state.friendsPage.isFetching,
    followInProcessing: state.friendsPage.followInProcessing,
    isAuth: state.auth.isAuth
  }
}



// let FriendsContainer = connect(mapStateToProps, {
//   follow: followAC,
//   notFollow: notFollowAC,
//   setCurrentPage: setCurrentPageAC,
//   getFriendsThunkCreator, followThunkCreator, unfollowThunkCreator
// })(FriendsAPIComponent)

// export default FriendsContainer;

export default compose(
  connect(mapStateToProps, {
    follow: followAC,
    notFollow: notFollowAC,
    setCurrentPage: setCurrentPageAC,
    getFriendsThunkCreator, followThunkCreator, unfollowThunkCreator
  }),
  withAuthRedirect
)(FriendsAPIComponent);