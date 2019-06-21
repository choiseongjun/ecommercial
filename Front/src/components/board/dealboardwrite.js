import React, { Component } from 'react';
import {adddealBoard}  from '../../action/dealboardActions';
import { connect } from 'react-redux';
import {post} from 'axios';
import service from './Service.js';


class dealboardwrite extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.onbrdtitleChange=this.onbrdtitleChange.bind(this);
        this.onbrdmemoChange=this.onbrdmemoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            brdtitle: '',
            brdmemo:'',
            brdwriter: this.props.currentUser.email,
            brdhit:0,
            filename:'',
            filesize:'',
            fileType:''
        };
      
    }
    uploadFileToServer(data){
      //returns Promise object
      return service.getRestClient().post('/files/insertFile', data);
  }
    handleUploadFile = (event) => {
      const data = new FormData();
      //using File API to get chosen file
      let file = event.target.files[0];
      console.log("Uploading file", event.target.files[0]);
      data.append('file', event.target.files[0]);
      data.append('name', 'my_file');
      data.append('description', 'this file is uploaded by young padawan');
      let self = this;
      //calling async Promise and handling response or error situation
      this.uploadFileToServer(data).then((response) => {
          console.log("File " + file.name + " is uploaded");
      }).catch(function (error) {
          console.log(error);
          if (error.response) {
              //HTTP error happened
              console.log("Upload error. HTTP error/status code=",error.response.status);
          } else {
              //some other error happened
             console.log("Upload error. HTTP error/status code=",error.message);
          }
      });
    };
   
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
        
    
      }


    render(){
        
        return(
        <form className="form-horizontal" method="post" id="formdata" enctype="multipart/form-data" onSubmit={this.onSubmit}>
            <div className="div-form">
                <h2>글쓰기</h2>
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
            <div className="form-group">
                <div className=" col-sm-2">
                  <div className="file-field pull_float_right">
                    <div className="btn btn-outline-success btn-rounded waves-effect btn-sm float-left">
                      <span>Choose file</span>
                      <input type="file" name="multipartFile" id="inputFile" multiple onChange={this.handleUploadFile}/>
                    </div>
                  </div>
                </div>
                <div className="col-sm-10">
                  <div className="file-path-wrapper ">
                    <div className="file-path validate" placeholder="Upload your image" ><div id="uploadImgText">이미지를 올려주세요.</div></div>
                  </div>
                </div>
              </div>

        </form>
        );
    }
}

const mapStateToProps = (state) => ({
    dealboard: state.dealboard
  })
  
  export default connect(mapStateToProps, { adddealBoard })(dealboardwrite);