import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import AppHeader from '../common/Containers/AppHeader';
import Footer from '../common/Views/Footer';

import Home from '../home/Home';
import Login from '../components/user/login/Login';
import Signup from '../components/user/signup/Signup';
import board  from '../components/board/board'
import Profile from '../components/user/profile/Profile';
import OAuth2RedirectHandler from '../components/user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/Views/NotFound';
import LoadingIndicator from '../common/Views/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import productlist from '../components/product/productlist';
import adminproductinsert from '../components/user/admin/adminproductinsert';
import productdetail from '../components/product/productdetail';
import chatroom from '../components/user/chat/chatroom';
import userlist from '../components/user/chat/userlist';
import usertimeline from '../components/user/chat/usertimeline';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  //
  loadCurrentlyLoggedInUser() {
    this.setState({ 
      loading: true
    });

    // 현재 유저 정보 출력
    // Store 관리 대상
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  //Logout 처리 함수
  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if(this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div>
        <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
        
        <div className="app-body">
          <div className="row">
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>           
                <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                  component={Profile}></PrivateRoute>
                <Route path="/login"
                  render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
                <Route path="/signup"
                  render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
                <Route path="/board" component={board}></Route>
                <Route path="/productlist" component={productlist}></Route>
                <Route path="/productdetail" component={productdetail}></Route>
                <Route path="/adminproductinsert" component={adminproductinsert}></Route>
                <Route path="/chatroom" component={chatroom}></Route>
                <Route path="/userlist" component={userlist}></Route>
                <Route path="/usertimeline" component={usertimeline}></Route>
                <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </div> 
        </div>
        <Alert stack={{limit: 3}} 
          timeout = {3000}
          position='top-right' effect='slide' offset={65} />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
