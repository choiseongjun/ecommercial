import React, { Component } from 'react';
import { API_BASE_URL } from '../../constants';
import { Redirect } from 'react-router-dom'
class boardwrite extends Component{




    _boardWrite = () =>{
        let title   = document.getElementById('title').value;
        let content = document.getElementById('content').value;
        
        fetch(API_BASE_URL+'/board/post'
            ,{
                "method": 'post'
                ,headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                } 
                ,"body":JSON.stringify({
                    board_title : title
                    ,board_content : content
                })
            }).then(response =>{
                if (response.ok) {
                    alert('저장에 성공하였습니다.');
                    window.location.href='/board';
                }else{
                    alert('저장에 실패하였습니다.');    
                }
            }).catch(err=>{
                alert('오류가 발생하였습니다.');
                console.log(err);
            })
    }

    render(){
        return(
            <div className="div-form">
                <h2>Vertical (basic) form</h2>
                <div className="form-group">
                    <label >제목</label>
                    <input type="title" className="form-control" id="title" placeholder="Enter email" name="email"/>
                </div>
                <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content"></textarea>
                </div>
                <div className="div-button">
                    <button type="button" className="btn btn-primary" onClick={this._boardWrite}>Submit</button>
                </div>
            </div>
        );
    }
}

export default boardwrite;