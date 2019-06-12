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
    console.log(this.props.list_dealBoard());
    console.log(this.props);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.state = {
            boards:[]
             ,brdtitle:''
        };
        
    }
       componentDidMount(){
             
      
       }
render() {
    const {boards}=this.props.product.products;
    console.log(this.props.product.products.Object);
    
    return (
        
		<table class="table table-striped table-bordered table-hover">
        <caption>중고거래게시판</caption>
        <thead>
            <tr>
                <th>#</th>
                <th>컬럼2</th>
                <th>컬럼3</th>
                <th>컬럼4</th>
                <th>컬럼5</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>데이터3</td>
                <td>데이터4</td>
                <td>데이터5</td>
            </tr>
           
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