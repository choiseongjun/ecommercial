import React,{ Component }  from 'react';
import './adminproductinsert.css';
import { connect } from 'react-redux';
import { addProduct } from '../../../action/productActions';

class adminproductinsert extends Component{
  constructor(props){
      super(props);
      console.log(props);
      this.onbikeNameChange = this.onbikeNameChange.bind(this);
      this.onbikeCcChange=this.onbikeCcChange.bind(this);
      this.onbikeBrandChange=this.onbikeBrandChange.bind(this);
      this.onbikeOrigPriceChange=this.onbikeOrigPriceChange.bind(this);
      this.onbikeCtryChange=this.onbikeCtryChange.bind(this);
      this.onbikeKindChange=this.onbikeKindChange.bind(this);
      this.onbikeBoreChange=this.onbikeBoreChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
         this.state = {
            bikeName: '',
            bikeCc:'',
            bikeBrand:'',
            bikeOrigPrice:'',
            bikeCtry:'',
            bikeKind:'',
            bikeBore:''
 
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
  onbikeCcChange(e) {
      const bikeCc = e.target.value;
    
      this.setState(() => ({ bikeCc: bikeCc }));
  }
  onbikeBrandChange(e) {
    const bikeBrand = e.target.value;
  
    this.setState(() => ({ bikeBrand: bikeBrand }));
}
onbikeOrigPriceChange(e) {
  const bikeOrigPrice = e.target.value;

  this.setState(() => ({ bikeOrigPrice: bikeOrigPrice }));
}
onbikeCtryChange(e){
  const bikeCtry=e.target.value;

  this.setState(() => ({ bikeCtry: bikeCtry }));
}
onbikeKindChange(e){
  const bikeKind=e.target.value;
  this.setState(() => ({ bikeKind: bikeKind }));
}
onbikeBoreChange(e){
  const bikeBore=e.target.value;
  this.setState(() => ({ bikeBore: bikeBore }));
}
  _delete(){
    // 어케 삭제하지...? 흠....... 고민좀.
    console.log("aaaaa");
  }
  onSubmit = (e) => {
    e.preventDefault();
    const product=this.state;

    console.log(product);
    this.props.addProduct(product);

    // Add item via addItem action


    // Close Modal

  }

  render(){
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
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeCc"
                value={this.state.bikeCc}
                onChange={this.onbikeCcChange} /></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">출시가</label>
                <div className="col-sm-4"><input type="number" className="form-control" name="bikeOrigPrice" 
                value={this.state.bikeOrigPrice}
                onChange={this.onbikeOrigPriceChange}/></div>
                <label className="col-sm-2 control-label">브랜드</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeBrand" 
                value={this.state.bikeBrand}
                onChange={this.onbikeBrandChange}/></div>
              </div>
              
              <div className="form-group"><label className="col-sm-2 control-label">제조사</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeCtry" 
                value={this.state.bikeCtry}
                onChange={this.onbikeCtryChange} /></div>
                <label className="col-lg-2 control-label">장르</label>
                <div className="col-lg-4"><input type="text" className="form-control" name="bikeKind"
                value={this.state.bikeKind}
                onChange={this.onbikeKindChange}/></div>
              </div>
              
              <div className="hr-line-dashed" />
              
              <div>
                <h5>판매 > BIKE ENGINE INFO <small></small></h5>
              </div>

              <input type="hidden" name="bikeSeq" />
              <div className="form-group"><label className="col-sm-2 control-label">BORE?</label>
                <div className="col-sm-4"><input type="text" className="form-control" name="bikeBore" 
                value={this.state.bikeBore}
                onChange={this.onbikeBoreChange}/></div>
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
  product: state.product
})

export default connect(mapStateToProps, { addProduct })(adminproductinsert);

// export default adminproductinsert;