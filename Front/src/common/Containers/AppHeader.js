import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import '../Views/AppHeader.css';
import AppHeaderView from '../Views/AppHeaderView';

import AppNavigator from '../Views/AppNavigator';
import {Modal, Button} from 'react-bootstrap';
import 'react-overlays';

import Login from '../../components/user/login/Login';


class AppHeader extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShowLogin = this.handleShowLogin.bind(this);
        this.handleCloseLogin = this.handleCloseLogin.bind(this);
    
        
      }

    state = {
        show : false,
    };

    //클릭시 login modal 출력
    handleShowLogin(){
        console.log("On Clicked Login : ", this.state.show);
        console.log("this Props : ", this.props);

        this.setState({ show : !this.state.show }, ()=>{console.log("this state : ", this.state);});
        
        console.log("On Clicked Login after : ", this.state.show);
    }

    handleCloseLogin(){
        this.setState({ show : false });
       
        return <Redirect
            to={{
            pathname: "/",
            state: { from: this.props.location }
        }}/>;            
      
    }

    render() {
        return (
            <React.Fragment>
              

                {/* <AppNavigator></AppNavigator> */}
                <AppHeaderView
                    handleShowLogin={this.handleShowLogin}
                    handleCloseLogin={this.handleCloseLogin}
                    show = {this.state.show}
                />

                {/* <React.Fragment> */}
                <Modal show={this.state.show} onHide={this.handleCloseLogin} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Login
                            modalShow = {this.state.show}
                        />
                    </Modal.Body>                               
                </Modal>
                {/* </React.Fragment> */}
            </React.Fragment>            
        )
    }
}

export default AppHeader;