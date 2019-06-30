import React, { Component } from 'react';

import './Profile.css';

import { NavLink } from 'react-router-dom';

import axios from 'axios';

class Profile extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: this.props.currentUser.name,
            id: this.props.currentUser.id,
            imageUrl: this.props.currentUser.imageUrl
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    _uploadFile = (e) => {
        let imageUrl = e.target.files[0].name;
        let file = e.target.files[0];
        // let reader=new FileReader();
        // reader.readAsDataURL(file);
        this.setState({ imageUrl: imageUrl, file: file })
    }
    handleClick = (e) => {
        let user = this.state
        window.confirm("Are you sure you wish to delete?")
        axios.delete('http://localhost:8080/deleteUser/' + user.id)
            .then(res => console.log(res.data))
    }
    inputFormHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        let user = this.state
        console.log(user)
        console.log("files+++++++++")
        // axios.post('http://localhost:8080/updateUser/' + user.id, user)
        axios.post('http://localhost:8080/updateUser/' + user.id, user)
            .then(res => console.log(res.data))
    }
    render() {
        return (
            <form onSubmit={(e) => this.onSubmit(e)} className='add-book-form'>
                <div className="profile-container">
                    <div className="container">
                        <div className="profile-info">
                            <div className="profile-avatar">
                                내사진
                            {
                                    this.props.currentUser.imageUrl ? (
                                        <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name} />
                                    ) : (
                                            <div className="text-avatar">
                                                <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                            </div>
                                        )
                                }
                            </div>
                            <div className="profile-name">
                                <h2>{this.props.currentUser.roles["0"].name == 'Admin' ? <NavLink to="adminproductinsert">상품 등록페이지로</NavLink> : ''}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                                <div className="d-table-cell align-middle">
                                    <div className="text-center mt-4">
                                        <h1 className="h2">회원정보 수정</h1>
                                        <p className="lead">
                                            Start creating the best possible user experience for you customers.
          </p>
                                    </div>
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="m-sm-4">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <input className="form-control form-control-lg" type="text"
                                                        name="email"
                                                        value={this.props.currentUser.email}
                                                        readOnly />
                                                </div>
                                                <div className="form-group">
                                                    <label>Name</label>
                                                    <input className="form-control form-control-lg"
                                                        type="text"
                                                        name="name"
                                                        placeholder="Enter your name"
                                                        value={this.state.name}
                                                        onChange={this.inputFormHandler} />
                                                </div>
                                                <input type="file" name="file" onChange={this._uploadFile}></input>
                                                <div className="text-center mt-3" value={this.state.imageUrl}>
                                                    <button>회원정보 수정</button>
                                                    <button
                                                        onClick={this.handleClick}
                                                    >
                                                        Delete
                </button>
                                                    {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default Profile

