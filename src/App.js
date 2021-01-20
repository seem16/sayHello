import './App.css';

import News from "./components/news/news";
import Photo from "./components/photo/photo";
import Settings from "./components/settings/settings";
import {BrowserRouter, Route} from "react-router-dom";
import MessageContainer from "./components/message/message-container";
import FriendsContainer from "./components/friends/friends-container";
import ProfileContainer from "./components/profile/profile-container";
import HeaderContainer from "./components/header/header-container";
import LoginPage from "./components/login/login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <HeaderContainer />

        <Route path='/login/'
               render={ () => <LoginPage /> } />

        <Route path='/profile/:userId?'
               render={ () => <ProfileContainer /> } />
        <Route path='/messages'
               render={ () => <MessageContainer /> } />
        <Route path='/friends'
               render={ () => <FriendsContainer /> } />
        <Route path='/news'
               component={ News } />
        <Route path='/photo'
               component={ Photo } />
        <Route path='/settings'
               component={ Settings } />

      </div>
    </BrowserRouter>
  );
}

export default App;
