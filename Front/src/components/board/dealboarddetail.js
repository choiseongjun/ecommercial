import React,{ Component }  from 'react';
import { selectone_dealBoard,deleteone_dealBoard,update_dealBoard } from '../../action/dealboardActions';
import { connect } from 'react-redux';

class dealboarddetail extends Component{
    constructor(props){
      super(props);

    
    this.state = {
            dealbrdno : this.props.match.params.id
           ,dealboardone:[]
           ,brdmemo:this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdmemo
           ,brdtitle:this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdtitle

        };
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.brdtitleOnchange = this.brdtitleOnchange.bind(this);
        
    }
    handleClick = (e) => {
        const dealboardno=this.state.dealbrdno;
     
       console.log(dealboardno)
       this.props.deleteone_dealBoard(dealboardno);
        // axios.delete('http://localhost:8080/dealboard/delete/' + parseInt(dealboard.dealbrdno))
        //     .then(res => console.log(res.data))
    }
    boardUpdate = (e) => {
        console.log("go to update")
        const dealboardno=this.state.dealbrdno
        const dealboard=this.state;
        console.log(dealboardno);
        console.log(dealboard)
        this.props.update_dealBoard(dealboardno,dealboard)
        
    }    
    inputFormHandler(e) {
      
        this.setState({[e.target.name]: e.target.value});
    }
    brdtitleOnchange(e) {
      
        this.setState({[e.target.name]: e.target.value});
    }
    componentDidMount (){
       
        this.props.selectone_dealBoard(this.state.dealbrdno);
    }
  
   
    render(){
        console.log('스테이트값..시작')
        console.log(this.state)
        console.log('스테이트값..종료')
        console.log(this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdmemo)
        return(
      
            <div className="div-form">
                <h2>글내용</h2>
                <div className="form-group">
                    <label >제목</label>
                 
                    <input type="title" className="form-control" id="brdtitle" placeholder="Enter email" name="brdtitle"
                      value={this.state.brdtitle}
                      onChange={this.brdtitleOnchange}
                      ></input>
                </div>
                <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content"  name="brdmemo"
                   value={this.state.brdmemo}
                    onChange={this.inputFormHandler}>  </textarea>
                </div>
                <div className="div-button">
                    <button type="submit" className="btn btn-primary" onClick={this.boardUpdate}>글수정</button>
                </div>
                <button onClick={this.handleClick}>
                                                        글삭제
                    </button>
            </div>
 
        );
    }
}
const mapStateToProps = (state) => ({
    dealboard: state.dealboard
})
// const mapDispatchToProps = (dispatch) => ({
//   list_dealBoard: bindActionCreators(list_dealBoard, dispatch),
// });

export default connect(mapStateToProps, { selectone_dealBoard,deleteone_dealBoard,update_dealBoard })(dealboarddetail);