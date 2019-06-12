import React,{ Component }  from 'react';
import './productlist.css';
import { connect } from 'react-redux';
import { list_dealBoard } from '../../action/productActions';
import { bindActionCreators } from 'redux';

class productlist extends Component{
constructor(props){
      super(props);
    let boards=[];
    this.props.list_dealBoard();
    this.componentDidMount=this.componentDidMount.bind(this);
    this.state = {
            boards:[]
             ,brdtitle:''
             ,item:[]
        };
        
    }
       componentDidMount(){
             
      
       }
render() {
    const {boards}=this.props.product.products;

    console.log(this.props.product);

    return (
		<table class="table table-striped table-bordered table-hover">
     
        <caption>중고거래게시판</caption>
        <thead>
            <tr>
                <th>순서</th>
                <th>제목</th>
                <th>작성자</th>
                <th>컬럼4</th>
                <th>컬럼5</th>
            </tr>
        </thead>
        <tbody>

            {/* {this.props.product.products.map((item,index) => {   return <tr key={index }><td>{item}</td></tr>})} */}
    {this.props.product.products.length== 0 ?  null : this.props.product.products[0].map((item,index) => {
            return <tr key={index}>
              <td>{item.dealbrdno}</td>
                    <td>{item.brdtitle}</td>
                    <td>{item.brdwriter}</td>
                 </tr>})}

           
        </tbody>
    </table>
    );

    }
}
const mapStateToProps = (state) => ({
  product: state.product
})
const mapDispatchToProps = (dispatch) => ({
  list_dealBoard: bindActionCreators(list_dealBoard, dispatch),
});

export default connect(mapStateToProps, { list_dealBoard })(productlist);