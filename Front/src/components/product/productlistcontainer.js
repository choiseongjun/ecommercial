import React, { Component } from 'react';
import productlist from '/productlist';

class productlistcontainer extends Component {
    constructor(props){
      super(props);
    console.log('asda container'); 
    }
    render() {
        
        return (
            <productlist />
        )
    }
}
export default productlistcontainer; 