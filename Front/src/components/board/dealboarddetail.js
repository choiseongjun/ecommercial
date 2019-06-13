import React,{ Component }  from 'react';
import { selectone_dealBoard } from '../../action/dealboardActions';
import { connect } from 'react-redux';


class dealboarddetail extends Component{
    constructor(props){
      super(props);
        console.log(this.props)
      
    this.state = {
            dealbrdno : this.props.match.params.id
        };
       
    }

    componentDidMount (){
        console.log('상세페이지...')
 
        this.props.selectone_dealBoard(this.state.dealbrdno);
        
    }
      
    render(){
        
        return(
        <form className="form-horizontal" onSubmit={this.onSubmit}>
            <div className="div-form">
                <h2>글내용</h2>
                <div className="form-group">
                    <label >제목</label>
                    <input type="title" className="form-control" id="brdtitle" placeholder="Enter email" name="email"
                      value={this.props.dealboard.dealboard.brdtitle}
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
// const mapDispatchToProps = (dispatch) => ({
//   list_dealBoard: bindActionCreators(list_dealBoard, dispatch),
// });

export default connect(mapStateToProps, { selectone_dealBoard })(dealboarddetail);