import React,{ Component }  from 'react';
import './dealboardlist.css';
import { connect } from 'react-redux';
import { list_dealBoard } from '../../action/dealboardActions';
import { NavLink } from 'react-router-dom';
class dealboardlist extends Component{
constructor(props){
      super(props);
 
    
    this.state = {
           
        };
        
    }
    componentDidMount(){
        this.props.list_dealBoard();
    }
      
render() {
  

    console.log(this.props);
    const dealboard=this.props.dealboard.dealboard[0]
    console.log(dealboard)
    return (
		<table class="table table-striped table-bordered table-hover">
     
        <caption>중고거래게시판</caption>
        <thead>
            <tr>
                <th width="5px">순서</th>
                <th>제목</th>
                <th>작성자</th>
                <th>조회수</th>
                <th>작성일자</th>
            </tr>
        </thead>
        <tbody>

            {/* {this.props.product.products.map((item,index) => {   return <tr key={index }><td>{item}</td></tr>})} */}
    {this.props.dealboard.dealboard.length== 0 ?  null : this.props.dealboard.dealboard[0].map((item,index) => {
            return <tr key={index}>
                    <td>{item.dealbrdno}</td>
                    <td>{item.brdtitle}</td>
                    <td>{item.brdwriter}</td>
                    <td>{item.brdhit}</td>
                    <td>{item.createdAt}</td>
                 </tr>})}

           
        </tbody><NavLink to="/boardwrite"><a href="#" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">작성하기</a></NavLink>
    </table>
    );

    }
}
const mapStateToProps = (state) => ({
    dealboard: state.dealboard
})
// const mapDispatchToProps = (dispatch) => ({
//   list_dealBoard: bindActionCreators(list_dealBoard, dispatch),
// });

export default connect(mapStateToProps, { list_dealBoard })(dealboardlist);