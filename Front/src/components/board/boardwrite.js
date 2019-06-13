import React, { Component } from 'react';
import {adddealBoard}  from '../../action/dealboardActions';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class boardwrite extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.onbrdtitleChange=this.onbrdtitleChange.bind(this);
        this.onbrdmemoChange=this.onbrdmemoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            brdtitle: '',
            brdmemo:'',
            brdwriter: this.props.currentUser.email
        };
      
    }
    onbrdtitleChange(e){
        const brdtitle=e.target.value;
        this.setState(() => ({ brdtitle: brdtitle }));
      }
      onbrdmemoChange(e){
        const brdmemo=e.target.value;
        this.setState(() => ({ brdmemo: brdmemo }));
      }
    onSubmit = (e) => {
        e.preventDefault();
        const dealboard=this.state;
    
        console.log(dealboard);

        this.props.adddealBoard(dealboard);
  
        this.props.history.push('/dealboardlist');     
     
        // Add item via addItem action
    
    
        // Close Modal
    
      }


    render(){
        
        return(
        <form className="form-horizontal" onSubmit={this.onSubmit}>
            <div className="div-form">
                <h2>Vertical (basic) form</h2>
                <div className="form-group">
                    <label >제목</label>
                    <input type="title" className="form-control" id="brdtitle" placeholder="Enter email" name="email"
                      value={this.state.brdtitle}
                      onChange={this.onbrdtitleChange}/>
                </div>
                <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content"
                    value={this.state.brdmemo}
                    onChange={this.onbrdmemoChange}></textarea>
                </div>
                <div className="div-button">
                    <button type="submit" className="btn btn-primary" onClick={this._boardWrite}>Submit</button>
                </div>
            </div>
        </form>
        );
    }
}

const mapStateToProps = (state) => ({
    dealboard: state.dealboard
  })
  
  export default connect(mapStateToProps, { adddealBoard })(boardwrite);
