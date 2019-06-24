import React, { Component } from 'react';
import {adddealBoard}  from '../../action/dealboardActions';
import { connect } from 'react-redux';
import service from './Service.js';


import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
// Import bootstrap(v3 or v4) dependencies 
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
// Bootstrap JS relies on a global varaible.
// In ES6, all imports are hoisted to the top of the file
// so if we used `import` to import Bootstrap, it would
// execute earlier than we have assigned the global
// variable. This is why we have to use CommonJS require()
// here since it doesn't have the hoisting behavior.
window.jQuery = $;
require('bootstrap');
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
            fileType:'',
            fileNo:''
        };
      
    }
    uploadFileToServer(data){
      //returns Promise object
      return service.getRestClient().post('/dealboard/insertFile', data);
  }
    handleUploadFile = (event) => {
      const uploadImgText = document.getElementById('uploadImgText');
        const arrFiles       = document.getElementById('inputFile').files;
        let   text          = "";
       
        for(let number = 0 ; number < arrFiles.length ; number++){
          
            console.log(arrFiles[number].name);
            console.log(arrFiles[number].size);
            console.log(arrFiles[number].type);
            text = text + `<button type="button" class="btn_upload_file">${arrFiles[number].name} <i class="fa fa-close" data-size='${arrFiles[number].size}' onclick='${this._delete}'></i> </button>`;
           
        }
      uploadImgText.innerHTML=text;
      const data = new FormData();
      //using File API to get chosen file
      let file = event.target.files[0];
      console.log("Uploading file", event.target.files[0]);
      data.append('file', event.target.files[0]);
      data.append('name', 'my_file');
      data.append('description', 'this file is uploaded by young padawan');
      let self = this;
      //calling async Promise and handling response or error situation
      this.setState(()=>({file:file}))
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
        const file=this.state.file;
      console.log(this.state)
        console.log(this.state.file);
        const dealboard=this.state;
        const data = new FormData();
        data.append('file', file);
        data.append('name', 'my_file');
        data.append('description', 'this file is uploaded by young padawan');
        this.props.adddealBoard(dealboard,data);
  
        //this.props.history.push('/dealboardlist');     
 
        
        
      //   this.uploadFileToServer(data).then((response) => {
      //     console.log("File " + file.name + " is uploaded");
      // }).catch(function (error) {
      //     console.log(error);
      //     if (error.response) {
      //         //HTTP error happened
      //         console.log("Upload error. HTTP error/status code=",error.response.status);
      //     } else {
      //         //some other error happened
      //        console.log("Upload error. HTTP error/status code=",error.message);
      //     }
      // });
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
                {/* <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content"
                    value={this.state.brdmemo}
                    onChange={this.onbrdmemoChange}></textarea>
                </div> */}
              <ReactSummernote
                    value="Default value"
                    options={{
                      lang: 'ru-RU',
                      height: 350,
                      dialogsInBody: true,
                      toolbar: [
                        ['style', ['style']],
                        ['font', ['bold', 'underline', 'clear']],
                        ['fontname', ['fontname']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['table', ['table']],
                        ['insert', ['link', 'picture', 'video']],
                        ['view', ['fullscreen', 'codeview']]
                      ]
                    }}
                    onChange={this.onChange}
                  />
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