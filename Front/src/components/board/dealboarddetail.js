import React,{ Component }  from 'react';
import { selectone_dealBoard,deleteone_dealBoard } from '../../action/dealboardActions';
import { connect } from 'react-redux';


class dealboarddetail extends Component{
    constructor(props){
      super(props);

    
   
    
    this.state = {
            dealbrdno : this.props.match.params.id
           ,dealboardone:[]
           ,brdmemo:this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdmemo
           ,brdtitle:''

        };
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.onbrdmemoChange = this.onbrdmemoChange.bind(this);
    }
   
    inputFormHandler(e) {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    };
    onbrdmemoChange(e) {
       
      
        this.setState({ brdmemo: e.target.value });
    }
   
    componentWillMount(){
    
        this.props.selectone_dealBoard(this.state.dealbrdno);
    }
    componentDidMount (){
       
       
    }
    handleClick = (e) => {
        const dealbrdno=this.state.dealbrdno;
        this.props.deleteone_dealBoard(parseInt(dealbrdno));
        
    }
    render(){
        console.log('스테이트값..시작')
        console.log(this.state)
        console.log('스테이트값..종료')
        console.log(this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdmemo)
        return(
        <form className="form-horizontal" onSubmit={this.onSubmit}>
            <div className="div-form">
                <h2>글내용</h2>
                <div className="form-group">
                    <label >제목</label>
                 
                    <input type="title" className="form-control" id="brdtitle" placeholder="Enter email" name="email"
                      value={this.props.dealboard.dealboardone[0] == null ? null : this.props.dealboard.dealboardone[0].brdtitle}
                      onChange={this.inputFormHandler}></input>
                </div>
                <div className="form-group">
                    <label >내용</label>
                    <textarea className="form-control" rows="5" id="content"  name="brdmemo"
                   value={this.state.brdmemo}
                    onChange={this.inputFormHandler}>  </textarea>
                </div>
                <div className="div-button">
                    <button type="submit" className="btn btn-primary" onClick={this._boardWrite}>글수정</button>
                    <button
                           onClick={this.handleClick}>
                                                        글삭제
                    </button>
                </div>
            </div>
        </form>
        );
    }
}
const mapStateToProps = (state) => ({
    dealboard: state.dealboard
})
// const mapDispatchToProps = (dispatch) => ({
//   list_dealBoard: bindActionCreators(list_dealBoard, dispatch),
// });

export default connect(mapStateToProps, { selectone_dealBoard,deleteone_dealBoard })(dealboarddetail);