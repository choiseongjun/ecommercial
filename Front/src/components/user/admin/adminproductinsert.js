import React,{ Component }  from 'react';
import './adminproductinsert.css';
import { connect } from 'react-redux';
import { addProduct } from '../../../action/productActions';


class adminproductinsert extends Component{
  constructor(props){
      super(props);
    
      this.onbikeNameChange = this.onbikeNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.state = {
            bikeName: ''
 
        };
  }
  _uploadFile = () => {
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
  }
  onbikeNameChange(e) {
        const bikeName = e.target.value;
        this.setState(() => ({ bikeName: bikeName }));
    }
  _delete(){
    // 어케 삭제하지...? 흠....... 고민좀.
    console.log("aaaaa");
  }

  onSubmit = (e) => {
    e.preventDefault();
    const product=this.state;
    
    console.log(this.props.state.products);

    
    this.props.addProduct(product);
    // Add item via addItem action


    // Close Modal

  }

  render(){
    const {product} = this.props.product;
    
    return(
     

      <React.Fragment>
        <div className="ibox float-e-margins">
          <div className="ibox-title">
            <h5>판매 > BIKE INFO <small></small></h5>
          </div>
          <div className="ibox-content">
            <form className="form-horizontal" onSubmit={this.onSubmit}>
              <input type="hidden" name="bikeSeq" />
              <div className="form-group"><label className="col-sm-2 control-label">바이크 명</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeName"
                  value={this.state.bikeName}
                    onChange={this.onbikeNameChange}/></div>
                <label className="col-sm-2 control-label">배기량</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeCc"/></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">출시가</label>
                <div className="col-sm-4"><input type="number" className="form-control" name="bikeOrigPrice" /></div>
                <label className="col-sm-2 control-label">브랜드</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeBrand" /></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">제조사</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeCtry"/></div>
                <label className="col-lg-2 control-label">장르</label>
                <div className="col-lg-4"><input type="text" className="form-control" name="bikeKind"/></div>
              </div>
              
              <div className="hr-line-dashed" />
              
              <div>
                <h5>판매 > BIKE ENGINE INFO <small></small></h5>
              </div>

              <input type="hidden" name="bikeSeq" />
              <div className="form-group"><label className="col-sm-2 control-label">BORE?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeInfoBore"/></div>
                <label className="col-sm-2 control-label">COMPRESSION RATIO?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeInfoCompressionratio"/></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">DISPLACEMENT?</label>
                <div className="col-sm-4"><input type="number" className="form-control" name="bikeInfoDisplacement" /></div>
                <label className="col-sm-2 control-label">ENGINE?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeInfoEngine" /></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">EXHAUST?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeInfoExhaust"/></div>
                <label className="col-lg-2 control-label">FUELSYSTEM?</label>
                <div className="col-lg-4"><input type="text" className="form-control" name="bikeInfoFuelsystem"/></div>
              </div>

              <div className="form-group"><label className="col-sm-2 control-label">STROKE?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeInfoStroke"/></div>
                <label className="col-lg-2 control-label">TRANSMISSION?</label>
                <div className="col-lg-4"><input type="text" className="form-control" name="bikeInfoTransmission"/></div>
              </div>

              <div className="hr-line-dashed" />

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


              <div className="form-group">
                <div className="col-sm-4 col-sm-offset-2">
                  <button className="btn btn-white" type="submit">Cancel</button>
                  <button className="btn btn-primary" type="submit">Save changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps, { addProduct })(adminproductinsert);

// export default adminproductinsert;