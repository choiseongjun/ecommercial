import React, { Component } from 'react';
import {adddealBoard}  from '../../action/dealboardActions';
import { connect } from 'react-redux';
import axios from 'axios';
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
    _uploadFile = (e) => {
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
        let filename = e.target.files[0].name;
        let fileType = e.target.files[0].type;
        let filesize=e.target.files[0].size;

        const dealboardfile = new FormData();
        dealboardfile.append('filename',e.target.files[0].name);
        dealboardfile.append('fileType',e.target.files[0].type);
        dealboardfile.append('filesize',e.target.files[0].size);
       
        axios({
          method: 'post',
          url: 'http://localhost:8080/dealboard/insertFile',
          data: dealboardfile,
          headers: { 'Content-Type': 'multipart/form-data' }
          })
          .then(function (response) {
              //handle success
              console.log(response);
          })
          .catch(function (response) {
              //handle error
              console.log(response);
          });
        console.log("new~!!#")
        // let reader=new FileReader();
        // reader.readAsDataURL(file);
        this.setState({ filename: filename, fileType: fileType,filesize:filesize })
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
        const dealboardfile=this.state;
   
        axios.post('http://localhost:8080/dealboard/insertFile', dealboardfile)
        .then(res => console.log(res.data))
        // if(dealboard.brdtitle == ""){
        //     alert("제목을 작성하세요")
        // }else{
        //     this.props.adddealBoard(dealboard);
  
        //     //this.props.history.push('/dealboardlist');     
        //     window.location.href = '/dealboardlist'; 
        // }
         
     
        // Add item via addItem action
    
    
        // Close Modal
    
      }


    render(){
        
        return(
        <form className="form-horizontal" enctype="multipart/form-data" onSubmit={this.onSubmit}>
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
                      <input type="file" id="inputFile" multiple onChange={this._uploadFile}/>
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
