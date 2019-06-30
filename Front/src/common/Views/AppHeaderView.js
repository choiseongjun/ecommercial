import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import './AppHeader.css';
import AppNavigator from '../Views/AppNavigator';
import {Modal, Button} from 'react-bootstrap';
import 'react-overlays';

import Login from '../../components/user/login/Login';


class AppHeaderView extends Component{
    render(){

        return(
            <header>
            <div id="top-header">
                <div className="container">
                    <div className="pull-left">
                        free shipping on all u.s orders over $50
                    </div>
                    <div className="pull-right">
                        <ul className="header-top-links">
                        <li><a href="#">Store</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">FAQ</a></li>
                            <li className="dropdown default-dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">ENG <i className="fa fa-caret-down"></i></a>
                                <ul className="custom-menu">
                                    <li><a href="#">English (ENG)</a></li>
                                    <li><a href="#">Russian (Ru)</a></li>
                                    <li><a href="#">French (FR)</a></li>
                                    <li><a href="#">Spanish (Es)</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="header">
                <div className="container">
                    <div className="pull-left">
                        {/* <!-- Logo --> */}
                        <div className="header-logo">
                            <a className="logo" href="/">
                                <img src="/style/img/logo.png" alt=""/>
                            </a>
                        </div>
                        {/* <!-- /Logo --> */}

                        {/* <!-- Search --> */}
                        <div className="header-search">
                            <form>
                                <input className="input search-input" type="text" placeholder="Enter your keyword" />
                                <select className="input search-categories">
                                    <option value="0">All Categories</option>
                                    <option value="1">Category 01</option>
                                    <option value="1">Category 02</option>
                                </select>
                                <button type="button" className="search-btn"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                        {/* <!-- /Search --> */}
                    </div>
                    <div className="pull-right">
                        <ul className="header-btns">
                            {/* <!-- Account --> */}
                            <li className="header-account dropdown default-dropdown">
                                <div className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                                    <div className="header-btns-icon">
                                        <i className="fa fa-user-o"></i>
                                    </div>
                                    <strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
                                </div>

                                <a onClick={this.props.handleShowLogin} className="text-uppercase">Login</a> / <a href="#" className="text-uppercase">Join</a>
                                    

                                <ul className="custom-menu">

                                    { this.props.authenticated ? (
                                        <React.Fragment>
                                            <li><NavLink to="/profile"><i className="fa fa-user-o"></i>Profile</NavLink> </li>
                                            <li><a onClick={this.props.onLogout}><i className="fa fa-check"></i> Logout</a></li>
                                            <li><a to="/MyInfo"><i className="fa fa-exchange"></i>My Account</a></li>
                                        </React.Fragment>   
                                            ):(
                                        <React.Fragment>        
                                            <li onClick={this.handleShowLogin}>  
                                                <NavLink to="/login">
                                                    <i className="fa fa-unlock-alt"></i>Login
                                                </NavLink> 
                                            </li>

                                            <li><NavLink to="/signup"><i class="fa fa-user-plus" aria-hidden="true"></i>Sign Up</NavLink></li>
                                        </React.Fragment>
                                    )}
                                </ul>
                            </li>
                            {/* <!-- /Account --> */}

                            {/* <!-- Cart --> */}
                            <li className="header-cart dropdown default-dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                    <div className="header-btns-icon">
                                        <i className="fa fa-heart"></i>
                                        <span className="qty">3</span>
                                    </div>
                                    <strong className="text-uppercase">My Wish:</strong>
                                    <br/>
                                    <span>5 ea</span>
                                </a>
                                <div className="custom-menu">
                                    <div id="shopping-cart">
                                        <div className="shopping-cart-list">
                                            <div className="product product-widget">
                                                <div className="product-thumb">
                                                    <img src="./style/img/thumb-product01.jpg" alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                </div>
                                                <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                                            </div>
                                            <div className="product product-widget">
                                                <div className="product-thumb">
                                                    <img src="./style/img/thumb-product01.jpg" alt="" />
                                                </div>
                                                <div className="product-body">
                                                    <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                                                    <h2 className="product-name"><a href="#">Product Name Goes Here</a></h2>
                                                </div>
                                                <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                                            </div>
                                        </div>
                                        <div className="shopping-cart-btns">
                                            <button className="main-btn">View Cart</button>
                                            <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* <!-- /Cart --> */}

                            {/* <!-- Mobile nav toggle--> */}
                            <li className="nav-toggle">
                                <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
                            </li>
                            {/* <!-- / Mobile nav toggle --> */}
                        </ul>
                    </div>
                </div>
                {/* <!-- header --> */}
            </div>
        </header>
        );
    }
}

export default AppHeaderView;