import React, { Component } from 'react';
import './Login.css';
import { ACCESS_TOKEN } from '../../../constants';
import { login } from '../../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'

import Alert from 'react-s-alert';
import Loginview from './LoginView';
import SocialLogin from './SocialLogin';

class Login extends Component {

    constructor(props) {
        super(props);
        
        //리덕스로 빼기
        this.state = {
            email: '',
            password: ''
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.

    //     if(this.props.location.state && this.props.location.state.error) {
    //         setTimeout(() => {
    //             Alert.error(this.props.location.state.error, {
    //                 timeout: 5000
    //             });

    //             this.props.history.replace({
    //                 pathname: this.props.location.pathname,
    //                 state: {}
    //             });
    //         }, 100);
    //     }
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        console.log("input value : ", inputValue);
        console.log("this state", this.state.email);

        this.setState({
            [inputName] : inputValue
        });        
    }

    handleSubmit(event) {
        event.preventDefault();   

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            this.props.history.replace("/");
            
            window.location.href = '/'; 

        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }
    
    render() {
        if(this.props.authenticNated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login to SpringSocial</h1>
                    
                    <SocialLogin />
                    
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>

                    {/* <LoginForm {...this.props} /> */}

                    <Loginview
                    handleInputChange ={this.handleInputChange}
                    handleSubmit = {this.handleSubmit}
                    // email = {this.state.email}
                    // password = {this.state.password}
                    />       
                    <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
                </div>
            </div>
        );
    }
}

export default Login;
