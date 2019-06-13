import React,{ Component }  from 'react';

class dealboarddetail extends Component{
    constructor(props){
      super(props);
 
    
    this.state = {
           
        };
        
    }
    componentDidMount (){
        console.log('상세페이지...')
        console.log(this.props)
    }
      
    render(){
        
        return(
        <form className="form-horizontal" onSubmit={this.onSubmit}>
            <div className="div-form">
                <h2>글내용</h2>
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

export default dealboarddetail;